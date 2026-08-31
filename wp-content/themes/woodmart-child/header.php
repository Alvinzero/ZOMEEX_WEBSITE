<?php
/**
 * Homepage header for the ZOMEEX catalogue direction.
 * Other routes continue to use Woodmart's original header.
 */
if ( ! is_front_page() ) {
	include get_template_directory() . '/header.php';
	return;
}
?><!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">
	<?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
	<?php wp_body_open(); ?>
	<?php do_action( 'woodmart_after_body_open' ); ?>
	<div class="wd-page-wrapper website-wrapper zomeex-site-shell">
		<div class="zomeex-announcement" data-announcement>
			<div class="zomeex-container zomeex-announcement__inner">
				<span>Samples and OEM/ODM support available</span>
				<button type="button" class="zomeex-announcement__close" data-dismiss-announcement aria-label="Dismiss announcement">&times;</button>
			</div>
		</div>
		<header class="zomeex-header" data-site-header>
			<div class="zomeex-container zomeex-header__inner">
			<a class="zomeex-wordmark" href="<?php echo esc_url( zomeex_home_url() ); ?>" aria-label="ZOMEEX home">ZOMEEX</a>
			<nav class="zomeex-desktop-nav" aria-label="Primary navigation">
				<a href="<?php echo esc_url( zomeex_home_url( '/shop/' ) ); ?>">Products</a>
				<a href="<?php echo esc_url( zomeex_home_url( '/#zomeex-capability-title' ) ); ?>">Solutions</a>
				<a href="<?php echo esc_url( zomeex_page_url( 'news', '/news/' ) ); ?>">Insights</a>
				<a href="<?php echo esc_url( zomeex_page_url( 'about-us-3', '/about-us-3/' ) ); ?>">About</a>
			</nav>
			<div class="zomeex-header__actions">
				<button class="zomeex-icon-button" type="button" data-search-toggle aria-expanded="false" aria-controls="zomeex-search-panel" aria-label="Open search"><span aria-hidden="true">⌕</span></button>
				<a class="zomeex-header__quote" href="<?php echo esc_url( zomeex_page_url( 'contact-us', '/contact-us/' ) ); ?>">Request a quote <span aria-hidden="true">↗</span></a>
				<button class="zomeex-menu-toggle" type="button" data-menu-toggle aria-expanded="false" aria-controls="zomeex-mobile-nav" aria-label="Open menu"><span></span><span></span></button>
			</div>
		</div>
		<div class="zomeex-search-panel" id="zomeex-search-panel" data-search-panel hidden>
			<div class="zomeex-container">
				<form role="search" method="get" action="<?php echo esc_url( zomeex_home_url( '/' ) ); ?>" class="zomeex-search-form">
					<label for="zomeex-search-input">Search products and insights</label>
					<div><input id="zomeex-search-input" type="search" name="s" placeholder="Search by product, SKU, or use" autocomplete="off"><button type="submit">Search <span aria-hidden="true">↗</span></button></div>
				</form>
			</div>
		</div>
		<nav class="zomeex-mobile-nav" id="zomeex-mobile-nav" data-mobile-nav hidden aria-label="Mobile navigation">
			<div class="zomeex-container">
				<a href="<?php echo esc_url( zomeex_home_url( '/shop/' ) ); ?>">Products <span>01</span></a>
				<a href="<?php echo esc_url( zomeex_home_url( '/#zomeex-capability-title' ) ); ?>">Solutions <span>02</span></a>
				<a href="<?php echo esc_url( zomeex_page_url( 'news', '/news/' ) ); ?>">Insights <span>03</span></a>
				<a href="<?php echo esc_url( zomeex_page_url( 'about-us-3', '/about-us-3/' ) ); ?>">About <span>04</span></a>
				<a class="zomeex-mobile-nav__cta" href="<?php echo esc_url( zomeex_page_url( 'contact-us', '/contact-us/' ) ); ?>">Request a quote <span>↗</span></a>
			</div>
		</nav>
		</header>
