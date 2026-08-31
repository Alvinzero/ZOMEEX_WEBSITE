<?php
/**
 * Enqueue script and styles for child theme
 */
function woodmart_child_enqueue_styles() {
	wp_enqueue_style( 'child-style', get_stylesheet_directory_uri() . '/style.css', array( 'woodmart-style' ), woodmart_get_theme_info( 'Version' ) );

	if ( is_front_page() ) {
		wp_enqueue_script(
			'zomeex-home',
			get_stylesheet_directory_uri() . '/assets/zomeex-home.js',
			array(),
			'1.1.0',
			true
		);
	}
}
add_action( 'wp_enqueue_scripts', 'woodmart_child_enqueue_styles', 10010 );

/**
 * Keep the redesigned homepage independent from Elementor's page canvas.
 */
function zomeex_home_body_class( $classes ) {
	if ( is_front_page() ) {
		$classes[] = 'zomeex-home-page';
	}

	return $classes;
}
add_filter( 'body_class', 'zomeex_home_body_class' );

/**
 * Elementor can override a page's template choice. The homepage is intentionally
 * rendered by the child theme so its catalogue layout remains deterministic.
 */
function zomeex_force_home_template( $template ) {
	if ( is_front_page() ) {
		return get_stylesheet_directory() . '/front-page.php';
	}

	return $template;
}
add_filter( 'template_include', 'zomeex_force_home_template', 999 );

/**
 * The imported Woodmart options include an empty promo popup. Keep it off on
 * the redesigned homepage so the catalogue hero is not covered by a legacy
 * full-screen overlay; other routes retain their existing theme behaviour.
 */
function zomeex_disable_home_promo_popup( $value, $slug ) {
	if ( 'promo_popup' === $slug && is_front_page() ) {
		return false;
	}

	return $value;
}
add_filter( 'woodmart_option', 'zomeex_disable_home_promo_popup', 20, 2 );

/**
 * Small URL helpers keep the homepage portable between local and production.
 */
function zomeex_home_url( $path = '/' ) {
	return home_url( '/' . ltrim( $path, '/' ) );
}

function zomeex_page_url( $slug, $fallback = '/' ) {
	$page = get_page_by_path( trim( $slug, '/' ) );

	return $page ? get_permalink( $page ) : zomeex_home_url( $fallback );
}

function zomeex_upload_url( $filename ) {
	$uploads = wp_upload_dir();

	return trailingslashit( $uploads['baseurl'] ) . '2025/11/' . ltrim( $filename, '/' );
}

/**
 * Render the configured GTranslate picker for the redesigned homepage.
 * The plugin owns the language list and translation behavior; the child theme
 * only chooses the searchable popup presentation used in the primary header.
 */
function zomeex_language_switcher() {
	if ( ! shortcode_exists( 'gtranslate' ) ) {
		return '';
	}

	return do_shortcode( '[gtranslate widget_look="popup_search"]' );
}
