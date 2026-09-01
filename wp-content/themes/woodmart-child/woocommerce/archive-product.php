<?php
/**
 * ZOMEEX product directory.
 *
 * The catalogue is intentionally quote-led: WooCommerce owns the product
 * records, while this template keeps pricing and commercial terms out until
 * sales confirms them for a target market.
 */
defined( 'ABSPATH' ) || exit;

$shop_url      = function_exists( 'wc_get_page_permalink' ) ? wc_get_page_permalink( 'shop' ) : zomeex_home_url( '/shop/' );
$quote_url     = zomeex_quote_url();
$portals       = zomeex_product_portals();
$current_term  = is_product_category() ? get_queried_object() : null;
$portal_key    = sanitize_key( wp_unslash( $_GET['portal'] ?? '' ) );
$search_term   = sanitize_text_field( wp_unslash( $_GET['s'] ?? '' ) );
$sort          = sanitize_key( wp_unslash( $_GET['sort'] ?? 'latest' ) );
$allowed_sorts = array(
	'latest' => array( 'label' => 'Latest', 'orderby' => 'date', 'order' => 'DESC' ),
	'name'   => array( 'label' => 'Name A-Z', 'orderby' => 'title', 'order' => 'ASC' ),
	'oldest' => array( 'label' => 'Oldest', 'orderby' => 'date', 'order' => 'ASC' ),
);

if ( ! isset( $allowed_sorts[ $sort ] ) ) {
	$sort = 'latest';
}

$tax_query = array();
if ( $current_term && ! is_wp_error( $current_term ) ) {
	$tax_query[] = array(
		'taxonomy'         => 'product_cat',
		'field'            => 'term_id',
		'terms'            => (int) $current_term->term_id,
		'include_children' => true,
	);
} elseif ( isset( $portals[ $portal_key ] ) && 'boost' !== $portal_key ) {
	$portal_slugs = array_filter(
		array_map(
			function ( $child ) {
				return sanitize_title( $child['slug'] );
			},
			$portals[ $portal_key ]['children']
		)
	);
	if ( $portal_slugs ) {
		$tax_query[] = array(
			'taxonomy' => 'product_cat',
			'field'    => 'slug',
			'terms'    => $portal_slugs,
			'operator' => 'IN',
		);
	}
}

$catalog_args = array(
	'post_type'      => 'product',
	'post_status'    => 'publish',
	'posts_per_page' => 12,
	'paged'          => max( 1, absint( get_query_var( 'paged' ) ?: get_query_var( 'page' ) ) ),
	'orderby'        => $allowed_sorts[ $sort ]['orderby'],
	'order'          => $allowed_sorts[ $sort ]['order'],
	's'              => $search_term,
);

if ( $tax_query ) {
	$catalog_args['tax_query'] = $tax_query;
}

$catalog_query = new WP_Query( $catalog_args );

$active_label = 'All products';
if ( $current_term && ! is_wp_error( $current_term ) ) {
	$active_label = $current_term->name;
} elseif ( isset( $portals[ $portal_key ] ) ) {
	$active_label = $portals[ $portal_key ]['name'];
}

$subcategories = array();
if ( $current_term && ! is_wp_error( $current_term ) ) {
	$subcategories = get_terms( array( 'taxonomy' => 'product_cat', 'parent' => (int) $current_term->term_id, 'hide_empty' => true ) );
} elseif ( isset( $portals[ $portal_key ] ) ) {
	foreach ( $portals[ $portal_key ]['children'] as $child ) {
		$term = get_term_by( 'slug', sanitize_title( $child['slug'] ), 'product_cat' );
		if ( $term && ! is_wp_error( $term ) && $term->count > 0 ) {
			$subcategories[] = $term;
		}
	}
}

$build_url = function ( $overrides = array() ) use ( $shop_url, $portal_key, $search_term, $sort, $current_term ) {
	$args = array_filter(
		array_merge(
			array(
				'portal' => $portal_key,
				's'      => $search_term,
				'sort'   => $sort,
			),
			$overrides
		),
		function ( $value ) {
			return '' !== (string) $value;
		}
	);
	$base = $current_term && ! is_wp_error( $current_term ) ? get_term_link( $current_term ) : $shop_url;
	return add_query_arg( $args, $base );
};

get_header();
?>
<main class="zomeex-catalog" id="main-content">
	<section class="zomeex-catalog__masthead">
		<div class="zomeex-container zomeex-catalog__masthead-inner">
			<div>
				<p class="zomeex-kicker">Product directory / <?php echo esc_html( $active_label ); ?></p>
				<h1><?php echo $search_term ? esc_html( sprintf( 'Results for "%s"', $search_term ) ) : esc_html( $active_label ); ?></h1>
				<p class="zomeex-catalog__lede">A clear starting point for hardware, packaging, and equipment briefs. Commercial terms are confirmed against your market and volume.</p>
			</div>
			<a class="zomeex-button zomeex-button--solid" href="<?php echo esc_url( $quote_url ); ?>"><span data-quote-count hidden>0</span>Open quote list <span aria-hidden="true">↗</span></a>
		</div>
	</section>

	<section class="zomeex-catalog__body zomeex-container" aria-label="Product directory">
		<div class="zomeex-catalog__toolbar">
			<nav class="zomeex-catalog__portals" aria-label="Product portals">
				<a class="<?php echo ! $portal_key && ! $current_term ? 'is-active' : ''; ?>" href="<?php echo esc_url( $shop_url ); ?>">All products</a>
				<?php foreach ( $portals as $key => $portal ) : ?>
					<?php $portal_href = 'boost' === $key ? zomeex_page_url( 'contact-us', '/contact-us/' ) : $build_url( array( 'portal' => $key, 'paged' => '' ) ); ?>
					<a class="<?php echo $portal_key === $key ? 'is-active' : ''; ?>" href="<?php echo esc_url( $portal_href ); ?>"><?php echo esc_html( $portal['name'] ); ?></a>
				<?php endforeach; ?>
			</nav>
			<form class="zomeex-catalog__filters" method="get" action="<?php echo esc_url( $shop_url ); ?>">
				<?php if ( $portal_key ) : ?><input type="hidden" name="portal" value="<?php echo esc_attr( $portal_key ); ?>"><?php endif; ?>
				<label class="zomeex-field zomeex-field--search"><span class="screen-reader-text">Search products</span><input type="search" name="s" value="<?php echo esc_attr( $search_term ); ?>" placeholder="Search products" autocomplete="off"><span aria-hidden="true">⌕</span></label>
				<label class="zomeex-field"><span class="screen-reader-text">Sort products</span><select name="sort" aria-label="Sort products"><?php foreach ( $allowed_sorts as $sort_key => $sort_option ) : ?><option value="<?php echo esc_attr( $sort_key ); ?>" <?php selected( $sort, $sort_key ); ?>><?php echo esc_html( $sort_option['label'] ); ?></option><?php endforeach; ?></select></label>
				<button class="zomeex-button zomeex-button--small" type="submit">Apply <span aria-hidden="true">↗</span></button>
			</form>
		</div>

		<?php if ( $subcategories ) : ?>
			<div class="zomeex-catalog__subcategories" aria-label="Subcategories">
				<span>Filter by series</span>
				<?php foreach ( $subcategories as $subcategory ) : ?><a href="<?php echo esc_url( get_term_link( $subcategory ) ); ?>"><?php echo esc_html( $subcategory->name ); ?><small><?php echo esc_html( $subcategory->count ); ?></small></a><?php endforeach; ?>
			</div>
		<?php endif; ?>

		<div class="zomeex-catalog__summary"><p><strong><?php echo esc_html( number_format_i18n( (int) $catalog_query->found_posts ) ); ?></strong> products</p><p><?php echo esc_html( $allowed_sorts[ $sort ]['label'] ); ?> <span aria-hidden="true">·</span> Quote on request</p></div>

		<?php if ( 'boost' === $portal_key ) : ?>
			<div class="zomeex-catalog__empty"><p class="zomeex-kicker">BOOST / support path</p><h2>Bring the brief, and we will map the build.</h2><p>Share target market, quantity, packaging and equipment needs. Our team will recommend the right product route and next step.</p><a class="zomeex-button zomeex-button--solid" href="<?php echo esc_url( zomeex_page_url( 'contact-us', '/contact-us/' ) ); ?>">Talk to the team <span aria-hidden="true">↗</span></a></div>
		<?php elseif ( $catalog_query->have_posts() ) : ?>
			<div class="zomeex-catalog__grid">
				<?php while ( $catalog_query->have_posts() ) : $catalog_query->the_post(); ?>
					<?php
					$product       = function_exists( 'wc_get_product' ) ? wc_get_product( get_the_ID() ) : null;
					$sku           = $product ? $product->get_sku() : '';
					$image_id      = get_post_thumbnail_id( get_the_ID() );
					$image_url     = $image_id ? wp_get_attachment_image_url( $image_id, 'woocommerce_single' ) : '';
					$category_list = function_exists( 'wc_get_product_category_list' ) ? wp_strip_all_tags( wc_get_product_category_list( get_the_ID() ) ) : 'Product system';
					?>
					<article class="zomeex-catalog-card">
						<a class="zomeex-catalog-card__media" href="<?php the_permalink(); ?>">
							<?php if ( $image_url ) : ?><img src="<?php echo esc_url( $image_url ); ?>" alt="<?php the_title_attribute(); ?>" loading="lazy" width="700" height="700"><?php else : ?><span class="zomeex-catalog-card__placeholder">Image pending</span><?php endif; ?>
						</a>
						<div class="zomeex-catalog-card__content"><p class="zomeex-catalog-card__eyebrow"><?php echo esc_html( $category_list ); ?></p><h2><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2><p class="zomeex-catalog-card__sku"><?php echo $sku ? esc_html( 'SKU ' . $sku ) : 'SKU to confirm'; ?></p><div class="zomeex-catalog-card__actions"><a class="zomeex-text-link" href="<?php the_permalink(); ?>">View details <span aria-hidden="true">↗</span></a><button class="zomeex-quote-add" type="button" data-quote-add data-product-id="<?php echo esc_attr( get_the_ID() ); ?>" data-product-title="<?php echo esc_attr( get_the_title() ); ?>" data-product-url="<?php echo esc_url( get_permalink() ); ?>" data-product-image="<?php echo esc_url( $image_url ); ?>" data-product-sku="<?php echo esc_attr( $sku ); ?>"><span aria-hidden="true">+</span><span data-quote-label>Add to quote</span></button></div></div>
					</article>
				<?php endwhile; wp_reset_postdata(); ?>
			</div>
			<?php
			$pagination = paginate_links(
				array(
					'total'     => $catalog_query->max_num_pages,
					'current'   => max( 1, $catalog_query->get( 'paged' ) ),
					'format'    => '?paged=%#%',
					'base'      => add_query_arg( 'paged', '%#%', $build_url( array( 'paged' => '' ) ) ),
					'add_args'  => array_filter( array( 'portal' => $portal_key, 's' => $search_term, 'sort' => $sort ) ),
					'prev_text' => '← Previous',
					'next_text' => 'Next →',
					'type'      => 'list',
				)
			);
			if ( $pagination ) :
			?>
			<nav class="zomeex-catalog__pagination" aria-label="Product pages"><?php echo wp_kses_post( $pagination ); ?></nav>
			<?php endif; ?>
		<?php else : ?>
			<div class="zomeex-catalog__empty"><p class="zomeex-kicker">No matching products</p><h2>Try another term or start with a portal.</h2><p>We can also scope a product that is not yet listed. Share the format, market and volume with the team.</p><div class="zomeex-actions"><a class="zomeex-button zomeex-button--solid" href="<?php echo esc_url( $shop_url ); ?>">Reset directory <span aria-hidden="true">↗</span></a><a class="zomeex-button" href="<?php echo esc_url( $quote_url ); ?>">Start a quote <span aria-hidden="true">↗</span></a></div></div>
		<?php endif; ?>
	</section>
	<div class="zomeex-quote-feedback" data-quote-feedback hidden role="status" aria-live="polite"></div>
</main>
<?php get_footer(); ?>
