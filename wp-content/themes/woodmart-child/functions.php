<?php
/**
 * Enqueue script and styles for child theme
 */
function woodmart_child_enqueue_styles() {
	wp_enqueue_style( 'child-style', get_stylesheet_directory_uri() . '/style.css', array( 'woodmart-style' ), woodmart_get_theme_info( 'Version' ) );

	if ( is_front_page() || zomeex_is_modern_route() ) {
		wp_enqueue_script(
			'zomeex-home',
			get_stylesheet_directory_uri() . '/assets/zomeex-home.js',
			array(),
			'1.3.0',
			true
		);
	}

	if ( zomeex_is_modern_route() && ! is_front_page() ) {
		wp_enqueue_script(
			'zomeex-catalog',
			get_stylesheet_directory_uri() . '/assets/zomeex-catalog.js',
			array(),
			'1.0.0',
			true
		);

		wp_localize_script(
			'zomeex-catalog',
			'zomeexCatalog',
			array(
				'quoteUrl' => zomeex_quote_url(),
				'locale'   => get_locale(),
			)
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

	if ( zomeex_is_modern_route() ) {
		$classes[] = 'zomeex-modern-page';
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
 * The catalogue, product and quote surfaces share the redesigned shell.
 */
function zomeex_is_quote_request() {
	$request_path = trim( (string) parse_url( $_SERVER['REQUEST_URI'] ?? '', PHP_URL_PATH ), '/' );

	return isset( $_GET['zomeex_quote'] ) || 'quote-request' === $request_path;
}

function zomeex_is_modern_route() {
	$is_catalog = function_exists( 'is_shop' ) && ( is_shop() || is_product_category() || is_product() );

	return is_front_page() || $is_catalog || zomeex_is_quote_request();
}

function zomeex_quote_url() {
	return zomeex_home_url( '/quote-request/' );
}

function zomeex_route_template( $template ) {
	if ( zomeex_is_quote_request() ) {
		return get_stylesheet_directory() . '/quote-request.php';
	}

	if ( function_exists( 'is_product' ) && is_product() ) {
		return get_stylesheet_directory() . '/woocommerce/single-product.php';
	}

	if ( function_exists( 'is_shop' ) && ( is_shop() || is_product_category() ) ) {
		return get_stylesheet_directory() . '/woocommerce/archive-product.php';
	}

	return $template;
}
add_filter( 'template_include', 'zomeex_route_template', 998 );

/**
 * The imported Woodmart shop builder prints its layout during template_include
 * instead of returning a template. Remove only that callback for the modern
 * catalogue routes so the child theme archive can render once.
 */
function zomeex_disable_legacy_shop_archive_builder() {
	if ( ! function_exists( 'is_shop' ) || ( ! is_shop() && ! is_product_taxonomy() ) ) {
		return;
	}

	if ( class_exists( '\\XTS\\Modules\\Layouts\\Shop_Archive' ) ) {
		$shop_archive = \XTS\Modules\Layouts\Shop_Archive::get_instance();
		remove_filter( 'template_include', array( $shop_archive, 'override_template' ), 20 );
	}
}
add_action( 'template_redirect', 'zomeex_disable_legacy_shop_archive_builder', 0 );

/**
 * The imported Woodmart single-product builder also renders during
 * template_include. Remove only that callback so the child template is the
 * single source of truth for modern product detail routes.
 */
function zomeex_disable_legacy_single_product_builder() {
	if ( ! function_exists( 'is_product' ) || ! is_product() ) {
		return;
	}

	if ( class_exists( '\\XTS\\Modules\\Layouts\\Single_Product' ) ) {
		$single_product = \XTS\Modules\Layouts\Single_Product::get_instance();
		remove_filter( 'template_include', array( $single_product, 'override_template' ), 20 );
	}
}
add_action( 'template_redirect', 'zomeex_disable_legacy_single_product_builder', 0 );

/** Make the virtual quote route behave like a real public page. */
function zomeex_quote_route_status() {
	if ( zomeex_is_quote_request() ) {
		status_header( 200 );
	}
}
add_action( 'template_redirect', 'zomeex_quote_route_status', 1 );

function zomeex_quote_document_title( $title ) {
	return zomeex_is_quote_request() ? 'Request a quote - ZOMEEX' : $title;
}
add_filter( 'pre_get_document_title', 'zomeex_quote_document_title' );

/** Let the redesigned catalogue render while WooCommerce is in store-only mode. */
function zomeex_exclude_modern_routes_from_coming_soon( $excluded ) {
	return zomeex_is_modern_route() ? true : $excluded;
}
add_filter( 'woocommerce_coming_soon_exclude', 'zomeex_exclude_modern_routes_from_coming_soon' );

/**
 * Store quote requests privately in WordPress so sales can follow up without
 * turning the B2B catalogue into a checkout flow.
 */
function zomeex_register_quote_post_type() {
	register_post_type(
		'zomeex_quote',
		array(
			'labels'       => array(
				'name'          => 'Quote requests',
				'singular_name' => 'Quote request',
			),
			'public'       => false,
			'show_ui'      => true,
			'show_in_menu' => true,
			'menu_icon'    => 'dashicons-clipboard',
			'supports'     => array( 'title', 'editor' ),
			'capability_type' => 'post',
		)
	);
}
add_action( 'init', 'zomeex_register_quote_post_type' );

function zomeex_quote_redirect( $args ) {
	wp_safe_redirect( add_query_arg( $args, zomeex_quote_url() ) );
	exit;
}

function zomeex_handle_quote_submit() {
	if ( ! isset( $_POST['zomeex_quote_nonce'] ) || ! wp_verify_nonce( sanitize_text_field( wp_unslash( $_POST['zomeex_quote_nonce'] ) ), 'zomeex_quote_submit' ) ) {
		zomeex_quote_redirect( array( 'quote_error' => 'security' ) );
	}

	$name          = sanitize_text_field( wp_unslash( $_POST['name'] ?? '' ) );
	$company       = sanitize_text_field( wp_unslash( $_POST['company'] ?? '' ) );
	$email         = sanitize_email( wp_unslash( $_POST['email'] ?? '' ) );
	$country       = sanitize_text_field( wp_unslash( $_POST['country'] ?? '' ) );
	$role          = sanitize_text_field( wp_unslash( $_POST['role'] ?? '' ) );
	$target_market = sanitize_text_field( wp_unslash( $_POST['target_market'] ?? '' ) );
	$quantity      = sanitize_text_field( wp_unslash( $_POST['quantity'] ?? '' ) );
	$customization = sanitize_textarea_field( wp_unslash( $_POST['customization'] ?? '' ) );
	$timeline      = sanitize_text_field( wp_unslash( $_POST['timeline'] ?? '' ) );
	$samples       = sanitize_text_field( wp_unslash( $_POST['samples'] ?? '' ) );
	$notes         = sanitize_textarea_field( wp_unslash( $_POST['notes'] ?? '' ) );

	if ( ! $name || ! $company || ! is_email( $email ) || ! $country || ! $target_market ) {
		zomeex_quote_redirect( array( 'quote_error' => 'required' ) );
	}

	$raw_items = json_decode( wp_unslash( $_POST['quote_items'] ?? '[]' ), true );
	$items     = array();

	if ( is_array( $raw_items ) ) {
		foreach ( array_slice( $raw_items, 0, 30 ) as $item ) {
			if ( empty( $item['id'] ) || empty( $item['title'] ) ) {
				continue;
			}

			$items[] = array(
				'id'       => absint( $item['id'] ),
				'title'    => sanitize_text_field( $item['title'] ),
				'url'      => esc_url_raw( $item['url'] ?? '' ),
				'sku'      => sanitize_text_field( $item['sku'] ?? '' ),
				'quantity' => max( 1, min( 999999, absint( $item['quantity'] ?? 1 ) ) ),
			);
		}
	}

	$reference = 'ZX-' . gmdate( 'ymd-His' ) . '-' . wp_rand( 100, 999 );
	$content   = "Reference: {$reference}\n\n";
	$content  .= "Contact: {$name}\nCompany: {$company}\nEmail: {$email}\nCountry/region: {$country}\nRole: {$role}\nTarget market: {$target_market}\nEstimated quantity: {$quantity}\nTimeline: {$timeline}\nSamples: {$samples}\n\n";
	$content  .= "Customization:\n{$customization}\n\nNotes:\n{$notes}\n\nProducts:\n";

	foreach ( $items as $item ) {
		$content .= sprintf( "- %s%s x%s\n", $item['title'], $item['sku'] ? " ({$item['sku']})" : '', $item['quantity'] );
	}

	$post_id = wp_insert_post(
		array(
			'post_type'    => 'zomeex_quote',
			'post_status'  => 'private',
			'post_title'   => $reference . ' - ' . $company,
			'post_content' => $content,
		),
		true
	);

	if ( is_wp_error( $post_id ) ) {
		zomeex_quote_redirect( array( 'quote_error' => 'save' ) );
	}

	update_post_meta( $post_id, '_zomeex_quote_reference', $reference );
	update_post_meta( $post_id, '_zomeex_quote_email', $email );
	update_post_meta( $post_id, '_zomeex_quote_items', $items );
	update_post_meta( $post_id, '_zomeex_quote_source_url', esc_url_raw( wp_get_referer() ?: '' ) );

	$recipient = apply_filters( 'zomeex_quote_recipient', get_option( 'admin_email' ) );
	wp_mail( $recipient, 'ZOMEEX quote request ' . $reference, $content, array( 'Reply-To: ' . $email ) );

	zomeex_quote_redirect( array( 'submitted' => '1', 'ref' => rawurlencode( $reference ) ) );
}
add_action( 'admin_post_nopriv_zomeex_quote_submit', 'zomeex_handle_quote_submit' );
add_action( 'admin_post_zomeex_quote_submit', 'zomeex_handle_quote_submit' );

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
 * Business portals used by the homepage rail and the Products mega menu.
 * These are intentionally broader than WooCommerce terms: BOOST is a service
 * path and VAPE is the parent entry for the LITZ/MELT/CORE/DRIP/TERPA series.
 */
function zomeex_product_portals() {
	return array(
		'vape'   => array(
			'name'        => 'VAPE',
			'label'       => 'Canna vape devices',
			'description' => 'Devices, batteries, pods, and dab tools.',
			'image'       => 'zomee-core-pulse-510-battery-1-1170x536.jpg',
			'fallback'    => zomeex_home_url( '/shop/' ),
			'children'    => array(
				array( 'name' => 'LITZ', 'slug' => 'litz' ),
				array( 'name' => 'MELT', 'slug' => 'melt' ),
				array( 'name' => 'CORE', 'slug' => 'core' ),
				array( 'name' => 'DRIP', 'slug' => 'drip' ),
				array( 'name' => 'TERPA', 'slug' => 'terpa' ),
				array( 'name' => 'CANNABIS VAPORIZER', 'slug' => 'cannabis-vaporizer' ),
			),
		),
		'pack'   => array(
			'name'        => 'PACK',
			'label'       => 'Packaging systems',
			'description' => 'Bags, boxes, and presentation-ready formats.',
			'image'       => 'pack_0002_背卡盒子_0003_背卡-拷贝-768x768.jpg',
			'fallback'    => zomeex_home_url( '/shop/' ),
			'children'    => array(
				array( 'name' => 'MYLAR BAG', 'slug' => 'mylar-bag' ),
				array( 'name' => 'PREROLL / WRAPS', 'slug' => 'preroll-wraps' ),
				array( 'name' => 'CIGAR BAG', 'slug' => 'cigar-bag' ),
				array( 'name' => 'VAPE BOX', 'slug' => 'vape-box' ),
			),
		),
		'switch' => array(
			'name'        => 'SWITCH',
			'label'       => 'Equipment integration',
			'description' => 'HNB, NRT, GMO-based systems, and machinery.',
			'image'       => 'switch-拷贝-768x768.jpg',
			'fallback'    => zomeex_home_url( '/shop/' ),
			'children'    => array(
				array( 'name' => 'HNB DEVICES', 'slug' => 'hnb-devices' ),
				array( 'name' => 'NRT SOLUTIONS', 'slug' => 'nrt-solutions' ),
				array( 'name' => 'GMO-BASED SYSTEMS', 'slug' => 'gmo-based-systems' ),
				array( 'name' => 'MACHINE', 'slug' => 'machine' ),
			),
		),
		'boost'  => array(
			'name'        => 'BOOST',
			'label'       => 'Business and compliance support',
			'description' => 'OEM/ODM, market planning, and compliance support.',
			'image'       => '1920540-about-1170x536.jpg',
			'fallback'    => zomeex_page_url( 'contact-us', '/contact-us/' ),
			'children'    => array(),
		),
	);
}

/**
 * Resolve a portal destination without treating BOOST as a WooCommerce term.
 * BOOST is a service path even if an empty legacy product_cat term exists.
 */
function zomeex_portal_url( $portal ) {
	if ( 'boost' === sanitize_title( $portal['name'] ) ) {
		return $portal['fallback'];
	}

	$term = get_term_by( 'slug', sanitize_title( $portal['name'] ), 'product_cat' );

	return $term && ! is_wp_error( $term ) ? get_term_link( $term ) : $portal['fallback'];
}

/**
 * Homepage language menu. GTranslate remains the translation engine when it is
 * active; this visible control ensures the five agreed locales are discoverable
 * even while the plugin widget is loading or unavailable in a local preview.
 */
function zomeex_language_switcher() {
	$locales = array(
		'en'    => array( 'code' => 'EN', 'label' => 'English' ),
		'zh-CN' => array( 'code' => 'ZH', 'label' => '中文' ),
		'ru'    => array( 'code' => 'RU', 'label' => 'Русский' ),
		'de'    => array( 'code' => 'DE', 'label' => 'Deutsch' ),
		'fr'    => array( 'code' => 'FR', 'label' => 'Français' ),
	);
	$native_widget = shortcode_exists( 'gtranslate' ) ? do_shortcode( '[gtranslate widget_look="popup_search"]' ) : '';

	ob_start();
	?>
	<div class="zomeex-locale" data-locale-switcher data-source-language="en">
		<button class="zomeex-locale__trigger" type="button" aria-expanded="false" aria-haspopup="menu" aria-controls="zomeex-locale-menu" aria-label="Select language">
			<span data-locale-current>EN</span><span class="zomeex-locale__chevron" aria-hidden="true">⌄</span>
		</button>
		<div class="zomeex-locale__menu" id="zomeex-locale-menu" role="menu" hidden>
			<p class="zomeex-locale__label">Choose language</p>
			<?php foreach ( $locales as $locale => $data ) : ?>
				<button class="zomeex-locale__option" type="button" role="menuitem" data-language="<?php echo esc_attr( $locale ); ?>" data-language-code="<?php echo esc_attr( $data['code'] ); ?>">
					<span><?php echo esc_html( $data['label'] ); ?></span><span aria-hidden="true"><?php echo esc_html( $data['code'] ); ?></span>
				</button>
			<?php endforeach; ?>
		</div>
		<span class="zomeex-gtranslate-native" aria-hidden="true"><?php echo $native_widget; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?></span>
	</div>
	<?php
	return ob_get_clean();
}
