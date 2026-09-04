<?php
/**
 * ZOMEEX homepage: a specification-led product catalogue.
 * Product data remains owned by WooCommerce; this template only composes it.
 */
get_header();

$shop_url    = function_exists( 'wc_get_page_permalink' ) ? wc_get_page_permalink( 'shop' ) : zomeex_home_url( '/shop/' );
$contact_url = zomeex_page_url( 'contact-us', '/contact-us/' );
$quote_url   = zomeex_quote_url();
$hero_image  = zomeex_upload_url( 'zomee-core-pulse-510-battery-1-1170x536.jpg' );
$portals     = zomeex_product_portals();
$packaging_categories = function_exists( 'zomeex_packaging_categories' ) ? zomeex_packaging_categories() : array();
$applications = function_exists( 'zomeex_application_scenarios' ) ? zomeex_application_scenarios() : array();
$faq_url      = function_exists( 'zomeex_faq_url' ) ? zomeex_faq_url() : zomeex_home_url( '/faq/' );
$resource_image = zomeex_upload_url( 'pack_0003_药丸包装-拷贝-2-768x768.jpg' );
$category_images = array(
	'zomee-core-pulse-510-battery-1-1170x536.jpg',
	'pack_0003_药丸包装-拷贝-2-768x768.jpg',
	'hot-knife-glass-cover_0000s_0003_矢量智能对象-768x768.jpg',
	'pack_0002_背卡盒子_0003_背卡-拷贝-768x768.jpg',
	'pack_0001_背卡盒子_0004_组-5-768x768.jpg',
	'drip-box_0000_矢量智能对象-700x700.jpg',
);

$project_portals = array(
	'vape' => array(
		'title' => 'Build a hardware range',
		'copy'  => 'Start with device format, oil compatibility, target market, and the parts your launch needs around it.',
	),
	'pack' => array(
		'title' => 'Pair the product with packaging',
		'copy'  => 'Bring bags, boxes, child-resistant formats, and presentation details into one product decision.',
	),
	'switch' => array(
		'title' => 'Connect the production route',
		'copy'  => 'Map equipment, HNB, NRT, and system requirements before committing to a format or workflow.',
	),
	'boost' => array(
		'title' => 'Set an OEM or ODM route',
		'copy'  => 'Use a defined brief to align product direction, customization, and target-market questions with the team.',
	),
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

	<section class="zomeex-trust-bar" aria-label="Project support">
		<div class="zomeex-container zomeex-trust-bar__inner">
			<span>Factory-direct project review</span><span>Market-specific documentation</span><span>Artwork and dieline guidance</span><span>Samples available to discuss</span>
		</div>
	</section>

	<section class="zomeex-family-rail" aria-labelledby="zomeex-family-title">
		<div class="zomeex-container">
			<div class="zomeex-family-rail__heading"><h2 id="zomeex-family-title">Explore by product family</h2><a href="<?php echo esc_url( $shop_url ); ?>">View all products <span aria-hidden="true">&rarr;</span></a></div>
			<div class="zomeex-family-track">
				<?php foreach ( $portals as $portal ) : ?>
					<a class="zomeex-family-card" href="<?php echo esc_url( zomeex_portal_url( $portal ) ); ?>">
						<span class="zomeex-family-card__meta"><strong><?php echo esc_html( $portal['name'] ); ?></strong><small><?php echo esc_html( $portal['label'] ); ?></small></span>
						<span class="zomeex-family-card__action">Explore <span aria-hidden="true">&rarr;</span></span>
					</a>
				<?php endforeach; ?>
			</div>
		</div>
	</section>

	<section class="zomeex-packaging" aria-labelledby="zomeex-packaging-title">
		<div class="zomeex-container">
			<div class="zomeex-section-heading"><h2 id="zomeex-packaging-title">Packaging formats for the next decision.</h2><a href="<?php echo esc_url( zomeex_portal_url( $portals['pack'] ) ); ?>">Explore PACK <span aria-hidden="true">↗</span></a></div>
			<div class="zomeex-packaging__grid">
				<?php foreach ( array_slice( $packaging_categories, 0, 6 ) as $index => $category ) : ?>
					<?php $term = get_term_by( 'slug', $category['slug'], 'product_cat' ); $category_url = $term && ! is_wp_error( $term ) ? get_term_link( $term ) : zomeex_portal_url( $portals['pack'] ); $image_file = $category_images[ $index ] ?? $category_images[0]; ?>
					<article class="zomeex-packaging-card"><a class="zomeex-packaging-card__media" href="<?php echo esc_url( $category_url ); ?>"><img src="<?php echo esc_url( zomeex_upload_url( $image_file ) ); ?>" alt="<?php echo esc_attr( $category['name'] ); ?>" loading="lazy" width="768" height="768"></a><div class="zomeex-packaging-card__body"><p><?php echo esc_html( sprintf( '%02d', $index + 1 ) ); ?></p><h3><a href="<?php echo esc_url( $category_url ); ?>"><?php echo esc_html( $category['name'] ); ?></a></h3><a class="zomeex-text-link" href="<?php echo esc_url( add_query_arg( 'interest', sanitize_title( $category['name'] ), $quote_url ) ); ?>">Request a dieline <span aria-hidden="true">↗</span></a></div></article>
				<?php endforeach; ?>
			</div>
		</div>
	</section>

	<section class="zomeex-resources" aria-labelledby="zomeex-resources-title">
		<div class="zomeex-container zomeex-resources__grid">
			<div class="zomeex-resource zomeex-resource--dieline"><div><p class="zomeex-kicker">Design resources</p><h2 id="zomeex-resources-title">Bring the artwork. We will help with the format.</h2><p>Share your dimensions, closure and target market. The team can review an existing dieline or advise on the next file to prepare.</p><a class="zomeex-button zomeex-button--solid" href="<?php echo esc_url( add_query_arg( 'resource', 'dieline', $quote_url ) ); ?>">Request dieline guidance <span aria-hidden="true">↗</span></a></div></div>
			<div class="zomeex-resource zomeex-resource--sample"><div class="zomeex-resource__media"><img src="<?php echo esc_url( $resource_image ); ?>" alt="Packaging sample kit" loading="lazy" width="768" height="768"></div><div class="zomeex-resource__copy"><p class="zomeex-kicker">Physical reference</p><h2>Need to compare the feel?</h2><p>Ask about a sample kit for the formats and finishes relevant to your brief.</p><a class="zomeex-text-link" href="<?php echo esc_url( add_query_arg( 'resource', 'sample-kit', $quote_url ) ); ?>">Claim a sample kit <span aria-hidden="true">↗</span></a></div></div>
		</div>
	</section>

	<section class="zomeex-applications" id="zomeex-applications" aria-labelledby="zomeex-applications-title">
		<div class="zomeex-container">
			<div class="zomeex-section-heading"><h2 id="zomeex-applications-title">Shop by application.</h2><span>Start with the product context</span></div>
			<div class="zomeex-application-tabs" role="tablist" aria-label="Packaging applications">
				<?php foreach ( $applications as $index => $application ) : ?><button type="button" role="tab" aria-selected="<?php echo 0 === $index ? 'true' : 'false'; ?>" aria-controls="zomeex-application-panel-<?php echo esc_attr( $application['slug'] ); ?>" id="zomeex-application-tab-<?php echo esc_attr( $application['slug'] ); ?>" data-application-tab="<?php echo esc_attr( $application['slug'] ); ?>"><?php echo esc_html( $application['name'] ); ?></button><?php endforeach; ?>
			</div>
			<div class="zomeex-application-panels">
				<?php foreach ( $applications as $index => $application ) : ?><div class="zomeex-application-panel" id="zomeex-application-panel-<?php echo esc_attr( $application['slug'] ); ?>" role="tabpanel" aria-labelledby="zomeex-application-tab-<?php echo esc_attr( $application['slug'] ); ?>" data-application-panel="<?php echo esc_attr( $application['slug'] ); ?>"<?php echo 0 === $index ? '' : ' hidden'; ?>><div><p class="zomeex-kicker">Application route</p><h3><?php echo esc_html( $application['name'] ); ?></h3><p>Compare a focused set of formats for this use case, then send the market, volume and finish details with your brief.</p><a class="zomeex-text-link" href="<?php echo esc_url( add_query_arg( 'application', $application['slug'], $quote_url ) ); ?>">Discuss this application <span aria-hidden="true">↗</span></a></div><div class="zomeex-application-panel__media"><img src="<?php echo esc_url( zomeex_upload_url( $category_images[ $index % count( $category_images ) ] ) ); ?>" alt="<?php echo esc_attr( $application['name'] ); ?>" loading="lazy" width="768" height="768"></div></div><?php endforeach; ?>
			</div>
		</div>
	</section>

	<section class="zomeex-solutions" aria-labelledby="zomeex-solution-title">
		<div class="zomeex-container">
			<div class="zomeex-solutions__grid">
				<div class="zomeex-solutions__intro">
					<h2 id="zomeex-solution-title">Find the right starting point for the project.</h2>
					<p>Choose the part of the brief that is already clear. Each portal keeps the next product, packaging, or production decision connected to the same project.</p>
					<a class="zomeex-text-link" href="<?php echo esc_url( $quote_url ); ?>">Start a project brief <span aria-hidden="true">&rarr;</span></a>
				</div>
				<?php foreach ( $portals as $portal_key => $portal ) : ?>
					<?php $project_portal = $project_portals[ $portal_key ]; ?>
					<article class="zomeex-solution zomeex-solution--<?php echo esc_attr( $portal_key ); ?>">
						<a class="zomeex-solution__image" href="<?php echo esc_url( zomeex_portal_url( $portal ) ); ?>">
							<img src="<?php echo esc_url( zomeex_upload_url( $portal['image'] ) ); ?>" alt="<?php echo esc_attr( $portal['label'] ); ?>" loading="lazy" width="1000" height="700">
						</a>
						<div class="zomeex-solution__copy">
							<p><?php echo esc_html( $portal['name'] ); ?></p>
							<h3><a href="<?php echo esc_url( zomeex_portal_url( $portal ) ); ?>"><?php echo esc_html( $project_portal['title'] ); ?></a></h3>
							<p><?php echo esc_html( $project_portal['copy'] ); ?></p>
							<a class="zomeex-solution__link" href="<?php echo esc_url( zomeex_portal_url( $portal ) ); ?>">Explore <?php echo esc_html( $portal['name'] ); ?> <span aria-hidden="true">&rarr;</span></a>
						</div>
					</article>
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

	<section class="zomeex-capability" id="zomeex-capability-title" aria-labelledby="zomeex-process-title">
		<div class="zomeex-container zomeex-capability__grid">
			<div><h2 id="zomeex-process-title">A project route with the decisions in order.</h2><p>Bring the market, product direction, quantity, and open questions. The conversation can start before every detail is final.</p><a class="zomeex-text-link" href="<?php echo esc_url( $quote_url ); ?>">Start a project brief <span aria-hidden="true">&rarr;</span></a></div>
			<div class="zomeex-capability__steps"><div><span>01</span><strong>Define the brief</strong><p>Product direction, target market, and volume.</p></div><div><span>02</span><strong>Confirm the format</strong><p>Hardware, packaging, finishes, and product fit.</p></div><div><span>03</span><strong>Sample or proof</strong><p>Review the options and align the open details.</p></div><div><span>04</span><strong>Production route</strong><p>Move the confirmed scope into the next commercial conversation.</p></div></div>
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

	<section class="zomeex-procurement" aria-labelledby="zomeex-procurement-title">
		<div class="zomeex-container zomeex-procurement__layout">
			<div class="zomeex-procurement__heading"><h2 id="zomeex-procurement-title">What to bring into the first conversation.</h2><p>Not every item has to be settled. These details help the team give your project a useful first direction.</p></div>
			<div class="zomeex-procurement__list">
				<article><h3>Product direction</h3><p>Format, intended use, and the product families you are comparing.</p></article>
				<article><h3>Target market</h3><p>Where the product will launch and any requirements already known to your team.</p></article>
				<article><h3>Customization scope</h3><p>Branding, color, finish, packaging, or product changes that are still under review.</p></article>
				<article><h3>Reference material</h3><p>Artwork, samples, drawings, or product links if they are available. A complete pack is not required.</p></article>
			</div>
		</div>
	</section>

	<section class="zomeex-quote-paths" aria-labelledby="zomeex-quote-paths-title">
		<div class="zomeex-container">
			<div class="zomeex-quote-paths__heading"><h2 id="zomeex-quote-paths-title">Choose the quote path that matches your starting point.</h2></div>
			<div class="zomeex-quote-paths__grid">
				<article>
					<h3>Already have product options?</h3>
					<p>Browse product detail pages, add the relevant items to your Quote List, then send the list with your requirements.</p>
					<a class="zomeex-button zomeex-button--solid" href="<?php echo esc_url( $shop_url ); ?>">Build a quote list <span aria-hidden="true">&rarr;</span></a>
				</article>
				<article>
					<h3>Still defining the project?</h3>
					<p>Send a focused brief when you need help choosing the format, product path, packaging, or OEM and ODM direction.</p>
					<a class="zomeex-button" href="<?php echo esc_url( $quote_url ); ?>">Start a project brief <span aria-hidden="true">&rarr;</span></a>
				</article>
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
