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

	if ( function_exists( 'is_404' ) && is_404() ) {
		$classes[] = 'zomeex-not-found-page';
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

function zomeex_is_content_route() {
	$is_content_page = function_exists( 'is_page' ) && is_page( array( 'news', 'about-us-3', 'contact-us' ) );
	$is_insight      = function_exists( 'is_singular' ) && is_singular( 'post' );

	return $is_content_page || $is_insight;
}

function zomeex_is_modern_route() {
	$is_catalog = function_exists( 'is_shop' ) && (
		is_shop()
		|| ( function_exists( 'is_product_category' ) && is_product_category() )
		|| ( function_exists( 'is_product' ) && is_product() )
	);
	$is_404 = function_exists( 'is_404' ) && is_404();

	return is_front_page() || $is_catalog || zomeex_is_quote_request() || zomeex_is_content_route() || $is_404;
}

function zomeex_quote_url() {
	return zomeex_home_url( '/quote-request/' );
}

function zomeex_route_template( $template ) {
	if ( zomeex_is_quote_request() ) {
		return get_stylesheet_directory() . '/quote-request.php';
	}

	if ( function_exists( 'is_404' ) && is_404() ) {
		return get_stylesheet_directory() . '/404.php';
	}

	if ( function_exists( 'is_page' ) && is_page( 'news' ) ) {
		return get_stylesheet_directory() . '/insights.php';
	}

	if ( function_exists( 'is_singular' ) && is_singular( 'post' ) ) {
		return get_stylesheet_directory() . '/single-insight.php';
	}

	if ( function_exists( 'is_page' ) && is_page( 'about-us-3' ) ) {
		return get_stylesheet_directory() . '/about.php';
	}

	if ( function_exists( 'is_page' ) && is_page( 'contact-us' ) ) {
		return get_stylesheet_directory() . '/contact.php';
	}

	if ( function_exists( 'is_product' ) && is_product() ) {
		return get_stylesheet_directory() . '/woocommerce/single-product.php';
	}

	if ( function_exists( 'is_shop' ) && ( is_shop() || ( function_exists( 'is_product_category' ) && is_product_category() ) ) ) {
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
	if ( ! function_exists( 'is_shop' ) || ( ! is_shop() && ( ! function_exists( 'is_product_taxonomy' ) || ! is_product_taxonomy() ) ) ) {
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
	if ( zomeex_is_quote_request() ) {
		return 'Request a quote | ZOMEEX';
	}

	if ( function_exists( 'is_404' ) && is_404() ) {
		return 'Page not found | ZOMEEX';
	}

	if ( is_front_page() ) {
		return 'Vape Hardware, Packaging and OEM/ODM | ZOMEEX';
	}

	if ( function_exists( 'is_product' ) && is_product() ) {
		$product = wc_get_product( get_the_ID() );
		return $product ? $product->get_name() . ' | ZOMEEX' : $title;
	}

	if ( function_exists( 'is_product_category' ) && is_product_category() ) {
		$term = get_queried_object();
		return $term && ! is_wp_error( $term ) ? $term->name . ' products | ZOMEEX' : $title;
	}

	if ( function_exists( 'is_shop' ) && is_shop() ) {
		return 'Vape Hardware and Packaging Products | ZOMEEX';
	}

	if ( is_page( 'news' ) ) {
		return 'Product and Manufacturing Insights | ZOMEEX';
	}

	if ( is_singular( 'post' ) ) {
		return get_the_title() . ' | ZOMEEX Insights';
	}

	if ( is_page( 'about-us-3' ) ) {
		return 'About ZOMEEX | Product and Supply Chain Partner';
	}

	if ( is_page( 'contact-us' ) ) {
		return 'Contact ZOMEEX | OEM/ODM and Product Enquiries';
	}

	return $title;
}
add_filter( 'pre_get_document_title', 'zomeex_quote_document_title' );

function zomeex_trim_text( $text, $limit = 155 ) {
	$text = wp_strip_all_tags( strip_shortcodes( (string) $text ), true );
	$text = preg_replace( '/\s+/', ' ', trim( $text ) );

	if ( ! $text ) {
		return '';
	}

	if ( function_exists( 'mb_strlen' ) && mb_strlen( $text ) > $limit ) {
		return rtrim( mb_substr( $text, 0, $limit - 1 ) ) . '...';
	}

	return strlen( $text ) > $limit ? rtrim( substr( $text, 0, $limit - 1 ) ) . '...' : $text;
}

function zomeex_seo_description() {
	$description = '';

	if ( zomeex_is_quote_request() ) {
		$description = 'Send ZOMEEX a product, market and volume brief for a tailored OEM/ODM quote.';
	} elseif ( function_exists( 'is_404' ) && is_404() ) {
		$description = 'The requested ZOMEEX page could not be found. Browse products or start a focused project brief.';
	} elseif ( is_front_page() ) {
		$description = 'Explore vape hardware, packaging systems and OEM/ODM support from ZOMEEX for teams building against a defined market brief.';
	} elseif ( function_exists( 'is_product' ) && is_product() ) {
		$product     = wc_get_product( get_the_ID() );
		$description = $product ? ( $product->get_short_description() ?: $product->get_description() ) : '';
		$description = $description ?: 'Review product media, attributes and a structured quote path for this ZOMEEX product.';
	} elseif ( function_exists( 'is_product_category' ) && is_product_category() ) {
		$term        = get_queried_object();
		$description = $term && ! is_wp_error( $term ) && $term->description ? $term->description : 'Browse ZOMEEX products in this collection and build a focused quote list for your target market.';
	} elseif ( function_exists( 'is_shop' ) && is_shop() ) {
		$description = 'Browse ZOMEEX vape hardware, packaging and equipment products. Save products to a quote list without online checkout.';
	} elseif ( is_page( 'news' ) ) {
		$description = 'Product updates, technology notes and manufacturing insights from the ZOMEEX team.';
	} elseif ( is_singular( 'post' ) ) {
		$description = get_the_excerpt() ?: get_the_content();
	} elseif ( is_page( 'about-us-3' ) ) {
		$description = 'Learn how ZOMEEX connects private-mold product routes, global supply chain support and licensed solutions for cannabis brands.';
	} elseif ( is_page( 'contact-us' ) ) {
		$description = 'Contact ZOMEEX for product enquiries, OEM/ODM projects, samples and market-specific packaging or hardware support.';
	} elseif ( is_page() ) {
		$description = get_the_excerpt() ?: get_the_content();
	}

	return zomeex_trim_text( $description );
}

function zomeex_seo_image() {
	$image = '';

	if ( function_exists( 'is_product' ) && is_product() ) {
		$product = wc_get_product( get_the_ID() );
		$image   = $product ? wp_get_attachment_image_url( $product->get_image_id(), 'large' ) : '';
	} elseif ( is_singular() && has_post_thumbnail() ) {
		$image = get_the_post_thumbnail_url( get_the_ID(), 'large' );
	}

	return $image ?: zomeex_upload_url( 'zomee-core-pulse-510-battery-1-1170x536.jpg' );
}

/** Return a usable URL for SEO fields without leaking WP_Error values. */
function zomeex_seo_url( $url, $fallback = '/' ) {
	if ( is_wp_error( $url ) || ! is_string( $url ) || '' === $url ) {
		return zomeex_home_url( $fallback );
	}

	return $url;
}

function zomeex_seo_breadcrumbs() {
	$items = array(
		array( '@type' => 'ListItem', 'position' => 1, 'name' => 'Home', 'item' => zomeex_home_url( '/' ) ),
	);

	if ( function_exists( 'is_product' ) && is_product() ) {
		$items[] = array( '@type' => 'ListItem', 'position' => 2, 'name' => 'Products', 'item' => zomeex_home_url( '/shop/' ) );
		$product  = wc_get_product( get_the_ID() );
		$terms    = $product ? wp_get_post_terms( get_the_ID(), 'product_cat', array( 'orderby' => 'parent', 'order' => 'ASC' ) ) : array();
		if ( $terms && ! is_wp_error( $terms ) ) {
			$items[] = array( '@type' => 'ListItem', 'position' => 3, 'name' => $terms[0]->name, 'item' => zomeex_seo_url( get_term_link( $terms[0] ), '/shop/' ) );
			$items[] = array( '@type' => 'ListItem', 'position' => 4, 'name' => get_the_title(), 'item' => get_permalink() );
		} else {
			$items[] = array( '@type' => 'ListItem', 'position' => 3, 'name' => get_the_title(), 'item' => get_permalink() );
		}
	} elseif ( function_exists( 'is_product_category' ) && is_product_category() ) {
		$term    = get_queried_object();
		$items[] = array( '@type' => 'ListItem', 'position' => 2, 'name' => 'Products', 'item' => zomeex_home_url( '/shop/' ) );
		if ( $term && ! is_wp_error( $term ) ) {
			$items[] = array( '@type' => 'ListItem', 'position' => 3, 'name' => $term->name, 'item' => zomeex_seo_url( get_term_link( $term ), '/shop/' ) );
		}
	} elseif ( is_singular( 'post' ) ) {
		$items[] = array( '@type' => 'ListItem', 'position' => 2, 'name' => 'Insights', 'item' => zomeex_page_url( 'news', '/news/' ) );
		$items[] = array( '@type' => 'ListItem', 'position' => 3, 'name' => get_the_title(), 'item' => get_permalink() );
	} elseif ( is_page( 'news' ) ) {
		$items[] = array( '@type' => 'ListItem', 'position' => 2, 'name' => 'Insights', 'item' => get_permalink() );
	} elseif ( function_exists( 'is_shop' ) && is_shop() ) {
		$items[] = array( '@type' => 'ListItem', 'position' => 2, 'name' => 'Products', 'item' => zomeex_home_url( '/shop/' ) );
	} elseif ( is_page() && ! is_front_page() ) {
		$items[] = array( '@type' => 'ListItem', 'position' => 2, 'name' => get_the_title(), 'item' => get_permalink() );
	}

	return $items;
}

function zomeex_seo_plugin_active() {
	return defined( 'WPSEO_VERSION' ) || defined( 'RANK_MATH_VERSION' ) || defined( 'AIOSEO_VERSION' ) || defined( 'SEOPRESS_VERSION' );
}

function zomeex_output_schema() {
	if ( zomeex_seo_plugin_active() ) {
		return;
	}

	$graph = array(
		array(
			'@type' => 'Organization',
			'@id'   => zomeex_home_url( '/#organization' ),
			'name'  => 'ZOMEEX',
			'url'   => zomeex_home_url( '/' ),
			'email' => 'info@zomeeco.com',
			'address' => array(
				'@type'           => 'PostalAddress',
				'streetAddress'   => '5th Floor, Fifth Zone, Ganghuaxing Industry Park, No. 118 YongFu Road',
				'addressLocality' => 'Shenzhen',
				'addressCountry'  => 'CN',
			),
		),
		array(
			'@type' => 'WebSite',
			'@id'   => zomeex_home_url( '/#website' ),
			'name'  => 'ZOMEEX',
			'url'   => zomeex_home_url( '/' ),
			'publisher' => array( '@id' => zomeex_home_url( '/#organization' ) ),
		),
	);
	$is_product_category = function_exists( 'is_product_category' ) && is_product_category();
	if ( zomeex_is_quote_request() ) {
		$schema_url = zomeex_quote_url();
	} elseif ( function_exists( 'is_product' ) && is_product() ) {
		$schema_url = get_permalink( get_queried_object_id() );
	} elseif ( $is_product_category ) {
		$schema_url = get_term_link( get_queried_object() );
	} elseif ( is_singular() || is_page() ) {
		$schema_url = get_permalink( get_queried_object_id() );
	} else {
		$schema_url = zomeex_home_url( '/shop/' );
	}
	$schema_url = zomeex_seo_url( $schema_url, '/shop/' );

	if ( function_exists( 'is_product' ) && is_product() ) {
		$product = wc_get_product( get_the_ID() );
		if ( $product ) {
			$product_schema = array(
				'@type'       => 'Product',
				'@id'         => get_permalink() . '#product',
				'name'        => $product->get_name(),
				'url'         => get_permalink(),
				'description' => zomeex_seo_description(),
				'brand'       => array( '@type' => 'Brand', 'name' => 'ZOMEEX' ),
			);
			$image = wp_get_attachment_image_url( $product->get_image_id(), 'large' );
			if ( $image ) {
				$product_schema['image'] = array( $image );
			}
			if ( $product->get_sku() ) {
				$product_schema['sku'] = $product->get_sku();
			}
			$graph[] = $product_schema;
		}
	}

	if ( is_singular( 'post' ) ) {
		$graph[] = array(
			'@type'         => 'Article',
			'@id'           => get_permalink() . '#article',
			'headline'      => get_the_title(),
			'description'   => zomeex_seo_description(),
			'url'           => get_permalink(),
			'datePublished' => get_the_date( DATE_W3C ),
			'dateModified'  => get_the_modified_date( DATE_W3C ),
			'author'        => array( '@type' => 'Person', 'name' => get_the_author() ?: 'ZOMEEX' ),
			'publisher'     => array( '@id' => zomeex_home_url( '/#organization' ) ),
			'image'         => array( zomeex_seo_image() ),
		);
	}

	$graph[] = array( '@type' => 'BreadcrumbList', '@id' => $schema_url . '#breadcrumb', 'itemListElement' => zomeex_seo_breadcrumbs() );
	printf( "<script type=\"application/ld+json\">%s</script>\n", wp_json_encode( array( '@context' => 'https://schema.org', '@graph' => $graph ), JSON_HEX_TAG | JSON_HEX_AMP | JSON_HEX_APOS | JSON_HEX_QUOT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES ) );
}

function zomeex_output_seo_head() {
	if ( zomeex_seo_plugin_active() ) {
		return;
	}

	$title       = wp_get_document_title();
	$description = zomeex_seo_description();
	$is_product_category = function_exists( 'is_product_category' ) && is_product_category();
	$url         = zomeex_is_quote_request() ? zomeex_quote_url() : ( is_singular() || is_page() ? get_permalink() : ( $is_product_category ? get_term_link( get_queried_object() ) : zomeex_home_url( '/shop/' ) ) );
	$url         = zomeex_seo_url( $url, '/shop/' );
	$type        = is_singular( 'post' ) ? 'article' : 'website';
	$image       = zomeex_seo_image();

	if ( $description ) {
		printf( "<meta name=\"description\" content=\"%s\">\n", esc_attr( $description ) );
	}
	if ( $url ) {
		printf( "<link rel=\"canonical\" href=\"%s\">\n", esc_url( strtok( $url, '?' ) ) );
	}
	printf( "<meta property=\"og:type\" content=\"%s\">\n<meta property=\"og:title\" content=\"%s\">\n<meta property=\"og:description\" content=\"%s\">\n<meta property=\"og:url\" content=\"%s\">\n<meta property=\"og:site_name\" content=\"ZOMEEX\">\n<meta property=\"og:image\" content=\"%s\">\n", esc_attr( $type ), esc_attr( $title ), esc_attr( $description ), esc_url( $url ), esc_url( $image ) );
	printf( "<meta name=\"twitter:card\" content=\"summary_large_image\">\n<meta name=\"twitter:title\" content=\"%s\">\n<meta name=\"twitter:description\" content=\"%s\">\n<meta name=\"twitter:image\" content=\"%s\">\n", esc_attr( $title ), esc_attr( $description ), esc_url( $image ) );
}
add_action( 'wp_head', 'zomeex_output_seo_head', 2 );
add_action( 'wp_head', 'zomeex_output_schema', 3 );

function zomeex_seo_robots( $robots ) {
	if ( ( function_exists( 'is_404' ) && is_404() ) || zomeex_is_quote_request() || is_search() || ( function_exists( 'is_shop' ) && is_shop() && get_search_query() ) ) {
		$robots['noindex'] = true;
		if ( empty( $robots['nofollow'] ) ) {
			$robots['follow'] = true;
		}
	}

	return $robots;
}
add_filter( 'wp_robots', 'zomeex_seo_robots' );

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

function zomeex_quote_string_length( $value ) {
	return function_exists( 'mb_strlen' ) ? mb_strlen( $value ) : strlen( $value );
}

/** Sanitize a scalar quote field and flag malformed or oversized input. */
function zomeex_quote_field_limit( $value, $limit, &$invalid, $textarea = false ) {
	if ( ! is_scalar( $value ) ) {
		$invalid = true;
		return '';
	}

	$value = wp_unslash( (string) $value );
	$clean = $textarea ? sanitize_textarea_field( $value ) : sanitize_text_field( $value );
	if ( zomeex_quote_string_length( $clean ) > $limit ) {
		$invalid = true;
		return '';
	}

	return trim( $clean );
}

/** Keep client-provided product links to web URLs only. */
function zomeex_quote_safe_url( $url ) {
	if ( ! is_scalar( $url ) ) {
		return '';
	}

	$url    = esc_url_raw( wp_unslash( (string) $url ) );
	$scheme = strtolower( (string) wp_parse_url( $url, PHP_URL_SCHEME ) );

	return $url && in_array( $scheme, array( 'http', 'https' ), true ) ? $url : '';
}

function zomeex_handle_quote_submit() {
	if ( ! isset( $_POST['zomeex_quote_nonce'] ) || ! wp_verify_nonce( sanitize_text_field( wp_unslash( $_POST['zomeex_quote_nonce'] ) ), 'zomeex_quote_submit' ) ) {
		zomeex_quote_redirect( array( 'quote_error' => 'security' ) );
	}

	$invalid       = false;
	$name          = zomeex_quote_field_limit( $_POST['name'] ?? '', 120, $invalid );
	$company       = zomeex_quote_field_limit( $_POST['company'] ?? '', 160, $invalid );
	$email         = sanitize_email( is_scalar( $_POST['email'] ?? '' ) ? wp_unslash( (string) $_POST['email'] ) : '' );
	$country       = zomeex_quote_field_limit( $_POST['country'] ?? '', 120, $invalid );
	$role          = zomeex_quote_field_limit( $_POST['role'] ?? '', 60, $invalid );
	$target_market = zomeex_quote_field_limit( $_POST['target_market'] ?? '', 160, $invalid );
	$quantity      = zomeex_quote_field_limit( $_POST['quantity'] ?? '', 32, $invalid );
	$customization = zomeex_quote_field_limit( $_POST['customization'] ?? '', 3000, $invalid, true );
	$timeline      = zomeex_quote_field_limit( $_POST['timeline'] ?? '', 30, $invalid );
	$samples       = zomeex_quote_field_limit( $_POST['samples'] ?? '', 60, $invalid );
	$notes         = zomeex_quote_field_limit( $_POST['notes'] ?? '', 3000, $invalid, true );
	$honeypot      = zomeex_quote_field_limit( $_POST['zomeex_quote_honeypot'] ?? '', 120, $invalid );

	if ( $honeypot ) {
		zomeex_quote_redirect( array( 'quote_error' => 'spam' ) );
	}

	if ( $email && zomeex_quote_string_length( $email ) > 254 ) {
		$invalid = true;
	}

	$allowed_roles     = array( '', 'Founder / owner', 'Procurement', 'Product / R&D', 'Brand / marketing', 'Compliance / legal', 'Distributor', 'Other' );
	$allowed_timelines = array( '', 'Exploring options', '1-3 months', '3-6 months', '6+ months' );
	$allowed_samples   = array( '', 'Yes, please advise', 'Not yet', 'Already have samples' );
	if ( ! in_array( $role, $allowed_roles, true ) || ! in_array( $timeline, $allowed_timelines, true ) || ! in_array( $samples, $allowed_samples, true ) ) {
		$invalid = true;
	}
	if ( $quantity && ! preg_match( '/^\d{1,9}$/', $quantity ) ) {
		$invalid = true;
	}

	if ( $invalid ) {
		zomeex_quote_redirect( array( 'quote_error' => 'invalid' ) );
	}

	if ( ! $name || ! $company || ! is_email( $email ) || ! $country || ! $target_market ) {
		zomeex_quote_redirect( array( 'quote_error' => 'required' ) );
	}

	$raw_json = is_scalar( $_POST['quote_items'] ?? '' ) ? wp_unslash( (string) $_POST['quote_items'] ) : '[]';
	$raw_items = strlen( $raw_json ) <= 24000 ? json_decode( $raw_json, true ) : array();
	$items     = array();

	if ( is_array( $raw_items ) ) {
		foreach ( array_slice( $raw_items, 0, 30 ) as $item ) {
			if ( ! is_array( $item ) || empty( $item['id'] ) || empty( $item['title'] ) ) {
				continue;
			}

			$item_invalid = false;
			$title = zomeex_quote_field_limit( $item['title'], 200, $item_invalid );
			if ( $item_invalid || ! $title ) {
				continue;
			}
			$id  = absint( $item['id'] );
			$sku = zomeex_quote_field_limit( $item['sku'] ?? '', 80, $item_invalid );
			if ( ! $id || $item_invalid ) {
				continue;
			}

			$items[] = array(
				'id'       => $id,
				'title'    => $title,
				'url'      => zomeex_quote_safe_url( $item['url'] ?? '' ),
				'sku'      => $sku,
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
