<?php
/**
 * ZOMEEX insights index. WordPress posts remain the source of article content.
 */
defined( 'ABSPATH' ) || exit;

$page_url = zomeex_page_url( 'news', '/news/' );
$read_filter = static function ( $key ) {
	if ( ! isset( $_GET[ $key ] ) || is_array( $_GET[ $key ] ) ) {
		return '';
	}

	return sanitize_text_field( wp_unslash( $_GET[ $key ] ) );
};

$read_filter_list = static function ( $key ) {
	if ( ! isset( $_GET[ $key ] ) ) {
		return array();
	}

	$raw_values = is_array( $_GET[ $key ] ) ? $_GET[ $key ] : array( $_GET[ $key ] );
	$values     = array();

	foreach ( $raw_values as $raw_value ) {
		if ( ! is_scalar( $raw_value ) ) {
			continue;
		}

		$value = sanitize_title( wp_unslash( $raw_value ) );
		if ( $value ) {
			$values[] = $value;
		}
	}

	return array_values( array_unique( $values ) );
};

$search_term  = $read_filter( 'insight_search' );
$topic_slugs  = $read_filter_list( 'insight_topic' );
$product_slugs = $read_filter_list( 'insight_product' );
$period       = sanitize_key( $read_filter( 'insight_period' ) );
$sort         = sanitize_key( $read_filter( 'insight_sort' ) );
$topic_terms   = array();
$product_terms = array();

foreach ( $topic_slugs as $topic_slug ) {
	$topic_term = get_category_by_slug( $topic_slug );
	if ( $topic_term ) {
		$topic_terms[] = $topic_term;
	} else {
		$topic_slugs = array_diff( $topic_slugs, array( $topic_slug ) );
	}
}

foreach ( $product_slugs as $product_slug ) {
	$product_term = get_term_by( 'slug', $product_slug, 'post_tag' );
	if ( $product_term && ! is_wp_error( $product_term ) ) {
		$product_terms[] = $product_term;
	} else {
		$product_slugs = array_diff( $product_slugs, array( $product_slug ) );
	}
}

$period_days = array(
	'30d'  => 30,
	'90d'  => 90,
	'180d' => 180,
);

if ( ! isset( $period_days[ $period ] ) ) {
	$period = '';
}

if ( ! in_array( $sort, array( 'newest', 'oldest', 'title' ), true ) ) {
	$sort = 'newest';
}

$sort_query = array(
	'orderby' => 'date',
	'order'   => 'DESC',
);

if ( 'oldest' === $sort ) {
	$sort_query['order'] = 'ASC';
} elseif ( 'title' === $sort ) {
	$sort_query = array(
		'orderby' => 'title',
		'order'   => 'ASC',
	);
}

$active_args = array_filter(
	array(
		'insight_search' => $search_term,
		'insight_topic'   => $topic_slugs,
		'insight_product' => $product_slugs,
		'insight_period'  => $period,
		'insight_sort'    => 'newest' === $sort ? '' : $sort,
	),
	static function ( $value ) {
		return '' !== $value && array() !== $value;
	}
);
$has_active_filters = ! empty( $active_args );

$topics = get_categories(
	array(
		'hide_empty' => true,
		'exclude'    => array( (int) get_option( 'default_category' ) ),
		'orderby'    => 'count',
		'order'      => 'DESC',
	)
);
$product_tags = get_tags(
	array(
		'hide_empty' => true,
		'orderby'    => 'count',
		'order'      => 'DESC',
		'number'     => 8,
	)
);
$product_tags = array_values(
	array_filter(
		$product_tags,
		static function ( $tag ) {
			return 'news' !== $tag->slug;
		}
	)
);

$paged = max( 1, absint( get_query_var( 'paged' ) ?: get_query_var( 'page' ) ) );
$query_args = array_merge(
	array(
		'post_type'           => 'post',
		'post_status'         => 'publish',
		'posts_per_page'      => 6,
		'paged'               => $paged,
		'ignore_sticky_posts' => true,
	),
	$sort_query
);

if ( $search_term ) {
	$query_args['s'] = $search_term;
}

if ( $topic_terms ) {
	$query_args['category__in'] = wp_list_pluck( $topic_terms, 'term_id' );
}

if ( $product_terms ) {
	$query_args['tag__in'] = wp_list_pluck( $product_terms, 'term_id' );
}

if ( $period ) {
	$query_args['date_query'] = array(
		array(
			'after'     => date_i18n( 'Y-m-d', current_time( 'timestamp' ) - ( $period_days[ $period ] * DAY_IN_SECONDS ) ),
			'inclusive' => true,
		),
	);
}

$published_posts = wp_count_posts( 'post' );
$show_featured   = ! $has_active_filters && isset( $published_posts->publish ) && (int) $published_posts->publish > 3;
$featured_posts  = $show_featured
	? get_posts(
		array(
			'post_type'           => 'post',
			'post_status'         => 'publish',
			'posts_per_page'      => 3,
			'orderby'             => 'date',
			'order'               => 'DESC',
			'ignore_sticky_posts' => true,
		)
	)
	: array();

if ( $featured_posts ) {
	$query_args['post__not_in'] = array_map( 'absint', wp_list_pluck( $featured_posts, 'ID' ) );
}

$query = new WP_Query( $query_args );

$render_article_card = static function ( $post_id, $featured = false, $prioritize_image = false ) use ( $page_url, $active_args ) {
	ob_start();
	$post_id       = absint( $post_id );
	$title         = get_the_title( $post_id );
	$permalink     = get_permalink( $post_id );
	$excerpt       = wp_trim_words( get_the_excerpt( $post_id ), $featured ? 27 : 32, '…' );
	$categories    = get_the_category( $post_id );
	$article_topic = $categories ? $categories[0] : false;
	$tags          = get_the_tags( $post_id );
	$product_tag   = false;

	if ( $tags && ! is_wp_error( $tags ) ) {
		foreach ( $tags as $tag ) {
			if ( 'news' !== $tag->slug ) {
				$product_tag = $tag;
				break;
			}
		}
	}

	$thumbnail_id = get_post_thumbnail_id( $post_id );
	$image_alt    = $thumbnail_id ? get_post_meta( $thumbnail_id, '_wp_attachment_image_alt', true ) : '';
	$image_html   = '';

	if ( $thumbnail_id ) {
		$image_html = wp_get_attachment_image(
			$thumbnail_id,
			'large',
			false,
			array(
				'alt'           => $image_alt ? $image_alt : $title,
				'loading'       => $prioritize_image ? 'eager' : 'lazy',
				'fetchpriority' => $prioritize_image ? 'high' : 'auto',
				'decoding'      => 'async',
			)
		);
	}

	$word_count  = str_word_count( wp_strip_all_tags( get_post_field( 'post_content', $post_id ) ) );
	$read_minutes = max( 1, (int) ceil( $word_count / 220 ) );
	$card_class   = $featured ? 'zomeex-insight-card zomeex-insight-card--featured' : 'zomeex-insight-card';
	$topic_args   = array_merge( $active_args, array( 'insight_topic' => $article_topic ? $article_topic->slug : '' ) );
	$product_args = array_merge( $active_args, array( 'insight_product' => $product_tag ? $product_tag->slug : '' ) );
	$topic_url    = $article_topic ? add_query_arg( $topic_args, $page_url ) : '';
	$product_url  = $product_tag ? add_query_arg( $product_args, $page_url ) : '';
	$author_id    = (int) get_post_field( 'post_author', $post_id );
	$author_name  = $author_id ? get_the_author_meta( 'display_name', $author_id ) : '';
	$author_name  = $author_name ? $author_name : 'ZOMEEX team';
	?>
	<article class="<?php echo esc_attr( $card_class ); ?>">
		<a class="zomeex-insight-card__media" href="<?php echo esc_url( $permalink ); ?>" tabindex="0">
			<?php if ( $image_html ) : ?><?php echo wp_kses_post( $image_html ); ?><?php else : ?><span class="zomeex-insight-card__placeholder">Article image pending</span><?php endif; ?>
		</a>
		<div class="zomeex-insight-card__body">
			<div class="zomeex-insight-card__badges">
				<?php if ( $article_topic ) : ?><a class="zomeex-insight-card__badge" href="<?php echo esc_url( $topic_url ); ?>"><?php echo esc_html( $article_topic->name ); ?></a><?php endif; ?>
				<?php if ( $product_tag ) : ?><a class="zomeex-insight-card__badge zomeex-insight-card__badge--product" href="<?php echo esc_url( $product_url ); ?>"><?php echo esc_html( $product_tag->name ); ?></a><?php endif; ?>
			</div>
			<p class="zomeex-insight-card__meta"><time datetime="<?php echo esc_attr( get_the_date( 'c', $post_id ) ); ?>"><?php echo esc_html( get_the_date( 'M j, Y', $post_id ) ); ?></time><span aria-hidden="true">·</span><?php echo esc_html( sprintf( _n( '%d min read', '%d min read', $read_minutes, 'woodmart' ), $read_minutes ) ); ?></p>
			<h3><a href="<?php echo esc_url( $permalink ); ?>"><?php echo esc_html( $title ); ?></a></h3>
			<?php if ( $excerpt ) : ?><p class="zomeex-insight-card__excerpt"><?php echo esc_html( $excerpt ); ?></p><?php endif; ?>
			<div class="zomeex-insight-card__footer">
				<span class="zomeex-insight-card__author"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><circle cx="12" cy="8" r="3.2"/><path d="M5.8 19.2c.8-3 2.8-4.6 6.2-4.6s5.4 1.6 6.2 4.6"/></svg><?php echo esc_html( $author_name ); ?></span>
				<a class="zomeex-insight-card__read" href="<?php echo esc_url( $permalink ); ?>">Read article <span aria-hidden="true">→</span></a>
			</div>
		</div>
	</article>
	<?php
	return ob_get_clean();
};

get_header();
?>
<main class="zomeex-content zomeex-insights-page" id="main-content">
	<header class="zomeex-insights-hero">
		<div class="zomeex-container zomeex-insights-hero__inner">
			<div class="zomeex-insights-hero__copy">
				<p class="zomeex-kicker">Resources &amp; Blog</p>
				<h1>Cannabis Packaging Insights, Compliance &amp; Design Guides</h1>
				<p>Practical notes for teams comparing packaging formats, materials, regulations and retail presentation.</p>
				<form class="zomeex-insights-search" role="search" method="get" action="<?php echo esc_url( $page_url ); ?>">
					<label class="screen-reader-text" for="zomeex-insight-search">Search articles</label>
					<input id="zomeex-insight-search" type="search" name="insight_search" value="<?php echo esc_attr( $search_term ); ?>" placeholder="Search articles, topics or keywords">
					<button type="submit" aria-label="Search articles" title="Search articles"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><circle cx="10.8" cy="10.8" r="6.6"/><path d="m16 16 4.2 4.2"/></svg></button>
				</form>
				<?php if ( $product_tags ) : ?>
					<nav class="zomeex-insights-hot-tags" aria-label="Popular article tags">
						<span>Popular searches</span>
						<?php foreach ( array_slice( $product_tags, 0, 5 ) as $tag ) : ?>
							<?php $tag_args = array( 'insight_product' => $tag->slug ); ?>
							<a href="<?php echo esc_url( add_query_arg( $tag_args, $page_url ) ); ?>"><span aria-hidden="true">#</span><?php echo esc_html( $tag->name ); ?></a>
						<?php endforeach; ?>
					</nav>
				<?php endif; ?>
			</div>
			<div class="zomeex-insights-hero__visual" aria-hidden="true"><img src="<?php echo esc_url( get_stylesheet_directory_uri() . '/assets/why-zomeex/why-landscape.webp' ); ?>" alt="" loading="eager" fetchpriority="high" decoding="async"></div>
		</div>
	</header>

	<?php if ( $topics ) : ?>
		<section class="zomeex-insights-topics" aria-labelledby="zomeex-insights-topics-title">
			<div class="zomeex-container">
				<div class="zomeex-insights-topics__head">
					<h2 id="zomeex-insights-topics-title">Explore by Topic</h2>
					<a href="<?php echo esc_url( $page_url ); ?>">View all articles</a>
				</div>
				<nav class="zomeex-insights-topics__list" aria-label="Article topics">
					<?php foreach ( $topics as $topic_index => $topic ) : ?>
						<?php $topic_args = array( 'insight_topic' => $topic->slug ); ?>
						<a href="<?php echo esc_url( add_query_arg( $topic_args, $page_url ) ); ?>">
							<span class="zomeex-insights-topics__icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.6 19 6v5.1c0 4.2-2.4 7.5-7 9.3-4.6-1.8-7-5.1-7-9.3V6l7-2.4Z"/><path d="m9.2 12 1.8 1.8 3.8-4"/></svg></span>
							<strong><?php echo esc_html( $topic->name ); ?></strong>
							<span><?php echo esc_html( sprintf( _n( '%s article', '%s articles', (int) $topic->count, 'woodmart' ), number_format_i18n( $topic->count ) ) ); ?></span>
						</a>
					<?php endforeach; ?>
				</nav>
			</div>
		</section>
	<?php endif; ?>

	<section class="zomeex-insights-archive" aria-label="Insights archive">
		<div class="zomeex-container zomeex-insights-archive__layout">
			<div class="zomeex-insights-archive__main">
				<?php if ( $featured_posts ) : ?>
					<section class="zomeex-insights-featured" aria-labelledby="zomeex-insights-featured-title">
						<header class="zomeex-insights-section-head">
							<div><h2 id="zomeex-insights-featured-title">Featured Articles</h2><p>Start with a recent note from the ZOMEEX team.</p></div>
						</header>
						<div class="zomeex-insights-featured__grid">
							<?php foreach ( $featured_posts as $index => $post ) : ?><?php echo $render_article_card( $post->ID, true, 0 === $index ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?><?php endforeach; ?>
						</div>
					</section>
				<?php endif; ?>

				<section class="zomeex-insights-latest" aria-labelledby="zomeex-insights-latest-title">
					<header class="zomeex-insights-section-head">
						<div>
							<h2 id="zomeex-insights-latest-title"><?php echo $has_active_filters ? 'Search Results' : 'Latest Articles'; ?></h2>
							<p><?php echo $has_active_filters ? 'Articles matching the filters you selected.' : 'Product updates, practical guides and industry notes.'; ?></p>
						</div>
						<?php if ( $query->have_posts() ) : ?><p class="zomeex-insights-result-count"><?php echo esc_html( sprintf( _n( '%s article', '%s articles', (int) $query->found_posts, 'woodmart' ), number_format_i18n( $query->found_posts ) ) ); ?></p><?php endif; ?>
					</header>

					<?php if ( $query->have_posts() ) : ?>
						<div class="zomeex-insights-latest__grid">
							<?php
							$card_index = 0;
							while ( $query->have_posts() ) :
								$query->the_post();
								echo $render_article_card( get_the_ID(), false, 0 === $card_index ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
								++$card_index;
							endwhile;
							wp_reset_postdata();
							?>
						</div>
						<?php
						$pagination = paginate_links(
							array(
								'total'     => $query->max_num_pages,
								'current'   => $paged,
								'base'      => add_query_arg( 'paged', '%#%', $page_url ),
								'add_args'  => $active_args,
								'prev_text' => 'Previous',
								'next_text' => 'Next',
								'type'      => 'list',
							)
						);
						if ( $pagination ) :
						?>
							<nav class="zomeex-content-pagination" aria-label="Insights pages"><?php echo wp_kses_post( $pagination ); ?></nav>
						<?php endif; ?>
					<?php else : ?>
						<div class="zomeex-content-empty zomeex-insights-empty">
							<h3>No articles match these filters.</h3>
							<p>Try a broader search or clear the filters to browse every published article.</p>
							<a class="zomeex-button zomeex-button--solid" href="<?php echo esc_url( $page_url ); ?>">Clear filters</a>
						</div>
					<?php endif; ?>
				</section>
			</div>

			<aside class="zomeex-insights-filters" aria-labelledby="zomeex-insights-filters-title">
				<form method="get" action="<?php echo esc_url( $page_url ); ?>">
					<?php if ( $search_term ) : ?><input type="hidden" name="insight_search" value="<?php echo esc_attr( $search_term ); ?>"><?php endif; ?>
					<div class="zomeex-insights-filters__head">
						<h2 id="zomeex-insights-filters-title">Filter by</h2>
						<a href="<?php echo esc_url( $page_url ); ?>">Clear all</a>
					</div>
					<fieldset>
						<legend>Topic</legend>
						<div class="zomeex-insights-filters__checks">
							<?php foreach ( $topics as $topic ) : ?>
								<label for="zomeex-insight-topic-<?php echo esc_attr( $topic->term_id ); ?>"><input id="zomeex-insight-topic-<?php echo esc_attr( $topic->term_id ); ?>" type="checkbox" name="insight_topic[]" value="<?php echo esc_attr( $topic->slug ); ?>" <?php checked( in_array( $topic->slug, $topic_slugs, true ), true ); ?>> <span><?php echo esc_html( $topic->name ); ?></span></label>
							<?php endforeach; ?>
						</div>
					</fieldset>
					<fieldset>
						<legend>Product type</legend>
						<div class="zomeex-insights-filters__checks">
							<?php foreach ( $product_tags as $tag ) : ?>
								<label for="zomeex-insight-product-<?php echo esc_attr( $tag->term_id ); ?>"><input id="zomeex-insight-product-<?php echo esc_attr( $tag->term_id ); ?>" type="checkbox" name="insight_product[]" value="<?php echo esc_attr( $tag->slug ); ?>" <?php checked( in_array( $tag->slug, $product_slugs, true ), true ); ?>> <span><?php echo esc_html( $tag->name ); ?></span></label>
							<?php endforeach; ?>
						</div>
					</fieldset>
					<fieldset>
						<legend>Date</legend>
						<div class="zomeex-insights-filters__checks">
							<label for="zomeex-insight-period-all"><input id="zomeex-insight-period-all" type="radio" name="insight_period" value="" <?php checked( $period, '' ); ?>> <span>All time</span></label>
							<label for="zomeex-insight-period-30"><input id="zomeex-insight-period-30" type="radio" name="insight_period" value="30d" <?php checked( $period, '30d' ); ?>> <span>Last 30 days</span></label>
							<label for="zomeex-insight-period-90"><input id="zomeex-insight-period-90" type="radio" name="insight_period" value="90d" <?php checked( $period, '90d' ); ?>> <span>Last 3 months</span></label>
							<label for="zomeex-insight-period-180"><input id="zomeex-insight-period-180" type="radio" name="insight_period" value="180d" <?php checked( $period, '180d' ); ?>> <span>Last 6 months</span></label>
						</div>
					</fieldset>
					<fieldset>
						<legend>Sort by</legend>
						<label class="screen-reader-text" for="zomeex-insight-sort">Sort articles</label>
						<select id="zomeex-insight-sort" name="insight_sort">
							<option value="newest" <?php selected( $sort, 'newest' ); ?>>Newest</option>
							<option value="oldest" <?php selected( $sort, 'oldest' ); ?>>Oldest</option>
							<option value="title" <?php selected( $sort, 'title' ); ?>>Title A–Z</option>
						</select>
					</fieldset>
					<button class="zomeex-insights-filters__submit" type="submit">Apply filters</button>
				</form>
			</aside>
		</div>
	</section>
</main>
<?php get_footer(); ?>
