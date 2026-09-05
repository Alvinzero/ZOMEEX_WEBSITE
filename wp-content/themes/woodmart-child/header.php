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
$about_url       = zomeex_page_url( 'about-us-3', '/about-us-3/' );
$contact_url     = zomeex_page_url( 'contact-us', '/contact-us/' );
$news_url        = zomeex_page_url( 'news', '/news/' );
$collection_url  = function ( $slug, $query = array() ) use ( $pack_url ) {
	$term = get_term_by( 'slug', sanitize_title( $slug ), 'product_cat' );
	$url  = $term && ! is_wp_error( $term ) ? get_term_link( $term ) : add_query_arg( 'collection', sanitize_title( $slug ), $pack_url );

	return $query ? add_query_arg( $query, $url ) : $url;
};
$child_resistant_types = array(
	array( 'name' => 'Child-Resistant Mylar Bags', 'slug' => 'mylar-bag' ),
	array( 'name' => 'Child-Resistant Paper Boxes', 'slug' => 'vape-box' ),
	array( 'name' => 'Child-Resistant Jars & Bottles', 'slug' => 'pack' ),
	array( 'name' => 'Child-Resistant Tubes', 'slug' => 'pack' ),
);
$dieline_url = add_query_arg( 'resource', 'dieline', $quote_url );
$artwork_url = add_query_arg( 'resource', 'artwork', $quote_url );
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
			<a class="zomeex-wordmark" href="<?php echo esc_url( zomeex_home_url() ); ?>" aria-label="ZOMEEX home">
				<img src="<?php echo esc_url( zomeex_upload_url( 'zomeex-logo_03.svg', '2026/05' ) ); ?>" alt="ZOMEEX" width="340" height="85">
			</a>
			<nav class="zomeex-desktop-nav" aria-label="Primary navigation">
				<div class="zomeex-nav-dropdown" data-nav-dropdown>
					<button class="zomeex-nav-trigger" id="zomeex-products-trigger" type="button" data-nav-dropdown-toggle aria-expanded="false" aria-haspopup="true" aria-controls="zomeex-products-menu"><span class="zomeex-nav-trigger__label" data-zomeex-i18n="nav.products">Products</span><span aria-hidden="true">⌄</span></button>
					<div class="zomeex-mega-menu" id="zomeex-products-menu" data-nav-dropdown-panel aria-labelledby="zomeex-products-trigger" hidden>
						<div class="zomeex-mega-menu__inner zomeex-container">
							<div class="zomeex-mega-menu__column zomeex-mega-menu__column--products">
								<p class="zomeex-mega-menu__eyebrow">Shop by product type</p>
								<div class="zomeex-mega-menu__link-list zomeex-mega-menu__link-list--large">
									<?php foreach ( $packaging_types as $type ) : ?>
										<a href="<?php echo esc_url( $collection_url( $type['slug'] ) ); ?>"><?php echo esc_html( $type['name'] ); ?><span aria-hidden="true">↗</span></a>
									<?php endforeach; ?>
								</div>
							</div>
							<div class="zomeex-mega-menu__column zomeex-mega-menu__column--applications">
								<p class="zomeex-mega-menu__eyebrow">Shop by size &amp; route</p>
								<div class="zomeex-mega-menu__link-list zomeex-mega-menu__link-list--large">
									<a href="<?php echo esc_url( add_query_arg( 'view', 'size', $pack_url ) ); ?>">Shop by Size<span aria-hidden="true">↗</span></a>
									<a href="<?php echo esc_url( zomeex_portal_url( zomeex_product_portals()['vape'] ) ); ?>">Vape Hardware<span aria-hidden="true">↗</span></a>
									<a href="<?php echo esc_url( zomeex_portal_url( zomeex_product_portals()['switch'] ) ); ?>">Equipment &amp; Machinery<span aria-hidden="true">↗</span></a>
									<a href="<?php echo esc_url( $contact_url ); ?>">OEM / ODM Projects<span aria-hidden="true">↗</span></a>
								</div>
								<div class="zomeex-mega-menu__subsection">
									<p class="zomeex-mega-menu__eyebrow">Quick order</p>
									<div class="zomeex-mega-menu__link-list">
										<a href="<?php echo esc_url( $shop_url ); ?>">All Products<span aria-hidden="true">↗</span></a>
										<a href="<?php echo esc_url( $quote_url ); ?>">Get a Quote<span aria-hidden="true">↗</span></a>
									</div>
								</div>
							</div>
							<aside class="zomeex-mega-menu__feature">
								<div class="zomeex-mega-menu__feature-media"><img src="<?php echo esc_url( zomeex_upload_url( 'pack_0002_背卡盒子_0003_背卡-拷贝-768x768.jpg' ) ); ?>" alt="Packaging sample kit" loading="lazy" width="768" height="768"></div>
								<div class="zomeex-mega-menu__feature-copy"><p class="zomeex-mega-menu__eyebrow">Free sample pack</p><h3>See the formats before you commit.</h3><p>Compare bags, boxes, jars and finishes with a sample conversation.</p><a href="<?php echo esc_url( add_query_arg( 'resource', 'sample-kit', $quote_url ) ); ?>">Request sample pack <span aria-hidden="true">↗</span></a></div>
							</aside>
						</div>
					</div>
				</div>
				<div class="zomeex-nav-dropdown" data-nav-dropdown>
					<button class="zomeex-nav-trigger" id="zomeex-child-resistant-trigger" type="button" data-nav-dropdown-toggle aria-expanded="false" aria-haspopup="true" aria-controls="zomeex-child-resistant-menu"><span class="zomeex-nav-trigger__label" data-zomeex-i18n="nav.childResistant">Child-resistant</span><span aria-hidden="true">⌄</span></button>
					<div class="zomeex-mega-menu" id="zomeex-child-resistant-menu" data-nav-dropdown-panel hidden>
						<div class="zomeex-mega-menu__inner zomeex-container">
							<div class="zomeex-mega-menu__column zomeex-mega-menu__column--products">
								<p class="zomeex-mega-menu__eyebrow">CR packaging formats</p>
								<div class="zomeex-mega-menu__link-list zomeex-mega-menu__link-list--large">
									<?php foreach ( $child_resistant_types as $type ) : ?>
										<a href="<?php echo esc_url( $collection_url( $type['slug'], array( 'feature' => 'child-resistant' ) ) ); ?>"><?php echo esc_html( $type['name'] ); ?><span aria-hidden="true">↗</span></a>
									<?php endforeach; ?>
								</div>
							</div>
							<div class="zomeex-mega-menu__column zomeex-mega-menu__column--applications">
								<p class="zomeex-mega-menu__eyebrow">Compliance &amp; guidance</p>
								<div class="zomeex-mega-menu__link-list zomeex-mega-menu__link-list--large">
									<a href="<?php echo esc_url( zomeex_home_url( '/#zomeex-proof-title' ) ); ?>">CR Documentation<span aria-hidden="true">↗</span></a>
									<a href="<?php echo esc_url( $faq_url ); ?>">Child-Resistant FAQ<span aria-hidden="true">↗</span></a>
									<a href="<?php echo esc_url( $dieline_url ); ?>">Request CR Dielines<span aria-hidden="true">↗</span></a>
									<a href="<?php echo esc_url( $quote_url ); ?>">Discuss Your Market<span aria-hidden="true">↗</span></a>
								</div>
							</div>
							<aside class="zomeex-mega-menu__feature">
								<div class="zomeex-mega-menu__feature-media"><img src="<?php echo esc_url( zomeex_upload_url( 'pack_0003_药丸包装-拷贝-2-768x768.jpg' ) ); ?>" alt="Child-resistant packaging format" loading="lazy" width="768" height="768"></div>
								<div class="zomeex-mega-menu__feature-copy"><p class="zomeex-mega-menu__eyebrow">Market-specific review</p><h3>Match the format to the market.</h3><p>Share your product, destination and documentation needs before selecting a CR route.</p><a href="<?php echo esc_url( $quote_url ); ?>">Start a CR brief <span aria-hidden="true">↗</span></a></div>
							</aside>
						</div>
					</div>
				</div>
				<div class="zomeex-nav-dropdown" data-nav-dropdown>
					<button class="zomeex-nav-trigger" id="zomeex-solutions-trigger" type="button" data-nav-dropdown-toggle aria-expanded="false" aria-haspopup="true" aria-controls="zomeex-solutions-menu"><span class="zomeex-nav-trigger__label" data-zomeex-i18n="nav.solutions">Solutions</span><span aria-hidden="true">⌄</span></button>
					<div class="zomeex-nav-popover" id="zomeex-solutions-menu" data-nav-dropdown-panel hidden>
						<?php foreach ( $applications as $application ) : ?><a href="<?php echo esc_url( zomeex_home_url( '/#zomeex-application-panel-' . $application['slug'] ) ); ?>"><strong><?php echo esc_html( $application['name'] ); ?></strong><small>Packaging for the product context</small></a><?php endforeach; ?>
						<a href="<?php echo esc_url( zomeex_home_url( '/#zomeex-capability-title' ) ); ?>"><strong>OEM / ODM projects</strong><small>From product concept to market-ready</small></a>
					</div>
				</div>
				<div class="zomeex-nav-dropdown" data-nav-dropdown>
					<button class="zomeex-nav-trigger" id="zomeex-design-tools-trigger" type="button" data-nav-dropdown-toggle aria-expanded="false" aria-haspopup="true" aria-controls="zomeex-design-tools-menu"><span class="zomeex-nav-trigger__label" data-zomeex-i18n="nav.designTools">Design &amp; Tools</span><span aria-hidden="true">⌄</span></button>
					<div class="zomeex-nav-popover" id="zomeex-design-tools-menu" data-nav-dropdown-panel hidden>
						<a href="<?php echo esc_url( $dieline_url ); ?>"><strong>Free Dieline Templates</strong><small>Start with a format-ready file</small></a>
						<a href="<?php echo esc_url( $artwork_url ); ?>"><strong>Upload Artwork</strong><small>Send files with your project brief</small></a>
						<a href="<?php echo esc_url( zomeex_home_url( '/#zomeex-proof-title' ) ); ?>"><strong>Compliance Guides</strong><small>Review market and documentation context</small></a>
						<a href="<?php echo esc_url( $faq_url ); ?>"><strong>Packaging FAQ</strong><small>Answers for the next decision</small></a>
					</div>
				</div>
				<div class="zomeex-nav-dropdown" data-nav-dropdown>
					<button class="zomeex-nav-trigger" id="zomeex-resources-trigger" type="button" data-nav-dropdown-toggle aria-expanded="false" aria-haspopup="true" aria-controls="zomeex-resources-menu"><span class="zomeex-nav-trigger__label" data-zomeex-i18n="nav.resourcesBlog">Resources &amp; Blog</span><span aria-hidden="true">⌄</span></button>
					<div class="zomeex-nav-popover" id="zomeex-resources-menu" data-nav-dropdown-panel hidden>
						<a href="<?php echo esc_url( $news_url ); ?>"><strong>Packaging Blog</strong><small>Product and manufacturing notes</small></a>
						<a href="<?php echo esc_url( $news_url ); ?>#child-resistant"><strong>CR Laws &amp; Regulations</strong><small>Market context to discuss with your team</small></a>
						<a href="<?php echo esc_url( $news_url ); ?>?type=case-study"><strong>Case Studies</strong><small>See how briefs become build paths</small></a>
					</div>
				</div>
				<div class="zomeex-nav-dropdown" data-nav-dropdown>
					<button class="zomeex-nav-trigger" id="zomeex-about-contact-trigger" type="button" data-nav-dropdown-toggle aria-expanded="false" aria-haspopup="true" aria-controls="zomeex-about-contact-menu"><span class="zomeex-nav-trigger__label" data-zomeex-i18n="nav.aboutContact">About &amp; Contact</span><span aria-hidden="true">⌄</span></button>
					<div class="zomeex-nav-popover" id="zomeex-about-contact-menu" data-nav-dropdown-panel hidden>
						<a href="<?php echo esc_url( $about_url ); ?>"><strong>About Us</strong><small>How ZOMEEX supports your brief</small></a>
						<a href="<?php echo esc_url( $about_url ); ?>#factory-tour"><strong>Factory Tour</strong><small>Production context and capabilities</small></a>
						<a href="<?php echo esc_url( $about_url ); ?>#certifications"><strong>Certifications</strong><small>Documents reviewed against the market</small></a>
						<a href="<?php echo esc_url( $contact_url ); ?>"><strong>Contact Us</strong><small>Share your product and destination</small></a>
						<a href="<?php echo esc_url( $faq_url ); ?>"><strong>FAQ</strong><small>Common packaging questions</small></a>
					</div>
				</div>
			</nav>
			<div class="zomeex-header__actions">
				<div class="zomeex-header__utility" aria-label="Account tools">
					<button class="zomeex-icon-button zomeex-utility-link" type="button" data-search-toggle aria-expanded="false" aria-controls="zomeex-search-panel" aria-label="Open search" title="Search">
						<span class="zomeex-utility-link__icon zomeex-utility-link__icon--search" aria-hidden="true"></span><span class="zomeex-visually-hidden">Search</span>
					</button>
					<a class="zomeex-icon-button zomeex-utility-link zomeex-account-link" href="<?php echo esc_url( $account_url ); ?>" aria-label="Account" title="Account">
						<span class="zomeex-utility-link__icon zomeex-utility-link__icon--account" aria-hidden="true"></span><span class="zomeex-visually-hidden">Account</span>
					</a>
					<a class="zomeex-icon-button zomeex-utility-link zomeex-cart-link" href="<?php echo esc_url( $cart_url ); ?>" aria-label="Cart" title="Cart">
						<span class="zomeex-utility-link__icon zomeex-utility-link__icon--cart" aria-hidden="true"></span><span class="zomeex-visually-hidden">Cart</span><span class="zomeex-cart-count" data-cart-count aria-label="<?php echo esc_attr( sprintf( '%d items in cart', $cart_count ) ); ?>"<?php echo $cart_count > 0 ? '' : ' hidden'; ?>><?php echo esc_html( $cart_count ); ?></span>
					</a>
				</div>
				<div class="zomeex-language-switcher" aria-label="Language selector">
					<?php echo zomeex_language_switcher(); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
				</div>
				<a class="zomeex-header__quote" href="<?php echo esc_url( zomeex_quote_url() ); ?>" aria-label="Quote list" title="Quote list">
					<span class="zomeex-utility-link__icon zomeex-utility-link__icon--quote" aria-hidden="true"></span>
					<span class="zomeex-visually-hidden">Quote list</span>
					<span data-quote-count hidden>0</span>
				</a>
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
					<a class="zomeex-mobile-nav__utility-link" href="<?php echo esc_url( $account_url ); ?>"><span class="zomeex-utility-link__icon zomeex-utility-link__icon--account" aria-hidden="true"></span><strong>Account</strong></a>
					<a class="zomeex-mobile-nav__utility-link" href="<?php echo esc_url( $cart_url ); ?>"><span class="zomeex-utility-link__icon zomeex-utility-link__icon--cart" aria-hidden="true"></span><strong>Cart</strong><span class="zomeex-cart-count" data-cart-count aria-label="<?php echo esc_attr( sprintf( '%d items in cart', $cart_count ) ); ?>"<?php echo $cart_count > 0 ? '' : ' hidden'; ?>><?php echo esc_html( $cart_count ); ?></span></a>
				</div>
				<div class="zomeex-mobile-nav__group" data-mobile-nav-group>
					<button type="button" data-mobile-nav-toggle aria-expanded="false" aria-controls="zomeex-mobile-products"><span data-zomeex-i18n="nav.products">Products</span> <span aria-hidden="true">+</span></button>
					<div id="zomeex-mobile-products" data-mobile-nav-panel hidden>
						<strong class="zomeex-mobile-nav__label">Shop by product type</strong>
						<?php foreach ( $packaging_types as $type ) : ?>
							<a href="<?php echo esc_url( $collection_url( $type['slug'] ) ); ?>"><?php echo esc_html( $type['name'] ); ?><span aria-hidden="true">↗</span></a>
						<?php endforeach; ?>
						<div class="zomeex-mobile-nav__children zomeex-mobile-nav__children--section">
							<strong class="zomeex-mobile-nav__label">Shop by size &amp; route</strong>
							<a href="<?php echo esc_url( add_query_arg( 'view', 'size', $pack_url ) ); ?>">Shop by Size<span aria-hidden="true">↗</span></a>
							<a href="<?php echo esc_url( $shop_url ); ?>">All Products<span aria-hidden="true">↗</span></a>
							<a href="<?php echo esc_url( $quote_url ); ?>">Get a Quote<span aria-hidden="true">↗</span></a>
						</div>
					</div>
				</div>
				<div class="zomeex-mobile-nav__group" data-mobile-nav-group>
					<button type="button" data-mobile-nav-toggle aria-expanded="false" aria-controls="zomeex-mobile-child-resistant"><span data-zomeex-i18n="nav.childResistant">Child-resistant</span> <span aria-hidden="true">+</span></button>
					<div id="zomeex-mobile-child-resistant" data-mobile-nav-panel hidden>
						<strong class="zomeex-mobile-nav__label">CR packaging formats</strong>
						<?php foreach ( $child_resistant_types as $type ) : ?>
							<a href="<?php echo esc_url( $collection_url( $type['slug'], array( 'feature' => 'child-resistant' ) ) ); ?>"><?php echo esc_html( $type['name'] ); ?><span aria-hidden="true">↗</span></a>
						<?php endforeach; ?>
						<div class="zomeex-mobile-nav__children zomeex-mobile-nav__children--section">
							<strong class="zomeex-mobile-nav__label">Compliance &amp; guidance</strong>
							<a href="<?php echo esc_url( zomeex_home_url( '/#zomeex-proof-title' ) ); ?>">CR Documentation<span aria-hidden="true">↗</span></a>
							<a href="<?php echo esc_url( $faq_url ); ?>">Child-Resistant FAQ<span aria-hidden="true">↗</span></a>
							<a href="<?php echo esc_url( $dieline_url ); ?>">Request CR Dielines<span aria-hidden="true">↗</span></a>
						</div>
					</div>
				</div>
				<div class="zomeex-mobile-nav__group" data-mobile-nav-group>
					<button type="button" data-mobile-nav-toggle aria-expanded="false" aria-controls="zomeex-mobile-solutions"><span data-zomeex-i18n="nav.solutions">Solutions</span> <span aria-hidden="true">+</span></button>
					<div id="zomeex-mobile-solutions" data-mobile-nav-panel hidden>
						<?php foreach ( $applications as $application ) : ?><a href="<?php echo esc_url( zomeex_home_url( '/#zomeex-application-panel-' . $application['slug'] ) ); ?>"><strong><?php echo esc_html( $application['name'] ); ?></strong><small>Packaging for the product context</small></a><?php endforeach; ?>
						<a href="<?php echo esc_url( zomeex_home_url( '/#zomeex-capability-title' ) ); ?>"><strong>OEM / ODM projects</strong><small>From product concept to market-ready</small></a>
					</div>
				</div>
				<div class="zomeex-mobile-nav__group" data-mobile-nav-group>
					<button type="button" data-mobile-nav-toggle aria-expanded="false" aria-controls="zomeex-mobile-design-tools"><span data-zomeex-i18n="nav.designTools">Design &amp; Tools</span> <span aria-hidden="true">+</span></button>
					<div id="zomeex-mobile-design-tools" data-mobile-nav-panel hidden>
						<a href="<?php echo esc_url( $dieline_url ); ?>"><strong>Free Dieline Templates</strong><small>Start with a format-ready file</small></a>
						<a href="<?php echo esc_url( $artwork_url ); ?>"><strong>Upload Artwork</strong><small>Send files with your project brief</small></a>
						<a href="<?php echo esc_url( zomeex_home_url( '/#zomeex-proof-title' ) ); ?>"><strong>Compliance Guides</strong><small>Review market and documentation context</small></a>
					</div>
				</div>
				<div class="zomeex-mobile-nav__group" data-mobile-nav-group>
					<button type="button" data-mobile-nav-toggle aria-expanded="false" aria-controls="zomeex-mobile-resources"><span data-zomeex-i18n="nav.resourcesBlog">Resources &amp; Blog</span> <span aria-hidden="true">+</span></button>
					<div id="zomeex-mobile-resources" data-mobile-nav-panel hidden>
						<a href="<?php echo esc_url( $news_url ); ?>"><strong>Packaging Blog</strong><small>Product and manufacturing notes</small></a>
						<a href="<?php echo esc_url( $news_url ); ?>#child-resistant"><strong>CR Laws &amp; Regulations</strong><small>Market context to discuss with your team</small></a>
						<a href="<?php echo esc_url( $news_url ); ?>?type=case-study"><strong>Case Studies</strong><small>See how briefs become build paths</small></a>
					</div>
				</div>
				<div class="zomeex-mobile-nav__group" data-mobile-nav-group>
					<button type="button" data-mobile-nav-toggle aria-expanded="false" aria-controls="zomeex-mobile-about-contact"><span data-zomeex-i18n="nav.aboutContact">About &amp; Contact</span> <span aria-hidden="true">+</span></button>
					<div id="zomeex-mobile-about-contact" data-mobile-nav-panel hidden>
						<a href="<?php echo esc_url( $about_url ); ?>"><strong>About Us</strong><small>How ZOMEEX supports your brief</small></a>
						<a href="<?php echo esc_url( $about_url ); ?>#factory-tour"><strong>Factory Tour</strong><small>Production context and capabilities</small></a>
						<a href="<?php echo esc_url( $about_url ); ?>#certifications"><strong>Certifications</strong><small>Documents reviewed against the market</small></a>
						<a href="<?php echo esc_url( $contact_url ); ?>"><strong>Contact Us</strong><small>Share your product and destination</small></a>
						<a href="<?php echo esc_url( $faq_url ); ?>"><strong>FAQ</strong><small>Common packaging questions</small></a>
					</div>
				</div>
				<a class="zomeex-mobile-nav__cta" href="<?php echo esc_url( $quote_url ); ?>"><span data-quote-count hidden>0</span>Get a Quote <span>↗</span></a>
			</div>
		</nav>
		</header>
		<a class="zomeex-quote-float" href="<?php echo esc_url( zomeex_quote_url() ); ?>"><span data-quote-count hidden>0</span>Quote list <span aria-hidden="true">↗</span></a>
