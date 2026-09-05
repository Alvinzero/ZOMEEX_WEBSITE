<?php
/**
 * ZOMEEX homepage.
 *
 * This template follows the approved homepage brief while keeping WooCommerce
 * product data and the existing quote-request handler as the source of truth.
 */
get_header();

$shop_url    = function_exists( 'wc_get_page_permalink' ) ? wc_get_page_permalink( 'shop' ) : zomeex_home_url( '/shop/' );
$quote_url   = zomeex_quote_url();
$news_url    = zomeex_page_url( 'news', '/news/' );

$hero_image        = zomeex_upload_url( 'pack_0002_背卡盒子_0003_背卡-拷贝-768x768.jpg' );
$hero_video        = zomeex_upload_url( 'ed54e97bc6b48b1910bf39c76dfe4f51.mp4', '2025/12' );
$hero_product_image = get_stylesheet_directory_uri() . '/assets/zomeex-packaging-hero.png';

$category_data = array(
	array( 'title' => 'Custom Mylar Bags & Pouches', 'slug' => 'mylar-bag', 'image' => 'pack_0003_药丸包装-拷贝-2-768x768.jpg', 'copy' => 'Barrier films, stand-up pouches and retail-ready formats.' ),
	array( 'title' => 'Printed Paper Boxes & Rigid Boxes', 'slug' => 'vape-box', 'image' => 'pack_0002_背卡盒子_0003_背卡-拷贝-768x768.jpg', 'copy' => 'Folding cartons and rigid presentation boxes for shelf impact.' ),
	array( 'title' => 'Glass Jars & Concentrate Containers', 'slug' => 'jars-glass-containers', 'image' => 'hot-knife-glass-cover_0000s_0003_矢量智能对象.jpg', 'copy' => 'Protective glass and concentrate formats with a considered fit.' ),
	array( 'title' => 'Pre-Roll Packaging & Tubes', 'slug' => 'preroll-wraps', 'image' => 'drip-box_0000_矢量智能对象-700x700.jpg', 'copy' => 'Tubes, wraps and display-ready formats for pre-roll lines.' ),
	array( 'title' => 'Tins & Metal Containers', 'slug' => 'tins-metal-containers', 'image' => 'pack_0001_背卡盒子_0004_组-5-768x768.jpg', 'copy' => 'Durable metal formats for a tactile, reusable presentation.' ),
	array( 'title' => 'Corrugated POP Display Shelves', 'slug' => 'retail-displays-merch', 'image' => 'drip-box_0001_矢量智能对象-拷贝-585x295.jpg', 'copy' => 'Retail display pieces that make the product easy to find.' ),
);

$application_data = array(
	array( 'title' => 'Flower & Hemp', 'slug' => 'flower-hemp', 'image' => 'pack_0003_药丸包装-拷贝-2-768x768.jpg', 'copy' => 'Barrier bags, jars and compliant presentation formats for flower and hemp products.' ),
	array( 'title' => 'Pre-Rolls & Joints', 'slug' => 'pre-roll-joint', 'image' => 'drip-box_0000_矢量智能对象-700x700.jpg', 'copy' => 'Protective tubes, wraps and secondary packaging for pre-roll programs.' ),
	array( 'title' => 'Edibles & Gummies', 'slug' => 'edibles-gummies', 'image' => 'pack_0002_背卡盒子_0003_背卡-拷贝-768x768.jpg', 'copy' => 'Printed boxes and pouches that keep edible ranges clear on shelf.' ),
	array( 'title' => 'Vape & Concentrates', 'slug' => 'vape-cartridge', 'image' => 'hot-knife-glass-cover_0000s_0003_矢量智能对象.jpg', 'copy' => 'Vape hardware, concentrate containers and coordinated retail packaging.' ),
);

$product_interest_options = array( 'Mylar bags', 'Paper boxes', 'Glass jars', 'Pre-roll packaging', 'Vape hardware', 'POP displays' );
$proof_points = array(
	array( 'value' => 'CPSC', 'label' => 'Documentation route', 'note' => 'Demo / verify scope' ),
	array( 'value' => 'ASTM D3475', 'label' => 'Test standard', 'note' => 'Demo / verify report' ),
	array( 'value' => 'ISO 9001', 'label' => 'Quality framework', 'note' => 'Demo / verify certificate' ),
	array( 'value' => 'FDA', 'label' => 'Material review route', 'note' => 'Demo / verify application' ),
	array( 'value' => 'FSC', 'label' => 'Paper sourcing route', 'note' => 'Demo / verify chain' ),
);
$factory_stats = array(
	array( 'value' => '50,000 ㎡', 'label' => 'Modern production base' ),
	array( 'value' => '1M+', 'label' => 'Pieces daily capacity' ),
	array( 'value' => '100%', 'label' => 'Inspection before shipment' ),
	array( 'value' => '500+', 'label' => 'Global brands served' ),
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

$quote_error = sanitize_key( wp_unslash( $_GET['quote_error'] ?? '' ) );
$quote_errors = array(
	'required' => 'Please complete the required fields before sending your brief.',
	'invalid'  => 'Some fields need attention. Review the brief and try again.',
	'security' => 'This brief has expired. Refresh the page and try again.',
	'spam'     => 'We could not accept this request. Please try again.',
	'save'     => 'We could not save this brief. Please try again or contact the team directly.',
);

$category_url = static function ( $category ) use ( $shop_url ) {
	$term = get_term_by( 'slug', $category['slug'], 'product_cat' );
	return $term && ! is_wp_error( $term ) ? get_term_link( $term ) : add_query_arg( 'collection', $category['slug'], $shop_url );
};
?>
<main class="zomeex-home zx-home" id="main-content">
		<section class="zx-hero" aria-labelledby="zx-hero-title">
			<div class="zx-hero__backdrop" style="background-image: url('<?php echo esc_url( $hero_image ); ?>');" aria-hidden="true">
				<video class="zx-hero__video" autoplay loop muted playsinline preload="auto" poster="<?php echo esc_url( $hero_image ); ?>" aria-hidden="true">
					<source src="<?php echo esc_url( $hero_video ); ?>" type="video/mp4">
				</video>
				<div class="zx-hero__backdrop-scrim"></div>
			</div>
			<div class="zomeex-container zx-hero__grid">
				<div class="zx-hero__copy">
					<p class="zx-eyebrow zx-hero__eyebrow">ZOMEEX / CUSTOM PACKAGING SYSTEM</p>
					<h1 id="zx-hero-title">Packaging built for your next market.</h1>
					<p class="zx-hero__lede">Factory-direct bags, boxes, jars and OEM/ODM support for regulated launches.</p>
					<div class="zx-hero__trust" aria-label="Key service benefits">
						<span data-evidence-status="demo">CPSC / ASTM review route <small>DEMO DATA</small></span><span data-evidence-status="demo">10-Day Fast Turnaround <small>DEMO DATA</small></span><span data-evidence-status="demo">Free Vector Dielines <small>DEMO DATA</small></span>
				</div>
				<div class="zx-actions">
					<a class="zx-button zx-button--primary" href="<?php echo esc_url( $quote_url ); ?>">Get Custom Quote <span aria-hidden="true">↗</span></a>
					<a class="zx-button zx-button--secondary" href="<?php echo esc_url( add_query_arg( 'resource', 'sample-kit', $quote_url ) ); ?>">Request Free Sample Kit <span aria-hidden="true">↗</span></a>
				</div>
			</div>
				<div class="zx-hero__visual" aria-label="Packaging product visual">
					<div class="zx-hero__visual-stage">
						<div class="zx-hero__visual-topline"><span>FACTORY FILM / 00:27</span><span aria-hidden="true">LIVE LOOP</span></div>
						<figure class="zx-hero__product zx-hero__product--primary">
							<div class="zx-hero__product-media"><img src="<?php echo esc_url( $hero_product_image ); ?>" alt="Printed ZOMEEX packaging formats" fetchpriority="high" width="1536" height="1024"></div>
							<figcaption><span>01</span><strong>Rigid packaging systems</strong><small>Print, structure and shelf presence in one route.</small></figcaption>
						</figure>
						<div class="zx-hero__product-meta"><span class="zx-hero__product-meta-dot" aria-hidden="true"></span><strong>Built around your brief</strong><span>Material, format and market in one conversation.</span></div>
					</div>
					<div class="zx-hero__caption"><strong>One production route.</strong><span>From artwork and material selection to a market-ready pack.</span></div>
				</div>
		</div>
	</section>

	<section class="zx-trust" id="zomeex-proof-title" aria-label="Compliance and material standards">
		<div class="zomeex-container zx-trust__grid">
			<?php foreach ( $proof_points as $proof ) : ?>
				<span data-evidence-status="demo"><strong><?php echo esc_html( $proof['value'] ); ?></strong><small><?php echo esc_html( $proof['label'] ); ?></small><em>DEMO DATA</em><small class="zx-trust__detail"><?php echo esc_html( $proof['note'] ); ?></small></span>
			<?php endforeach; ?>
		</div>
		<p class="zx-trust__note"><strong>Demo evidence only.</strong> <span>Certificates, test reports, market scope and material claims must be confirmed by ZOMEEX before publication.</span> <span>Client confirmation is required before launch.</span></p>
	</section>

	<section class="zx-advantages" aria-labelledby="zx-advantages-title">
		<div class="zomeex-container">
			<div class="zx-section-head"><h2 id="zx-advantages-title">A clearer route from packaging brief to production.</h2><p>Every touchpoint is designed for the decisions a procurement team needs to make.</p></div>
			<div class="zx-advantage-grid">
				<article><span class="zx-mark" aria-hidden="true">01</span><h3>Factory-Direct Pricing</h3><p>Keep the commercial conversation close to the production route and the actual format.</p></article>
				<article data-evidence-status="demo"><span class="zx-mark" aria-hidden="true">02</span><h3>Market Documentation Review</h3><p>Review child-resistant structures and market documentation before a format is finalized.</p><span class="zx-demo-badge">DEMO DATA</span></article>
				<article><span class="zx-mark" aria-hidden="true">03</span><h3>Bespoke Printing Crafts</h3><p>Choose materials, inks and special finishes that make the brand feel intentional.</p></article>
				<article><span class="zx-mark" aria-hidden="true">04</span><h3>Free Pre-Press Support</h3><p>Start from an existing artwork file or get a dieline route for the next production step.</p></article>
			</div>
		</div>
	</section>

	<section class="zx-categories" aria-labelledby="zx-categories-title">
		<div class="zomeex-container">
			<div class="zx-section-head zx-section-head--split"><div><h2 id="zx-categories-title">Choose the format first. Shape the details together.</h2></div><a class="zx-inline-link" href="<?php echo esc_url( $shop_url ); ?>">View all products <span aria-hidden="true">↗</span></a></div>
			<div class="zx-category-grid">
				<?php foreach ( $category_data as $index => $category ) : ?>
					<?php $url = $category_url( $category ); ?>
					<article class="zx-category-card">
						<a class="zx-category-card__media" href="<?php echo esc_url( $url ); ?>"><img src="<?php echo esc_url( zomeex_upload_url( $category['image'] ) ); ?>" alt="<?php echo esc_attr( $category['title'] ); ?>" loading="lazy" width="768" height="768"></a>
						<div class="zx-category-card__body"><span class="zx-category-card__number"><?php echo esc_html( sprintf( '%02d', $index + 1 ) ); ?></span><h3><a href="<?php echo esc_url( $url ); ?>"><?php echo esc_html( $category['title'] ); ?></a></h3><p><?php echo esc_html( $category['copy'] ); ?></p><a class="zx-inline-link" href="<?php echo esc_url( add_query_arg( 'interest', sanitize_title( $category['title'] ), $quote_url ) ); ?>">Request a dieline <span aria-hidden="true">↗</span></a></div>
					</article>
				<?php endforeach; ?>
			</div>
		</div>
	</section>

	<section class="zx-lead-magnet" aria-labelledby="zx-lead-title">
		<div class="zomeex-container zx-lead-magnet__grid">
			<div class="zx-lead-card zx-lead-card--dieline"><div><h2 id="zx-lead-title">Download 100+ Free Vector Dielines</h2><p>AI and PDF starter files for the formats your team is already comparing.</p><a class="zx-button zx-button--light" href="<?php echo esc_url( add_query_arg( 'resource', 'dieline', $quote_url ) ); ?>">Get the dieline pack <span aria-hidden="true">↗</span></a></div><span class="zx-lead-card__index">AI / PDF</span></div>
			<div class="zx-lead-card zx-lead-card--sample"><div><h2>Order a Free Physical Sample Kit</h2><p>$0 + shipping. Compare materials, closures and finishes before the production conversation.</p><a class="zx-button zx-button--outline-light" href="<?php echo esc_url( add_query_arg( 'resource', 'sample-kit', $quote_url ) ); ?>">Request sample kit <span aria-hidden="true">↗</span></a></div><span class="zx-lead-card__index">01 / KIT</span></div>
		</div>
	</section>

	<section class="zx-applications" id="zomeex-applications" aria-labelledby="zx-applications-title">
		<div class="zomeex-container">
			<div class="zx-section-head"><h2 id="zx-applications-title">Start with the product context.</h2></div>
			<div class="zx-tabs-wrap"><div class="zx-tabs" role="tablist" aria-label="Packaging applications">
				<?php foreach ( $application_data as $index => $application ) : ?><button type="button" role="tab" aria-selected="<?php echo 0 === $index ? 'true' : 'false'; ?>" aria-controls="zomeex-application-panel-<?php echo esc_attr( $application['slug'] ); ?>" id="zomeex-application-tab-<?php echo esc_attr( $application['slug'] ); ?>" data-application-tab="<?php echo esc_attr( $application['slug'] ); ?>"><?php echo esc_html( $application['title'] ); ?></button><?php endforeach; ?>
			</div><span class="zx-tabs-wrap__hint" aria-hidden="true">Swipe to explore</span></div>
			<div class="zx-application-panels">
				<?php foreach ( $application_data as $index => $application ) : ?>
					<div class="zx-application-panel" id="zomeex-application-panel-<?php echo esc_attr( $application['slug'] ); ?>" role="tabpanel" aria-labelledby="zomeex-application-tab-<?php echo esc_attr( $application['slug'] ); ?>" data-application-panel="<?php echo esc_attr( $application['slug'] ); ?>"<?php echo 0 === $index ? '' : ' hidden'; ?>><div class="zx-application-panel__copy"><span class="zx-mark" aria-hidden="true">0<?php echo esc_html( $index + 1 ); ?></span><h3><?php echo esc_html( $application['title'] ); ?></h3><p><?php echo esc_html( $application['copy'] ); ?></p><a class="zx-inline-link" href="<?php echo esc_url( add_query_arg( 'application', $application['slug'], $quote_url ) ); ?>">Discuss this application <span aria-hidden="true">↗</span></a></div><div class="zx-application-panel__media"><img src="<?php echo esc_url( zomeex_upload_url( $application['image'] ) ); ?>" alt="<?php echo esc_attr( $application['title'] ); ?>" loading="lazy" width="768" height="768"></div></div>
				<?php endforeach; ?>
			</div>
		</div>
	</section>

	<section class="zx-finishes" aria-labelledby="zx-finishes-title">
		<div class="zomeex-container">
			<div class="zx-section-head zx-section-head--split"><div><h2 id="zx-finishes-title">Craft, material and closure are part of the brief.</h2></div><a class="zx-inline-link" href="<?php echo esc_url( $quote_url ); ?>">Talk through a finish <span aria-hidden="true">↗</span></a></div>
			<div class="zx-finish-grid">
				<article><div class="zx-finish-symbol" aria-hidden="true">✦</div><h3>Special Finishes</h3><p>Foil, spot UV, soft-touch coating and embossing can be explored against the substrate and artwork.</p><span>Foil / UV / emboss</span></article>
				<article><div class="zx-finish-symbol" aria-hidden="true">◌</div><h3>Sustainable Materials</h3><p>Paper, board and recycled options can be reviewed alongside the intended shelf life and market.</p><span>Paper / FSC / recycled</span></article>
				<article><div class="zx-finish-symbol" aria-hidden="true">⌁</div><h3>Child-Resistant Locks</h3><p>Discuss closures and test routes for the exact format before a compliance statement is published.</p><span>Closure / test route / market</span></article>
			</div>
		</div>
	</section>

	<section class="zx-factory" id="zomeex-capability-title" aria-labelledby="zx-factory-title">
		<div class="zomeex-container zx-factory__grid">
			<div class="zx-factory__media" role="img" aria-label="Factory video placeholder" data-evidence-status="demo"><span class="zx-media-status">DEMO MEDIA</span><div class="zx-video-placeholder"><span class="zx-play" aria-hidden="true">▶</span><strong>Factory video placeholder</strong><small>Replace with approved production footage before launch.</small></div><span class="zx-media-tag">Factory tour / 02</span></div>
			<div class="zx-factory__copy"><h2 id="zx-factory-title">A production view your team can work with.</h2><p>Use this section for the factory tour, verified production indicators and the quality checkpoints that matter to your market.</p><div class="zx-stat-grid"><?php foreach ( $factory_stats as $stat ) : ?><div data-evidence-status="demo"><strong><?php echo esc_html( $stat['value'] ); ?></strong><span><?php echo esc_html( $stat['label'] ); ?></span><small>DEMO DATA</small></div><?php endforeach; ?></div><small class="zx-demo-note"><strong>Demo data.</strong> <span>Factory figures, inspection language and certifications require approval before publishing.</span> <span>Client confirmation is required before launch.</span></small></div>
		</div>
	</section>

	<section class="zx-rfq" id="zx-rfq" aria-labelledby="zx-rfq-title">
		<div class="zomeex-container zx-rfq__grid">
			<div class="zx-rfq__intro"><h2 id="zx-rfq-title">Tell us what you are building.</h2><p>Start with three useful details. Add the rest only when it helps the conversation.</p><div class="zx-rfq__promise"><span>01</span><p>Choose a format, market and volume in about 30 seconds.</p></div><div class="zx-rfq__promise"><span>02</span><p>Add artwork or timing when you are ready. Your text stays in this session.</p></div></div>
			<form class="zx-rfq-form" data-rfq-stepper action="<?php echo esc_url( admin_url( 'admin-post.php' ) ); ?>" method="post" enctype="multipart/form-data">
				<?php if ( $quote_error && isset( $quote_errors[ $quote_error ] ) ) : ?><div class="zx-form-alert" role="alert"><?php echo esc_html( $quote_errors[ $quote_error ] ); ?></div><?php endif; ?>
				<ol class="zx-rfq-steps" data-rfq-progress aria-label="Quote request steps"><li data-rfq-progress-item="1" aria-current="step"><span>1</span><strong>Project</strong></li><li data-rfq-progress-item="2"><span>2</span><strong>Requirements</strong></li><li data-rfq-progress-item="3"><span>3</span><strong>Contact</strong></li></ol>
				<section class="zx-rfq-step" data-rfq-step="1" aria-labelledby="zx-rfq-step-1-title"><div class="zx-rfq-step__heading"><p class="zx-eyebrow">Step 1 / Project</p><h3 id="zx-rfq-step-1-title" tabindex="-1">What are you sourcing?</h3><p>These three details give the team a useful first direction.</p></div><div class="zx-form-grid"><fieldset class="zx-form-field--full"><legend>Product interest</legend><div class="zx-check-grid"><?php foreach ( $product_interest_options as $option ) : ?><label><input type="checkbox" value="<?php echo esc_attr( $option ); ?>" data-product-interest><span><?php echo esc_html( $option ); ?></span></label><?php endforeach; ?></div><input type="hidden" name="product_interest" value="" data-product-interest-value></fieldset><label><span>Target market <em>*</em></span><input type="text" name="target_market" placeholder="e.g. US, EU, Canada" maxlength="160" required></label><fieldset><legend>Estimated quantity</legend><div class="zx-choice-list"><label><input type="radio" name="quantity" value="10000"><span>10,000 units</span></label><label><input type="radio" name="quantity" value="50000"><span>50,000 units</span></label><label><input type="radio" name="quantity" value="100000"><span>100,000+ units</span></label><label><input type="radio" name="quantity" value=""><span>Not sure yet</span></label></div></fieldset></div><button class="zx-button zx-button--primary zx-rfq-next" type="button" data-rfq-next="2">Continue to requirements <span aria-hidden="true">↗</span></button></section>
				<section class="zx-rfq-step" data-rfq-step="2" aria-labelledby="zx-rfq-step-2-title" hidden><div class="zx-rfq-step__heading"><p class="zx-eyebrow">Step 2 / Requirements</p><h3 id="zx-rfq-step-2-title" tabindex="-1">What should we prepare?</h3><p>Optional details help us tailor the first reply.</p></div><div class="zx-form-grid"><label><span>Role</span><select name="role"><option value="">Select one</option><option>Founder / owner</option><option>Procurement</option><option>Product / R&amp;D</option><option>Brand / marketing</option><option>Compliance / legal</option><option>Distributor</option><option>Other</option></select></label><label><span>WhatsApp / phone</span><input type="text" name="phone" autocomplete="tel" maxlength="60"></label><label class="zx-form-field--full"><span>Message</span><textarea name="notes" rows="4" maxlength="3000" placeholder="Dimensions, finish, timeline or any open question"></textarea></label><label class="zx-form-field--full zx-file-field"><span>Artwork / dieline upload</span><input type="file" name="artwork_files[]" multiple accept=".pdf,.ai,.eps,.svg,.png,.jpg,.jpeg,.webp"><small>Up to 3 files, 10 MB each. PDF, AI, EPS, SVG, PNG, JPG or WEBP.</small></label></div><div class="zx-rfq-step__actions"><button class="zx-button zx-button--secondary" type="button" data-rfq-back="1">Back</button><button class="zx-button zx-button--primary" type="button" data-rfq-next="3">Continue to contact <span aria-hidden="true">↗</span></button></div></section>
				<section class="zx-rfq-step" data-rfq-step="3" aria-labelledby="zx-rfq-step-3-title" hidden><div class="zx-rfq-step__heading"><p class="zx-eyebrow">Step 3 / Contact</p><h3 id="zx-rfq-step-3-title" tabindex="-1">Where should we send the reply?</h3><p>We use these details only to respond to your enquiry.</p></div><div class="zx-form-grid"><label><span>Name <em>*</em></span><input type="text" name="name" autocomplete="name" maxlength="120" required></label><label><span>Company <em>*</em></span><input type="text" name="company" autocomplete="organization" maxlength="160" required></label><label><span>Business email <em>*</em></span><input type="email" name="email" autocomplete="email" maxlength="254" required></label><label><span>Country / region <em>*</em></span><input type="text" name="country" autocomplete="country-name" maxlength="120" required></label></div><label class="zx-consent"><input type="checkbox" name="privacy_consent" value="1" required><span>I agree that ZOMEEX may use these details and files to respond to this enquiry.</span></label><div class="zx-rfq-step__actions"><button class="zx-button zx-button--secondary" type="button" data-rfq-back="2">Back</button><button class="zx-button zx-button--primary zx-button--submit" type="submit">Submit inquiry <span aria-hidden="true">↗</span></button></div></section>
				<div class="zx-honeypot" aria-hidden="true" hidden><label>Website<input type="text" name="zomeex_quote_honeypot" tabindex="-1" autocomplete="off"></label></div><input type="hidden" name="action" value="zomeex_quote_submit"><input type="hidden" name="quote_return" value="home"><input type="hidden" name="quote_items" value="[]"><?php wp_nonce_field( 'zomeex_quote_submit', 'zomeex_quote_nonce' ); ?>
			</form>
		</div>
	</section>

	<section class="zx-insights" aria-labelledby="zx-insights-title">
		<div class="zomeex-container">
			<div class="zx-section-head zx-section-head--split"><div><h2 id="zx-insights-title">Useful context for the next packaging decision.</h2></div><a class="zx-inline-link" href="<?php echo esc_url( $news_url ); ?>">View all insights <span aria-hidden="true">↗</span></a></div>
			<div class="zx-insight-grid">
				<?php
					$default_insights = array(
						array( 'title' => 'Packaging insight in preparation', 'copy' => 'A practical note for teams comparing packaging formats, materials and market requirements.' ),
						array( 'title' => 'Product and material note in preparation', 'copy' => 'A focused comparison will be added as the next project brief is approved.' ),
						array( 'title' => 'Market packaging note in preparation', 'copy' => 'Useful context for the next packaging conversation is being prepared.' ),
					);
					foreach ( $default_insights as $index => $insight ) :
						$source_post = $insights[ $index ] ?? null;
						$insight_title = $source_post ? get_the_title( $source_post ) : $insight['title'];
						$insight_copy = $source_post ? wp_trim_words( wp_strip_all_tags( get_the_excerpt( $source_post ) ), 22 ) : $insight['copy'];
						$insight_url  = $source_post ? get_permalink( $source_post ) : $news_url;
						$insight_image = $source_post ? get_the_post_thumbnail_url( $source_post, 'medium_large' ) : '';
						?><article data-insight-source="<?php echo esc_attr( $source_post ? 'post' : 'preview' ); ?>">
							<div class="zx-insight__media">
								<?php if ( $insight_image ) : ?>
									<img src="<?php echo esc_url( $insight_image ); ?>" alt="<?php echo esc_attr( $insight_title ); ?>" loading="lazy" width="768" height="432">
								<?php elseif ( $source_post ) : ?>
									<span class="zx-insight__media-placeholder">Article image pending</span>
								<?php else : ?>
									<span class="zx-insight__media-placeholder">Preview / Coming soon</span>
								<?php endif; ?>
							</div>
							<div class="zx-insight__body"><span class="zx-insight__index">0<?php echo esc_html( $index + 1 ); ?></span><h3><a href="<?php echo esc_url( $insight_url ); ?>"><?php echo esc_html( $insight_title ); ?></a></h3><p><?php echo esc_html( $insight_copy ); ?></p><a class="zx-inline-link" href="<?php echo esc_url( $insight_url ); ?>"><?php echo esc_html( $source_post ? 'Read article' : 'Coming soon' ); ?> <span aria-hidden="true">↗</span></a></div>
						</article><?php
				endforeach;
				?>
			</div>
		</div>
	</section>

	<section class="zx-final-cta" aria-labelledby="zx-final-cta-title"><div class="zomeex-container"><h2 id="zx-final-cta-title">Have the product. Need the right pack?</h2><a class="zx-button zx-button--light" href="<?php echo esc_url( $quote_url ); ?>">Start a focused quote <span aria-hidden="true">↗</span></a></div></section>
</main>
<?php get_footer(); ?>
