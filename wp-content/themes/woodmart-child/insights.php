<?php
/**
 * ZOMEEX insights index. Existing WordPress posts remain the content source.
 */
defined( 'ABSPATH' ) || exit;

$page_url = zomeex_page_url( 'news', '/news/' );
$paged    = max( 1, absint( get_query_var( 'paged' ) ?: get_query_var( 'page' ) ) );
$query    = new WP_Query(
	array(
		'post_type'      => 'post',
		'post_status'    => 'publish',
		'posts_per_page' => 9,
		'paged'          => $paged,
		'orderby'        => 'date',
		'order'          => 'DESC',
	)
);
$categories = get_categories( array( 'hide_empty' => true ) );

get_header();
?>
<main class="zomeex-content zomeex-insights-page" id="main-content">
	<section class="zomeex-content-masthead">
		<div class="zomeex-container">
			<p class="zomeex-kicker">Insights</p>
			<h1>Product, technology and manufacturing notes.</h1>
			<p>Practical context for teams comparing vape hardware, packaging formats and OEM/ODM routes.</p>
		</div>
	</section>

	<section class="zomeex-container zomeex-insights-page__body" aria-label="Insights archive">
		<?php if ( $categories ) : ?>
			<nav class="zomeex-content-filters" aria-label="Insight categories">
				<a class="is-active" href="<?php echo esc_url( $page_url ); ?>">All notes</a>
				<?php foreach ( $categories as $category ) : ?><a href="<?php echo esc_url( get_category_link( $category ) ); ?>"><?php echo esc_html( $category->name ); ?></a><?php endforeach; ?>
			</nav>
		<?php endif; ?>

		<?php if ( $query->have_posts() ) : ?>
			<div class="zomeex-insights-page__grid">
				<?php while ( $query->have_posts() ) : $query->the_post(); ?>
					<?php
					$post_id   = get_the_ID();
					$image_url = get_the_post_thumbnail_url( $post_id, 'large' );
					$terms     = get_the_category( $post_id );
					$excerpt   = zomeex_trim_text( get_the_excerpt( $post_id ), 180 );
					?>
					<article class="zomeex-insight-entry">
						<a class="zomeex-insight-entry__media" href="<?php the_permalink(); ?>">
							<?php if ( $image_url ) : ?><img src="<?php echo esc_url( $image_url ); ?>" alt="<?php echo esc_attr( get_the_title() ); ?>" loading="lazy" width="1300" height="731">
							<?php else : ?><span class="zomeex-insight-entry__placeholder">Article image pending</span><?php endif; ?>
						</a>
						<div class="zomeex-insight-entry__content">
							<p class="zomeex-insight-entry__meta"><?php echo esc_html( get_the_date( 'M Y' ) ); ?><?php if ( $terms ) : ?><span aria-hidden="true"> / </span><?php echo esc_html( $terms[0]->name ); ?><?php endif; ?></p>
							<h2><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
							<p><?php echo esc_html( $excerpt ?: 'This note is being refreshed with clearer product and market context.' ); ?></p>
							<a class="zomeex-text-link" href="<?php the_permalink(); ?>">Read note <span aria-hidden="true">↗</span></a>
						</div>
					</article>
				<?php endwhile; wp_reset_postdata(); ?>
			</div>
			<?php
			$pagination = paginate_links(
				array(
					'total'     => $query->max_num_pages,
					'current'   => $paged,
					'format'    => '?paged=%#%',
					'base'      => add_query_arg( 'paged', '%#%', $page_url ),
					'prev_text' => '← Previous',
					'next_text' => 'Next →',
					'type'      => 'list',
				)
			);
			if ( $pagination ) :
			?>
			<nav class="zomeex-content-pagination" aria-label="Insights pages"><?php echo wp_kses_post( $pagination ); ?></nav>
			<?php endif; ?>
		<?php else : ?>
			<div class="zomeex-content-empty"><h2>Insights are being prepared.</h2><p>Browse the product directory while the next product and manufacturing note is prepared.</p><a class="zomeex-button zomeex-button--solid" href="<?php echo esc_url( zomeex_home_url( '/shop/' ) ); ?>">Browse products <span aria-hidden="true">↗</span></a></div>
		<?php endif; ?>
	</section>
</main>
<?php get_footer(); ?>
