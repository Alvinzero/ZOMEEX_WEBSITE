<?php
/**
 * ZOMEEX insight detail template.
 */
defined( 'ABSPATH' ) || exit;

$terms     = get_the_category();
$image_url = get_the_post_thumbnail_url( get_the_ID(), 'large' );
$excerpt   = zomeex_trim_text( get_the_excerpt(), 180 );
$insight_url = zomeex_page_url( 'news', '/news/' );

get_header();
?>
<main class="zomeex-content zomeex-insight-detail" id="main-content">
	<div class="zomeex-container">
		<nav class="zomeex-breadcrumbs" aria-label="Breadcrumb"><a href="<?php echo esc_url( zomeex_home_url( '/' ) ); ?>">Home</a><span aria-hidden="true">/</span><a href="<?php echo esc_url( $insight_url ); ?>">Insights</a><span aria-hidden="true">/</span><span aria-current="page"><?php the_title(); ?></span></nav>
		<header class="zomeex-insight-detail__header">
			<p class="zomeex-kicker"><?php echo esc_html( $terms ? $terms[0]->name : 'Product note' ); ?></p>
			<h1><?php the_title(); ?></h1>
			<p class="zomeex-insight-detail__meta"><?php echo esc_html( get_the_date( 'F j, Y' ) ); ?><?php if ( get_the_author() ) : ?><span aria-hidden="true"> / </span><?php echo esc_html( get_the_author() ); ?><?php endif; ?></p>
			<?php if ( $excerpt ) : ?><p class="zomeex-insight-detail__excerpt"><?php echo esc_html( $excerpt ); ?></p><?php endif; ?>
		</header>
		<?php if ( $image_url ) : ?><figure class="zomeex-insight-detail__hero"><img src="<?php echo esc_url( $image_url ); ?>" alt="<?php echo esc_attr( get_the_title() ); ?>" fetchpriority="high" width="1300" height="731"></figure><?php endif; ?>
		<div class="zomeex-insight-detail__layout">
			<article class="zomeex-insight-detail__body">
				<?php if ( trim( get_the_content() ) ) : ?><?php the_content(); ?><?php else : ?><p>This note is being refreshed with clearer product and market context. Contact the team if you need a specification review for a current project.</p><?php endif; ?>
			</article>
			<aside class="zomeex-insight-detail__aside"><p class="zomeex-kicker">Continue the brief</p><h2>Need a product route for your market?</h2><p>Save a product shortlist or tell us the target format, market and expected volume.</p><a class="zomeex-button zomeex-button--solid" href="<?php echo esc_url( zomeex_quote_url() ); ?>">Start a quote <span aria-hidden="true">↗</span></a></aside>
		</div>
	</div>
</main>
<?php get_footer(); ?>
