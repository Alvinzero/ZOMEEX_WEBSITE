<?php
/**
 * ZOMEEX homepage: a specification-led product catalogue.
 * Product data remains owned by WooCommerce; this template only composes it.
 */
get_header();

$shop_url    = function_exists( 'wc_get_page_permalink' ) ? wc_get_page_permalink( 'shop' ) : zomeex_home_url( '/shop/' );
$contact_url = zomeex_page_url( 'contact-us', '/contact-us/' );
$hero_image  = zomeex_upload_url( 'zomee-core-pulse-510-battery-1-1170x536.jpg' );
$families    = array(
	array( 'name' => 'LITZ', 'type' => 'Vape hardware', 'image' => 'litz_0000s_0001_矢量智能对象-拷贝-8-1000x536.jpg', 'slug' => 'litz' ),
	array( 'name' => 'MELT', 'type' => 'Vape hardware', 'image' => 'melt-dabber-banner-1-1-1170x536.jpg', 'slug' => 'melt' ),
	array( 'name' => 'PACK', 'type' => 'Packaging systems', 'image' => 'pack_0002_背卡盒子_0003_背卡-拷贝-768x768.jpg', 'slug' => 'pack' ),
	array( 'name' => 'CORE', 'type' => 'Hardware systems', 'image' => 'core-14x95.2-400mah_0000_组-1-拷贝-8-700x700.jpg', 'slug' => 'core' ),
);

$featured_query = new WP_Query(
	array(
		'post_type'      => 'product',
		'post_status'    => 'publish',
		'posts_per_page' => 6,
		'orderby'        => 'date',
		'order'          => 'DESC',
	)
);
$insights = get_posts(
	array(
		'post_type'      => 'post',
		'post_status'    => 'publish',
		'posts_per_page' => 3,
		'orderby'        => 'date',
		'order'          => 'DESC',
	)
);
?>
<main class="zomeex-home" id="main-content">
	<section class="zomeex-hero zomeex-container" aria-labelledby="zomeex-hero-title">
		<div class="zomeex-hero__copy">
			<p class="zomeex-kicker">01 / Built for specification</p>
			<h1 id="zomeex-hero-title">Hardware and packaging with the structure in view.</h1>
			<p class="zomeex-lede">Explore vape hardware, packaging, and OEM/ODM support built for teams that need clear options before they commit.</p>
			<div class="zomeex-actions"><a class="zomeex-button zomeex-button--solid" href="<?php echo esc_url( $shop_url ); ?>">Browse products <span aria-hidden="true">↗</span></a><a class="zomeex-button" href="<?php echo esc_url( $contact_url ); ?>">Request a quote <span aria-hidden="true">↗</span></a></div>
		</div>
		<div class="zomeex-hero__media">
			<!-- Approved comp plate: hero-photo.png; production uses the same sourced product media. -->
			<img src="<?php echo esc_url( $hero_image ); ?>" alt="CORE Pulse 510 battery product range" fetchpriority="high" width="1170" height="536">
			<div class="zomeex-media-note"><span>Product detail</span><strong>CORE Pulse 510</strong></div>
			<div class="zomeex-media-stamp">Real product media / 01</div>
		</div>
	</section>

	<section class="zomeex-family-rail" aria-labelledby="zomeex-family-title">
		<div class="zomeex-container">
			<div class="zomeex-section-heading"><h2 id="zomeex-family-title">Start with the product family</h2><span>Scroll to compare series <span aria-hidden="true">→</span></span></div>
			<div class="zomeex-family-track" data-horizontal-track tabindex="0">
				<!-- Approved comp plate: rail-products.png; cards below retain separate semantic product images. -->
				<?php foreach ( $families as $family ) : ?>
					<?php $term = get_term_by( 'slug', $family['slug'], 'product_cat' ); ?>
					<a class="zomeex-family-card" href="<?php echo esc_url( $term && ! is_wp_error( $term ) ? get_term_link( $term ) : $shop_url ); ?>">
						<span class="zomeex-family-card__image"><img src="<?php echo esc_url( zomeex_upload_url( $family['image'] ) ); ?>" alt="<?php echo esc_attr( $family['name'] . ' ' . $family['type'] ); ?>" loading="lazy" width="1000" height="536"></span>
						<span class="zomeex-family-card__meta"><strong><?php echo esc_html( $family['name'] ); ?></strong><small><?php echo esc_html( $family['type'] ); ?></small><span aria-hidden="true">↗</span></span>
					</a>
				<?php endforeach; ?>
			</div>
		</div>
	</section>

	<section class="zomeex-featured" aria-labelledby="zomeex-featured-title">
		<div class="zomeex-container">
			<div class="zomeex-section-heading zomeex-section-heading--light"><h2 id="zomeex-featured-title">Featured products</h2><a href="<?php echo esc_url( $shop_url ); ?>">View all products <span aria-hidden="true">→</span></a></div>
			<div class="zomeex-product-track" data-horizontal-track tabindex="0">
				<?php if ( $featured_query->have_posts() ) : ?>
					<?php while ( $featured_query->have_posts() ) : $featured_query->the_post(); ?>
						<?php $product_image = get_the_post_thumbnail_url( get_the_ID(), 'woocommerce_single' ); ?>
						<a class="zomeex-product-card" href="<?php the_permalink(); ?>">
							<span class="zomeex-product-card__image"><?php if ( $product_image ) : ?><img src="<?php echo esc_url( $product_image ); ?>" alt="<?php the_title_attribute(); ?>" loading="lazy" width="700" height="700"><?php else : ?><span class="zomeex-product-card__placeholder">Product image pending</span><?php endif; ?></span>
							<span class="zomeex-product-card__meta"><strong><?php the_title(); ?></strong><small><?php echo esc_html( function_exists( 'wc_get_product_category_list' ) ? wp_strip_all_tags( wc_get_product_category_list( get_the_ID() ) ) : 'Product system' ); ?></small><span aria-hidden="true">↗</span></span>
						</a>
					<?php endwhile; wp_reset_postdata(); ?>
				<?php else : ?>
					<?php foreach ( $families as $family ) : ?>
						<a class="zomeex-product-card" href="<?php echo esc_url( $shop_url ); ?>"><span class="zomeex-product-card__image"><img src="<?php echo esc_url( zomeex_upload_url( $family['image'] ) ); ?>" alt="<?php echo esc_attr( $family['name'] ); ?> product family" loading="lazy" width="700" height="700"></span><span class="zomeex-product-card__meta"><strong><?php echo esc_html( $family['name'] ); ?></strong><small><?php echo esc_html( $family['type'] ); ?></small><span aria-hidden="true">↗</span></span></a>
					<?php endforeach; ?>
				<?php endif; ?>
			</div>
		</div>
	</section>

	<section class="zomeex-capability" aria-labelledby="zomeex-capability-title">
		<div class="zomeex-container zomeex-capability__grid">
			<div><p class="zomeex-kicker">02 / OEM + ODM</p><h2 id="zomeex-capability-title">Bring the brief.<br>Keep the structure visible.</h2><p>Share your target market, quantity, form factor, and packaging needs. Our team can map the right starting point.</p><a class="zomeex-text-link" href="<?php echo esc_url( $contact_url ); ?>">Start a conversation <span aria-hidden="true">↗</span></a></div>
			<div class="zomeex-capability__steps"><div><span>01</span><strong>Clarify</strong><p>Use and target market</p></div><div><span>02</span><strong>Specify</strong><p>Form, finish, and packaging</p></div><div><span>03</span><strong>Quote</strong><p>A structured next step</p></div></div>
		</div>
	</section>

	<section class="zomeex-insights" aria-labelledby="zomeex-insights-title">
		<div class="zomeex-container"><div class="zomeex-section-heading"><h2 id="zomeex-insights-title">Notes from the build</h2><a href="<?php echo esc_url( zomeex_page_url( 'news', '/news/' ) ); ?>">View insights <span aria-hidden="true">→</span></a></div><div class="zomeex-insights__grid">
			<?php if ( $insights ) : foreach ( $insights as $insight ) : ?><article class="zomeex-insight"><p class="zomeex-insight__number"><?php echo esc_html( get_the_date( 'M Y', $insight ) ); ?></p><h3><a href="<?php echo esc_url( get_permalink( $insight ) ); ?>"><?php echo esc_html( get_the_title( $insight ) ); ?></a></h3><p><?php echo esc_html( wp_trim_words( get_the_excerpt( $insight ), 18 ) ); ?></p><a class="zomeex-text-link" href="<?php echo esc_url( get_permalink( $insight ) ); ?>">Read note <span aria-hidden="true">↗</span></a></article><?php endforeach; else : ?><article class="zomeex-insight zomeex-insight--empty"><p class="zomeex-insight__number">Insights</p><h3>Product and manufacturing notes are on the way.</h3><p>Browse the catalogue while the next update is prepared.</p><a class="zomeex-text-link" href="<?php echo esc_url( $shop_url ); ?>">Browse products <span aria-hidden="true">↗</span></a></article><?php endif; ?>
		</div></div>
	</section>

	<section class="zomeex-cta" aria-labelledby="zomeex-cta-title"><div class="zomeex-container zomeex-cta__inner"><h2 id="zomeex-cta-title">Need a build that fits your market?</h2><a href="<?php echo esc_url( $contact_url ); ?>">Talk to the team <span aria-hidden="true">↗</span></a></div></section>
</main>
<?php get_footer(); ?>
