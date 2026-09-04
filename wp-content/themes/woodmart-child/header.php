<?php
/**
 * Homepage header for the ZOMEEX catalogue direction.
 * Other routes continue to use Woodmart's original header.
 */
if ( ! zomeex_is_modern_route() ) {
	include get_template_directory() . '/header.php';
	return;
}
$shop_url    = function_exists( 'wc_get_page_permalink' ) ? wc_get_page_permalink( 'shop' ) : zomeex_home_url( '/shop/' );
$account_url = function_exists( 'zomeex_account_url' ) ? zomeex_account_url() : zomeex_home_url( '/my-account/' );
$cart_url    = function_exists( 'zomeex_cart_url' ) ? zomeex_cart_url() : zomeex_home_url( '/cart/' );
$cart_count  = function_exists( 'zomeex_cart_count' ) ? zomeex_cart_count() : 0;
$quote_url   = function_exists( 'zomeex_quote_url' ) ? zomeex_quote_url() : zomeex_home_url( '/quote-request/' );
$pack_portal = isset( zomeex_product_portals()['pack'] ) ? zomeex_product_portals()['pack'] : array( 'name' => 'PACK', 'fallback' => $shop_url );
$pack_url    = zomeex_portal_url( $pack_portal );
$faq_url     = function_exists( 'zomeex_faq_url' ) ? zomeex_faq_url() : zomeex_home_url( '/faq/' );
$packaging_types = function_exists( 'zomeex_packaging_categories' ) ? zomeex_packaging_categories() : array();
$applications    = function_exists( 'zomeex_application_scenarios' ) ? zomeex_application_scenarios() : array();
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
	<div class="wd-page-wrapper website-wrapper zomeex-site-shell notranslate" translate="no" data-zomeex-i18n-root>
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
							<div class="zomeex-mega-menu__column zomeex-mega-menu__column--products">
								<p class="zomeex-mega-menu__eyebrow">Shop by product</p>
								<div class="zomeex-mega-menu__portal-list">
									<?php foreach ( zomeex_product_portals() as $portal ) : ?>
										<?php $portal_url = zomeex_portal_url( $portal ); ?>
										<a class="zomeex-mega-menu__portal-link" role="menuitem" href="<?php echo esc_url( $portal_url ); ?>"><span><strong><?php echo esc_html( $portal['name'] ); ?></strong><small><?php echo esc_html( $portal['label'] ); ?></small></span><span aria-hidden="true">↗</span></a>
									<?php endforeach; ?>
								</div>
								<div class="zomeex-mega-menu__subsection">
									<p class="zomeex-mega-menu__eyebrow">Packaging types</p>
									<div class="zomeex-mega-menu__link-list">
										<?php foreach ( $packaging_types as $type ) : ?>
											<?php $type_term = get_term_by( 'slug', $type['slug'], 'product_cat' ); $type_url = $type_term && ! is_wp_error( $type_term ) ? get_term_link( $type_term ) : $pack_url; ?>
											<a role="menuitem" href="<?php echo esc_url( $type_url ); ?>"><?php echo esc_html( $type['name'] ); ?><span aria-hidden="true">↗</span></a>
										<?php endforeach; ?>
									</div>
								</div>
							</div>
							<div class="zomeex-mega-menu__column zomeex-mega-menu__column--applications">
								<p class="zomeex-mega-menu__eyebrow">Shop by application</p>
								<div class="zomeex-mega-menu__link-list zomeex-mega-menu__link-list--large">
									<?php foreach ( $applications as $application ) : ?>
										<a role="menuitem" href="<?php echo esc_url( zomeex_home_url( '/#zomeex-application-panel-' . $application['slug'] ) ); ?>"><?php echo esc_html( $application['name'] ); ?><span aria-hidden="true">↗</span></a>
									<?php endforeach; ?>
								</div>
								<div class="zomeex-mega-menu__subsection">
									<p class="zomeex-mega-menu__eyebrow">Resources</p>
									<div class="zomeex-mega-menu__link-list">
										<a role="menuitem" href="<?php echo esc_url( add_query_arg( 'resource', 'dieline', $quote_url ) ); ?>">Free dieline guidance <span aria-hidden="true">↗</span></a>
										<a role="menuitem" href="<?php echo esc_url( $faq_url ); ?>">Packaging FAQ <span aria-hidden="true">↗</span></a>
									</div>
								</div>
							</div>
							<aside class="zomeex-mega-menu__feature">
								<div class="zomeex-mega-menu__feature-media"><img src="<?php echo esc_url( zomeex_upload_url( 'pack_0002_背卡盒子_0003_背卡-拷贝-768x768.jpg' ) ); ?>" alt="Packaging sample kit" loading="lazy" width="768" height="768"></div>
								<div class="zomeex-mega-menu__feature-copy"><p class="zomeex-mega-menu__eyebrow">Need a closer look?</p><h3>Request a physical sample kit.</h3><p>Share your target market and format. We will confirm the available pack and shipping route.</p><a href="<?php echo esc_url( add_query_arg( 'resource', 'sample-kit', $quote_url ) ); ?>">Request sample kit <span aria-hidden="true">↗</span></a></div>
							</aside>
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
				<div class="zomeex-header__utility" aria-label="Account tools">
					<button class="zomeex-icon-button zomeex-utility-link" type="button" data-search-toggle aria-expanded="false" aria-controls="zomeex-search-panel" aria-label="Open search" title="Search">
						<span class="zomeex-utility-link__icon fas fa-search" aria-hidden="true"></span><span class="zomeex-visually-hidden">Search</span>
					</button>
					<a class="zomeex-icon-button zomeex-utility-link zomeex-account-link" href="<?php echo esc_url( $account_url ); ?>" aria-label="Account" title="Account">
						<span class="zomeex-utility-link__icon fas fa-user" aria-hidden="true"></span><span class="zomeex-visually-hidden">Account</span>
					</a>
					<a class="zomeex-icon-button zomeex-utility-link zomeex-cart-link" href="<?php echo esc_url( $cart_url ); ?>" aria-label="Cart" title="Cart">
						<span class="zomeex-utility-link__icon fas fa-shopping-cart" aria-hidden="true"></span><span class="zomeex-visually-hidden">Cart</span><span class="zomeex-cart-count" data-cart-count aria-label="<?php echo esc_attr( sprintf( '%d items in cart', $cart_count ) ); ?>"<?php echo $cart_count > 0 ? '' : ' hidden'; ?>><?php echo esc_html( $cart_count ); ?></span>
					</a>
				</div>
				<div class="zomeex-language-switcher" aria-label="Language selector">
					<?php echo zomeex_language_switcher(); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
				</div>
				<a class="zomeex-header__quote" href="<?php echo esc_url( zomeex_quote_url() ); ?>"><span data-quote-count hidden>0</span>Quote list <span aria-hidden="true">↗</span></a>
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
				<div class="zomeex-mobile-nav__utility" aria-label="Account tools">
					<a class="zomeex-mobile-nav__utility-link" href="<?php echo esc_url( $account_url ); ?>"><span class="fas fa-user" aria-hidden="true"></span><strong>Account</strong></a>
					<a class="zomeex-mobile-nav__utility-link" href="<?php echo esc_url( $cart_url ); ?>"><span class="fas fa-shopping-cart" aria-hidden="true"></span><strong>Cart</strong><span class="zomeex-cart-count" data-cart-count aria-label="<?php echo esc_attr( sprintf( '%d items in cart', $cart_count ) ); ?>"<?php echo $cart_count > 0 ? '' : ' hidden'; ?>><?php echo esc_html( $cart_count ); ?></span></a>
				</div>
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
										<div class="zomeex-mobile-nav__children zomeex-mobile-nav__children--section">
											<strong class="zomeex-mobile-nav__label">Packaging types</strong>
											<?php foreach ( $packaging_types as $type ) : ?>
												<?php $type_term = get_term_by( 'slug', $type['slug'], 'product_cat' ); $type_url = $type_term && ! is_wp_error( $type_term ) ? get_term_link( $type_term ) : $pack_url; ?>
												<a href="<?php echo esc_url( $type_url ); ?>"><?php echo esc_html( $type['name'] ); ?><span aria-hidden="true">↗</span></a>
											<?php endforeach; ?>
										</div>
										<div class="zomeex-mobile-nav__children zomeex-mobile-nav__children--section">
											<strong class="zomeex-mobile-nav__label">Shop by application</strong>
											<?php foreach ( $applications as $application ) : ?>
												<a href="<?php echo esc_url( zomeex_home_url( '/#zomeex-application-panel-' . $application['slug'] ) ); ?>"><?php echo esc_html( $application['name'] ); ?><span aria-hidden="true">↗</span></a>
											<?php endforeach; ?>
											<a href="<?php echo esc_url( add_query_arg( 'resource', 'dieline', $quote_url ) ); ?>">Free dieline guidance<span aria-hidden="true">↗</span></a>
											<a href="<?php echo esc_url( $faq_url ); ?>">Packaging FAQ<span aria-hidden="true">↗</span></a>
										</div>
									</div>
				</div>
				<div class="zomeex-mobile-nav__group" data-mobile-nav-group>
					<button type="button" data-mobile-nav-toggle aria-expanded="false" aria-controls="zomeex-mobile-solutions">Solutions <span aria-hidden="true">+</span></button>
					<div id="zomeex-mobile-solutions" data-mobile-nav-panel hidden><a href="<?php echo esc_url( zomeex_home_url( '/#zomeex-capability-title' ) ); ?>"><strong>OEM / ODM</strong><small>Projects and product development</small></a><a href="<?php echo esc_url( zomeex_home_url( '/#zomeex-proof-title' ) ); ?>"><strong>Packaging and compliance</strong><small>Formats and market context</small></a><a href="<?php echo esc_url( zomeex_page_url( 'contact-us', '/contact-us/' ) ); ?>"><strong>Talk through a brief</strong><small>Share target market and quantity</small></a></div>
				</div>
				<a href="<?php echo esc_url( zomeex_page_url( 'news', '/news/' ) ); ?>">Insights <span aria-hidden="true">↗</span></a>
				<a href="<?php echo esc_url( zomeex_page_url( 'about-us-3', '/about-us-3/' ) ); ?>">About <span aria-hidden="true">↗</span></a>
				<a class="zomeex-mobile-nav__cta" href="<?php echo esc_url( zomeex_quote_url() ); ?>"><span data-quote-count hidden>0</span>Open quote list <span>↗</span></a>
			</div>
		</nav>
		</header>
		<a class="zomeex-quote-float" href="<?php echo esc_url( zomeex_quote_url() ); ?>"><span data-quote-count hidden>0</span>Quote list <span aria-hidden="true">↗</span></a>
