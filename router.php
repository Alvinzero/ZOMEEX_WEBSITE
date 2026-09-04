<?php
/**
 * Router for the PHP built-in development server.
 *
 * Usage:  PHP_CLI_SERVER_WORKERS=8 php -S localhost:8000 router.php
 *
 * Two jobs:
 *   1. Serve static files ourselves. PHP's built-in server mis-resolves
 *      non-ASCII (e.g. Chinese) paths after a router returns false, so any
 *      file with a UTF-8 name 404s. Reading it directly fixes that.
 *   2. Hand everything else to WordPress' front controller so pretty
 *      permalinks keep working.
 */

$root = rtrim( $_SERVER['DOCUMENT_ROOT'], '/' );

// Strip the query string by hand: parse_url() mangles non-ASCII (Chinese)
// paths, which is exactly what this site's uploads are full of.
$uri      = $_SERVER['REQUEST_URI'];
$query_at = strpos( $uri, '?' );
$raw_path = false === $query_at ? $uri : substr( $uri, 0, $query_at );

// Safe either way: if the server already decoded it, there is no % left to turn.
$path = urldecode( $raw_path );
$path = '/' . ltrim( $path, '/' );

$file = realpath( $root . $path );

// Guard against path traversal outside the document root.
if ( $file && strpos( $file, $root ) !== 0 ) {
	$file = false;
}

// --- Directories: redirect to trailing slash, then use the index file. ---
if ( $file && is_dir( $file ) ) {
	if ( substr( $path, -1 ) !== '/' ) {
		header( 'Location: ' . $path . '/' );
		exit;
	}
	foreach ( array( 'index.php', 'index.html' ) as $index ) {
		if ( is_file( $file . '/' . $index ) ) {
			$file = $file . '/' . $index;
			break;
		}
	}
}

if ( $file && is_file( $file ) ) {
	// PHP belongs to the built-in server; let it execute.
	if ( 'php' === strtolower( pathinfo( $file, PATHINFO_EXTENSION ) ) ) {
		return false;
	}

	$size = filesize( $file );
	// macOS often reports text assets as text/plain. Use the extension first so
	// browsers apply the right parser (especially for CSS, fonts, and SVG).
	$mime_map = array(
		'css'   => 'text/css; charset=UTF-8',
		'js'    => 'application/javascript; charset=UTF-8',
		'mjs'   => 'text/javascript; charset=UTF-8',
		'json'  => 'application/json; charset=UTF-8',
		'xml'   => 'application/xml; charset=UTF-8',
		'svg'   => 'image/svg+xml',
		'webp'  => 'image/webp',
		'png'   => 'image/png',
		'jpg'   => 'image/jpeg',
		'jpeg'  => 'image/jpeg',
		'gif'   => 'image/gif',
		'ico'   => 'image/x-icon',
		'woff'  => 'font/woff',
		'woff2' => 'font/woff2',
		'ttf'   => 'font/ttf',
		'otf'   => 'font/otf',
		'pdf'   => 'application/pdf',
		'mp4'   => 'video/mp4',
		'webm'  => 'video/webm',
		'mp3'   => 'audio/mpeg',
		'wav'   => 'audio/wav',
	);
	$extension = strtolower( pathinfo( $file, PATHINFO_EXTENSION ) );
	$mime      = isset( $mime_map[ $extension ] )
		? $mime_map[ $extension ]
		: ( @mime_content_type( $file ) ?: 'application/octet-stream' );
	$etag = '"' . md5( $file . ':' . $size . ':' . filemtime( $file ) ) . '"';

	header( 'Content-Type: ' . $mime );
	header( 'Content-Length: ' . $size );
	header( 'ETag: ' . $etag );
	header( 'Cache-Control: no-cache, must-revalidate' );
	header( 'Accept-Ranges: bytes' );

	// Conditional GET — keeps repeat loads cheap.
	$if_none = isset( $_SERVER['HTTP_IF_NONE_MATCH'] ) ? trim( $_SERVER['HTTP_IF_NONE_MATCH'] ) : '';
	if ( $if_none && $if_none === $etag ) {
		http_response_code( 304 );
		exit;
	}

	// Range requests, needed for video/audio seeking.
	$range = isset( $_SERVER['HTTP_RANGE'] ) ? $_SERVER['HTTP_RANGE'] : '';
	if ( $range && preg_match( '/bytes=(\d*)-(\d*)/', $range, $m ) ) {
		$start = ( '' === $m[1] ) ? 0 : (int) $m[1];
		$end   = ( '' === $m[2] ) ? $size - 1 : min( (int) $m[2], $size - 1 );
		if ( $start > $end || $start >= $size ) {
			http_response_code( 416 );
			header( "Content-Range: bytes */$size" );
			exit;
		}
		http_response_code( 206 );
		header( "Content-Range: bytes $start-$end/$size" );
		header( 'Content-Length: ' . ( $end - $start + 1 ) );
		$fh = fopen( $file, 'rb' );
		fseek( $fh, $start );
		$left = $end - $start + 1;
		while ( $left > 0 && ! feof( $fh ) ) {
			$chunk = min( 8192, $left );
			echo fread( $fh, $chunk );
			$left -= $chunk;
		}
		fclose( $fh );
		exit;
	}

	readfile( $file );
	exit;
}

// --- Everything else is a WordPress route. ---
require_once __DIR__ . '/index.php';
