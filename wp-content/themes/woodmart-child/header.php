<?php
/**
 * Homepage header for the ZOMEEX catalogue direction.
 * Other routes continue to use Woodmart's original header.
 */
if ( ! is_front_page() ) {
	include get_template_directory() . '/header.php';
	return;
}
$shop_url = function_exists( 'wc_get_page_permalink' ) ? wc_get_page_permalink( 'shop' ) : zomeex_home_url( '/shop/' );
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
				<div class="zomeex-nav-dropdown" data-nav-dropdown>
					<button class="zomeex-nav-trigger" type="button" data-nav-dropdown-toggle aria-expanded="false" aria-haspopup="menu" aria-controls="zomeex-products-menu">Products <span aria-hidden="true">⌄</span></button>
					<div class="zomeex-mega-menu" id="zomeex-products-menu" data-nav-dropdown-panel role="menu" hidden>
							<div class="zomeex-mega-menu__inner zomeex-container">
							<div class="zomeex-mega-menu__intro"><p>Product catalogue</p><h2>Choose the system<br>behind your brief.</h2><a href="<?php echo esc_url( $shop_url ); ?>">View all products <span aria-hidden="true">↗</span></a></div>
							<div class="zomeex-mega-menu__portals">
								<?php foreach ( zomeex_product_portals() as $portal ) : ?>
									<?php $portal_url = zomeex_portal_url( $portal ); ?>
									<div class="zomeex-mega-menu__portal">
										<a class="zomeex-mega-menu__portal-title" href="<?php echo esc_url( $portal_url ); ?>"><strong><?php echo esc_html( $portal['name'] ); ?></strong><span aria-hidden="true">↗</span></a>
										<p><?php echo esc_html( $portal['description'] ); ?></p>
										<?php if ( $portal['children'] ) : ?><div class="zomeex-mega-menu__children"><?php foreach ( $portal['children'] as $child ) : ?><?php $child_term = get_term_by( 'slug', $child['slug'], 'product_cat' ); ?><a role="menuitem" href="<?php echo esc_url( $child_term && ! is_wp_error( $child_term ) ? get_term_link( $child_term ) : $portal_url ); ?>"><?php echo esc_html( $child['name'] ); ?></a><?php endforeach; ?></div><?php endif; ?>
									</div>
								<?php endforeach; ?>
							</div>
						</div>
					</div>
				</div>
				<div class="zomeex-nav-dropdown" data-nav-dropdown>
					<button class="zomeex-nav-trigger" type="button" data-nav-dropdown-toggle aria-expanded="false" aria-haspopup="menu" aria-controls="zomeex-solutions-menu">Solutions <span aria-hidden="true">⌄</span></button>
					<div class="zomeex-nav-popover" id="zomeex-solutions-menu" data-nav-dropdown-panel role="menu" hidden>
						<a role="menuitem" href="<?php echo esc_url( zomeex_home_url( '/#zomeex-capability-title' ) ); ?>"><strong>OEM / ODM projects</strong><small>From product concept to market-ready</small></a>
						<a role="menuitem" href="<?php echo esc_url( zomeex_home_url( '/#zomeex-proof-title' ) ); ?>"><strong>Packaging and compliance</strong><small>Formats, documentation, and market context</small></a>
						<a role="menuitem" href="<?php echo esc_url( zomeex_home_url( '/#zomeex-capability-title' ) ); ?>"><strong>Equipment integration</strong><small>Connect hardware and filling workflows</small></a>
						<a role="menuitem" href="<?php echo esc_url( zomeex_page_url( 'contact-us', '/contact-us/' ) ); ?>"><strong>Talk through a brief</strong><small>Share target market and quantity</small></a>
					</div>
				</div>
				<a href="<?php echo esc_url( zomeex_page_url( 'news', '/news/' ) ); ?>">Insights</a>
				<a href="<?php echo esc_url( zomeex_page_url( 'about-us-3', '/about-us-3/' ) ); ?>">About</a>
			</nav>
			<div class="zomeex-header__actions">
				<button class="zomeex-icon-button" type="button" data-search-toggle aria-expanded="false" aria-controls="zomeex-search-panel" aria-label="Open search"><span aria-hidden="true">⌕</span></button>
				<div class="zomeex-language-switcher" aria-label="Language selector">
					<?php echo zomeex_language_switcher(); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
				</div>
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
				<div class="zomeex-mobile-nav__group" data-mobile-nav-group>
					<button type="button" data-mobile-nav-toggle aria-expanded="false" aria-controls="zomeex-mobile-products">Products <span aria-hidden="true">+</span></button>
					<div id="zomeex-mobile-products" data-mobile-nav-panel hidden>
						<?php foreach ( zomeex_product_portals() as $portal ) : ?>
							<?php $portal_url = zomeex_portal_url( $portal ); ?>
							<a href="<?php echo esc_url( $portal_url ); ?>"><strong><?php echo esc_html( $portal['name'] ); ?></strong><small><?php echo esc_html( $portal['label'] ); ?></small><span aria-hidden="true">↗</span></a>
							<?php if ( $portal['children'] ) : ?>
								<div class="zomeex-mobile-nav__children">
									<?php foreach ( $portal['children'] as $child ) : ?>
										<?php $child_term = get_term_by( 'slug', $child['slug'], 'product_cat' ); ?>
										<a href="<?php echo esc_url( $child_term && ! is_wp_error( $child_term ) ? get_term_link( $child_term ) : $portal_url ); ?>"><?php echo esc_html( $child['name'] ); ?><span aria-hidden="true">↗</span></a>
									<?php endforeach; ?>
								</div>
							<?php endif; ?>
						<?php endforeach; ?>
					</div>
				</div>
				<div class="zomeex-mobile-nav__group" data-mobile-nav-group>
					<button type="button" data-mobile-nav-toggle aria-expanded="false" aria-controls="zomeex-mobile-solutions">Solutions <span aria-hidden="true">+</span></button>
					<div id="zomeex-mobile-solutions" data-mobile-nav-panel hidden><a href="<?php echo esc_url( zomeex_home_url( '/#zomeex-capability-title' ) ); ?>"><strong>OEM / ODM</strong><small>Projects and product development</small></a><a href="<?php echo esc_url( zomeex_home_url( '/#zomeex-proof-title' ) ); ?>"><strong>Packaging and compliance</strong><small>Formats and market context</small></a><a href="<?php echo esc_url( zomeex_page_url( 'contact-us', '/contact-us/' ) ); ?>"><strong>Talk through a brief</strong><small>Share target market and quantity</small></a></div>
				</div>
				<a href="<?php echo esc_url( zomeex_page_url( 'news', '/news/' ) ); ?>">Insights <span aria-hidden="true">↗</span></a>
				<a href="<?php echo esc_url( zomeex_page_url( 'about-us-3', '/about-us-3/' ) ); ?>">About <span aria-hidden="true">↗</span></a>
				<a class="zomeex-mobile-nav__cta" href="<?php echo esc_url( zomeex_page_url( 'contact-us', '/contact-us/' ) ); ?>">Request a quote <span>↗</span></a>
			</div>
		</nav>
		</header>
