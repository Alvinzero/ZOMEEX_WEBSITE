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
					<?php
					echo zomeex_render_mega_menu(
						array(
							'id'         => 'zomeex-products-menu',
							'labelledby' => 'zomeex-products-trigger',
							'intro'      => array(
								'kicker'      => 'Product catalogue',
								'title'       => 'Choose the system behind your brief.',
								'link'        => $shop_url,
								'link_label'  => 'View all products',
							),
							'catalog'    => array(
								'label'  => 'Shop by product type',
								'groups' => array(
									array(
										'name'     => 'Flexible Packaging',
										'icon'     => 'bag',
										'url'      => $collection_url( 'mylar-bag' ),
										'children' => array(
											array( 'name' => 'Custom Mylar Bags & Pouches', 'url' => $collection_url( 'mylar-bag' ) ),
											array( 'name' => 'Pre-Roll Packaging', 'url' => $collection_url( 'preroll-wraps' ) ),
										),
									),
									array(
										'name'     => 'Paper Packaging',
										'icon'     => 'box',
										'url'      => $collection_url( 'vape-box' ),
										'children' => array(
											array( 'name' => 'Custom Printed Paper Boxes', 'url' => $collection_url( 'vape-box' ) ),
										),
									),
									array(
										'name'     => 'Bottles & Containers',
										'icon'     => 'bottle',
										'url'      => $collection_url( 'jars-glass-containers' ),
										'children' => array(
											array( 'name' => 'Jars & Glass Containers', 'url' => $collection_url( 'jars-glass-containers' ) ),
											array( 'name' => 'Bottles & Tubes', 'url' => $collection_url( 'bottles-tubes' ) ),
										),
									),
									array(
										'name'     => 'Metal Packaging',
										'icon'     => 'tin',
										'url'      => $collection_url( 'tins-metal-containers' ),
										'children' => array(
											array( 'name' => 'Tins & Metal Containers', 'url' => $collection_url( 'tins-metal-containers' ) ),
										),
									),
									array(
										'name'     => 'Retail Displays & Merch',
										'icon'     => 'display',
										'url'      => $collection_url( 'retail-displays-merch' ),
										'children' => array(),
									),
								),
							),
							'rails'      => array(
								array(
									'label' => 'By application',
									'items' => array_map(
										function ( $application ) {
											return array(
												'name' => $application['name'],
												'icon' => 'leaf',
												'url'  => zomeex_home_url( '/#zomeex-application-panel-' . $application['slug'] ),
											);
										},
										$applications
									),
								),
								array(
									'label' => 'Design resources',
									'items' => array(
										array( 'name' => 'Download Free Dielines', 'icon' => 'download', 'url' => $dieline_url ),
										array( 'name' => 'Artwork Proof Checklist', 'icon' => 'file', 'url' => $artwork_url ),
										array( 'name' => 'Compliance Guides', 'icon' => 'scale', 'url' => zomeex_home_url( '/#zomeex-proof-title' ) ),
									),
								),
							),
							'feature'    => array(
								'image'       => zomeex_upload_url( 'pack_0002_背卡盒子_0003_背卡-拷贝-768x768.jpg' ),
								'image_alt'   => 'Packaging sample kit',
								'kicker'      => 'Featured / Quick order',
								'title'       => 'Order a Free Sample Kit',
								'copy'        => 'Feel the materials and quality before placing a bulk order.',
								'link'        => add_query_arg( 'resource', 'sample-kit', $quote_url ),
								'link_label'  => 'Claim free sample kit',
								'help_label'  => 'Need quick help?',
								'help_copy'   => 'Start a conversation with our team',
								'help_link'   => $contact_url,
							),
						)
					);
					?>
				</div>
				<div class="zomeex-nav-dropdown" data-nav-dropdown>
					<button class="zomeex-nav-trigger" id="zomeex-child-resistant-trigger" type="button" data-nav-dropdown-toggle aria-expanded="false" aria-haspopup="true" aria-controls="zomeex-child-resistant-menu"><span class="zomeex-nav-trigger__label" data-zomeex-i18n="nav.childResistant">Child-resistant</span><span aria-hidden="true">⌄</span></button>
					<?php
					echo zomeex_render_mega_menu(
						array(
							'id'         => 'zomeex-child-resistant-menu',
							'labelledby' => 'zomeex-child-resistant-trigger',
							'intro'      => array(
								'kicker'     => 'Child-resistant systems',
								'title'      => 'Match the format to the market.',
								'link'       => $quote_url,
								'link_label' => 'Start a CR brief',
							),
							'catalog'    => array(
								'label'  => 'CR packaging formats',
								'groups' => array_map(
									function ( $type ) use ( $collection_url ) {
										return array(
											'name'     => $type['name'],
											'icon'     => 'flask',
											'url'      => $collection_url( $type['slug'], array( 'feature' => 'child-resistant' ) ),
											'children' => array(),
										);
									},
									$child_resistant_types
								),
							),
							'rails'      => array(
								array(
									'label' => 'Compliance & guidance',
									'items' => array(
										array( 'name' => 'CR Documentation', 'icon' => 'file', 'url' => zomeex_home_url( '/#zomeex-proof-title' ) ),
										array( 'name' => 'Child-Resistant FAQ', 'icon' => 'book', 'url' => $faq_url ),
										array( 'name' => 'Request CR Dielines', 'icon' => 'download', 'url' => $dieline_url ),
										array( 'name' => 'Discuss Your Market', 'icon' => 'chat', 'url' => $quote_url ),
									),
								),
							),
							'feature'    => array(
								'image'       => zomeex_upload_url( 'pack_0003_药丸包装-拷贝-2-768x768.jpg' ),
								'image_alt'   => 'Child-resistant packaging format',
								'kicker'      => 'Market-specific review',
								'title'       => 'Share destination and documentation needs.',
								'copy'        => 'We review the format against the market before locking a CR route.',
								'link'        => $quote_url,
								'link_label'  => 'Start a CR brief',
								'help_label'  => 'Need quick help?',
								'help_copy'   => 'Talk through a regulated launch',
								'help_link'   => $contact_url,
							),
						)
					);
					?>
				</div>
				<div class="zomeex-nav-dropdown" data-nav-dropdown>
					<button class="zomeex-nav-trigger" id="zomeex-solutions-trigger" type="button" data-nav-dropdown-toggle aria-expanded="false" aria-haspopup="true" aria-controls="zomeex-solutions-menu"><span class="zomeex-nav-trigger__label" data-zomeex-i18n="nav.solutions">Solutions</span><span aria-hidden="true">⌄</span></button>
					<?php
					echo zomeex_render_mega_menu(
						array(
							'id'         => 'zomeex-solutions-menu',
							'labelledby' => 'zomeex-solutions-trigger',
							'intro'      => array(
								'kicker'     => 'Solutions by application',
								'title'      => 'Start from the product, not the SKU.',
								'link'       => $quote_url,
								'link_label' => 'Talk through a brief',
							),
							'catalog'    => array(
								'label'  => 'By application',
								'groups' => array_map(
									function ( $application ) {
										return array(
											'name'     => $application['name'],
											'icon'     => 'leaf',
											'url'      => zomeex_home_url( '/#zomeex-application-panel-' . $application['slug'] ),
											'children' => array(),
										);
									},
									$applications
								),
							),
							'rails'      => array(
								array(
									'label' => 'Project routes',
									'items' => array(
										array( 'name' => 'OEM / ODM projects', 'icon' => 'building', 'url' => zomeex_home_url( '/#zomeex-capability-title' ) ),
										array( 'name' => 'All products', 'icon' => 'box', 'url' => $shop_url ),
										array( 'name' => 'Get a quote', 'icon' => 'arrow', 'url' => $quote_url ),
									),
								),
							),
							'feature'    => array(
								'image'       => zomeex_upload_url( 'pack_0002_背卡盒子_0003_背卡-拷贝-768x768.jpg' ),
								'image_alt'   => 'Application-led packaging system',
								'kicker'      => 'From concept to market-ready',
								'title'       => 'Build a packaging route around the brief.',
								'copy'        => 'Share the product, destination and volume so we can map format, print and compliance.',
								'link'        => $quote_url,
								'link_label'  => 'Start a project brief',
								'help_label'  => 'Need quick help?',
								'help_copy'   => 'Start a conversation with our team',
								'help_link'   => $contact_url,
							),
						)
					);
					?>
				</div>
				<div class="zomeex-nav-dropdown" data-nav-dropdown>
					<button class="zomeex-nav-trigger" id="zomeex-design-tools-trigger" type="button" data-nav-dropdown-toggle aria-expanded="false" aria-haspopup="true" aria-controls="zomeex-design-tools-menu"><span class="zomeex-nav-trigger__label" data-zomeex-i18n="nav.designTools">Design &amp; Tools</span><span aria-hidden="true">⌄</span></button>
					<?php
					echo zomeex_render_mega_menu(
						array(
							'id'         => 'zomeex-design-tools-menu',
							'labelledby' => 'zomeex-design-tools-trigger',
							'intro'      => array(
								'kicker'     => 'Design resources',
								'title'      => 'Files, proofs and market context in one place.',
								'link'       => $dieline_url,
								'link_label' => 'Request dielines',
							),
							'catalog'    => array(
								'label'  => 'Tools',
								'groups' => array(
									array(
										'name'     => 'Free Dieline Templates',
										'icon'     => 'download',
										'url'      => $dieline_url,
										'children' => array(
											array( 'name' => 'Start with a format-ready file', 'url' => $dieline_url ),
										),
									),
									array(
										'name'     => 'Upload Artwork',
										'icon'     => 'file',
										'url'      => $artwork_url,
										'children' => array(
											array( 'name' => 'Send files with your project brief', 'url' => $artwork_url ),
										),
									),
									array(
										'name'     => 'Compliance Guides',
										'icon'     => 'scale',
										'url'      => zomeex_home_url( '/#zomeex-proof-title' ),
										'children' => array(
											array( 'name' => 'Review market and documentation context', 'url' => zomeex_home_url( '/#zomeex-proof-title' ) ),
										),
									),
									array(
										'name'     => 'Packaging FAQ',
										'icon'     => 'book',
										'url'      => $faq_url,
										'children' => array(
											array( 'name' => 'Answers for the next decision', 'url' => $faq_url ),
										),
									),
								),
							),
							'rails'      => array(
								array(
									'label' => 'Next steps',
									'items' => array(
										array( 'name' => 'Request sample pack', 'icon' => 'box', 'url' => add_query_arg( 'resource', 'sample-kit', $quote_url ) ),
										array( 'name' => 'Get a quote', 'icon' => 'arrow', 'url' => $quote_url ),
									),
								),
							),
							'feature'    => array(
								'image'       => zomeex_upload_url( 'pack_0002_背卡盒子_0003_背卡-拷贝-768x768.jpg' ),
								'image_alt'   => 'Artwork and dieline support',
								'kicker'      => 'Before production',
								'title'       => 'Lock the file before you lock the run.',
								'copy'        => 'Dielines, artwork and documentation can travel with the same brief.',
								'link'        => $artwork_url,
								'link_label'  => 'Upload artwork',
								'help_label'  => 'Need quick help?',
								'help_copy'   => 'Start a conversation with our team',
								'help_link'   => $contact_url,
							),
						)
					);
					?>
				</div>
				<div class="zomeex-nav-dropdown" data-nav-dropdown>
					<button class="zomeex-nav-trigger" id="zomeex-resources-trigger" type="button" data-nav-dropdown-toggle aria-expanded="false" aria-haspopup="true" aria-controls="zomeex-resources-menu"><span class="zomeex-nav-trigger__label" data-zomeex-i18n="nav.resourcesBlog">Resources &amp; Blog</span><span aria-hidden="true">⌄</span></button>
					<?php
					echo zomeex_render_mega_menu(
						array(
							'id'         => 'zomeex-resources-menu',
							'labelledby' => 'zomeex-resources-trigger',
							'intro'      => array(
								'kicker'     => 'Notes and market context',
								'title'      => 'Read before you brief the next run.',
								'link'       => $news_url,
								'link_label' => 'View all notes',
							),
							'catalog'    => array(
								'label'  => 'Resources',
								'groups' => array(
									array(
										'name'     => 'Packaging Blog',
										'icon'     => 'book',
										'url'      => $news_url,
										'children' => array(
											array( 'name' => 'Product and manufacturing notes', 'url' => $news_url ),
										),
									),
									array(
										'name'     => 'CR Laws & Regulations',
										'icon'     => 'scale',
										'url'      => $news_url . '#child-resistant',
										'children' => array(
											array( 'name' => 'Market context to discuss with your team', 'url' => $news_url . '#child-resistant' ),
										),
									),
									array(
										'name'     => 'Case Studies',
										'icon'     => 'file',
										'url'      => add_query_arg( 'type', 'case-study', $news_url ),
										'children' => array(
											array( 'name' => 'See how briefs become build paths', 'url' => add_query_arg( 'type', 'case-study', $news_url ) ),
										),
									),
								),
							),
							'rails'      => array(
								array(
									'label' => 'Keep going',
									'items' => array(
										array( 'name' => 'Packaging FAQ', 'icon' => 'book', 'url' => $faq_url ),
										array( 'name' => 'Compliance Guides', 'icon' => 'scale', 'url' => zomeex_home_url( '/#zomeex-proof-title' ) ),
										array( 'name' => 'Contact the team', 'icon' => 'phone', 'url' => $contact_url ),
									),
								),
							),
							'feature'    => array(
								'image'       => zomeex_upload_url( 'pack_0003_药丸包装-拷贝-2-768x768.jpg' ),
								'image_alt'   => 'Packaging notes and case studies',
								'kicker'      => 'From the notes',
								'title'       => 'Use the archive as decision support.',
								'copy'        => 'Production notes, market context and case paths sit next to the catalogue.',
								'link'        => $news_url,
								'link_label'  => 'Open the notes',
								'help_label'  => 'Need quick help?',
								'help_copy'   => 'Start a conversation with our team',
								'help_link'   => $contact_url,
							),
						)
					);
					?>
				</div>
				<div class="zomeex-nav-dropdown" data-nav-dropdown>
					<button class="zomeex-nav-trigger" id="zomeex-about-contact-trigger" type="button" data-nav-dropdown-toggle aria-expanded="false" aria-haspopup="true" aria-controls="zomeex-about-contact-menu"><span class="zomeex-nav-trigger__label" data-zomeex-i18n="nav.aboutContact">About &amp; Contact</span><span aria-hidden="true">⌄</span></button>
					<?php
					echo zomeex_render_mega_menu(
						array(
							'id'         => 'zomeex-about-contact-menu',
							'labelledby' => 'zomeex-about-contact-trigger',
							'intro'      => array(
								'kicker'     => 'Company',
								'title'      => 'A factory partner for regulated packaging.',
								'link'       => $about_url,
								'link_label' => 'About ZOMEEX',
							),
							'catalog'    => array(
								'label'  => 'About ZOMEEX',
								'groups' => array(
									array(
										'name'     => 'About Us',
										'icon'     => 'building',
										'url'      => $about_url,
										'children' => array(
											array( 'name' => 'How ZOMEEX supports your brief', 'url' => $about_url ),
										),
									),
									array(
										'name'     => 'Factory Tour',
										'icon'     => 'display',
										'url'      => $about_url . '#factory-tour',
										'children' => array(
											array( 'name' => 'Production context and capabilities', 'url' => $about_url . '#factory-tour' ),
										),
									),
									array(
										'name'     => 'Certifications',
										'icon'     => 'scale',
										'url'      => $about_url . '#certifications',
										'children' => array(
											array( 'name' => 'Documents reviewed against the market', 'url' => $about_url . '#certifications' ),
										),
									),
								),
							),
							'rails'      => array(
								array(
									'label' => 'Talk to the team',
									'items' => array(
										array( 'name' => 'Contact Us', 'icon' => 'phone', 'url' => $contact_url ),
										array( 'name' => 'FAQ', 'icon' => 'book', 'url' => $faq_url ),
										array( 'name' => 'Get a quote', 'icon' => 'arrow', 'url' => $quote_url ),
									),
								),
							),
							'feature'    => array(
								'image'       => zomeex_upload_url( '1920540-about-1170x536.jpg' ),
								'image_alt'   => 'ZOMEEX factory and team',
								'kicker'      => 'Factory context',
								'title'       => 'See how briefs become production paths.',
								'copy'        => 'Share the product and destination. We will map format, print and documentation from there.',
								'link'        => $contact_url,
								'link_label'  => 'Contact the team',
								'help_label'  => 'Need quick help?',
								'help_copy'   => 'Start a conversation with our team',
								'help_link'   => $contact_url,
							),
						)
					);
					?>
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
				<a class="zomeex-header__quote" data-quote-link href="<?php echo esc_url( zomeex_quote_url() ); ?>" aria-label="Quote list" title="Quote list">
					<span class="zomeex-utility-link__icon zomeex-utility-link__icon--quote" aria-hidden="true"></span>
					<span class="zomeex-visually-hidden">Quote list</span><span data-quote-count hidden aria-hidden="true">0</span>
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
		<a class="zomeex-quote-float" data-quote-link href="<?php echo esc_url( zomeex_quote_url() ); ?>" aria-label="Quote list"><span data-quote-count hidden>0</span>Quote list <span aria-hidden="true">↗</span></a>
