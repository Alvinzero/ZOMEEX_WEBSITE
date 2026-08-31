<?php
/**
 * ZOMEEX homepage: a specification-led product catalogue.
 * Product data remains owned by WooCommerce; this template only composes it.
 */
get_header();

$shop_url    = function_exists( 'wc_get_page_permalink' ) ? wc_get_page_permalink( 'shop' ) : zomeex_home_url( '/shop/' );
$contact_url = zomeex_page_url( 'contact-us', '/contact-us/' );
$hero_image  = zomeex_upload_url( 'zomee-core-pulse-510-battery-1-1170x536.jpg' );
$portals     = zomeex_product_portals();

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
			<p class="zomeex-kicker">Built for specification</p>
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
			<div class="zomeex-section-heading"><h2 id="zomeex-family-title">Start with a business portal</h2><span>Four ways to scope a brief</span></div>
			<div class="zomeex-family-track" data-horizontal-track tabindex="0">
				<!-- The four portals mirror the legacy site's business language while
				     keeping each WooCommerce series discoverable below the fold. -->
				<?php foreach ( $portals as $portal ) : ?>
					<a class="zomeex-family-card" href="<?php echo esc_url( zomeex_portal_url( $portal ) ); ?>">
						<span class="zomeex-family-card__image"><img src="<?php echo esc_url( zomeex_upload_url( $portal['image'] ) ); ?>" alt="<?php echo esc_attr( $portal['label'] ); ?>" loading="lazy" width="1000" height="536"></span>
						<span class="zomeex-family-card__meta"><strong><?php echo esc_html( $portal['name'] ); ?></strong><small><?php echo esc_html( $portal['label'] ); ?></small><span aria-hidden="true">↗</span></span>
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
					<?php foreach ( $portals as $portal ) : ?>
						<a class="zomeex-product-card" href="<?php echo esc_url( $portal['fallback'] ); ?>"><span class="zomeex-product-card__image"><img src="<?php echo esc_url( zomeex_upload_url( $portal['image'] ) ); ?>" alt="<?php echo esc_attr( $portal['label'] ); ?>" loading="lazy" width="700" height="700"></span><span class="zomeex-product-card__meta"><strong><?php echo esc_html( $portal['name'] ); ?></strong><small><?php echo esc_html( $portal['label'] ); ?></small><span aria-hidden="true">↗</span></span></a>
					<?php endforeach; ?>
				<?php endif; ?>
			</div>
		</div>
	</section>

	<section class="zomeex-capability" aria-labelledby="zomeex-capability-title">
		<div class="zomeex-container zomeex-capability__grid">
			<div><p class="zomeex-kicker">OEM + ODM</p><h2 id="zomeex-capability-title">Bring the brief.<br>Keep the structure visible.</h2><p>Share your target market, quantity, form factor, and packaging needs. Our team can map the right starting point.</p><a class="zomeex-text-link" href="<?php echo esc_url( $contact_url ); ?>">Start a conversation <span aria-hidden="true">↗</span></a></div>
			<div class="zomeex-capability__steps"><div><span>01</span><strong>Clarify</strong><p>Use and target market</p></div><div><span>02</span><strong>Specify</strong><p>Form, finish, and packaging</p></div><div><span>03</span><strong>Quote</strong><p>A structured next step</p></div></div>
		</div>
	</section>

	<section class="zomeex-proof" aria-labelledby="zomeex-proof-title">
		<div class="zomeex-container">
			<div class="zomeex-section-heading"><h2 id="zomeex-proof-title">What the current site already says</h2><span>Working proof points</span></div>
			<div class="zomeex-proof__intro"><p>These points are carried forward from the legacy website as content placeholders. Confirm wording, documents, and scope before publishing.</p></div>
			<div class="zomeex-proof__grid">
				<article><strong>One-stop supply</strong><p>Products, accessories, packaging, and logistics in one place.</p><small>Legacy copy / verify</small></article>
				<article><strong>Custom product paths</strong><p>Semi-private molds and OEM/ODM options for a defined brief.</p><small>Legacy copy / verify</small></article>
				<article><strong>Audited supply chain</strong><p>Audited factories, consistent quality, and fast delivery.</p><small>Legacy copy / verify</small></article>
				<article><strong>EU + US market context</strong><p>10+ years in EU and US vape and cannabis markets.</p><small>Legacy copy / verify</small></article>
			</div>
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
