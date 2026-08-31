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
			'1.2.0',
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
