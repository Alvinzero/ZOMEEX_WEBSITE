<?php
/**
 * Modern not-found surface for the redesigned catalogue routes.
 */
defined( 'ABSPATH' ) || exit;

get_header();
?>
<main class="zomeex-not-found" id="main-content">
	<section class="zomeex-not-found__masthead">
		<div class="zomeex-container">
			<p class="zomeex-kicker">Error 404 / route not found</p>
			<h1>Let us get you back to the right system.</h1>
			<p>The page may have moved, or the product route may need a fresh search. Browse the catalogue or send the team a project brief and we will help you find the right path.</p>
			<div class="zomeex-not-found__actions">
				<a class="zomeex-button zomeex-button--solid" href="<?php echo esc_url( zomeex_home_url( '/shop/' ) ); ?>">Browse products <span aria-hidden="true">↗</span></a>
				<a class="zomeex-text-link" href="<?php echo esc_url( zomeex_quote_url() ); ?>">Start a quote brief <span aria-hidden="true">↗</span></a>
			</div>
		</div>
	</section>
	<section class="zomeex-not-found__search">
		<div class="zomeex-container">
			<form role="search" method="get" action="<?php echo esc_url( zomeex_home_url( '/' ) ); ?>" class="zomeex-search-form zomeex-not-found__search-form">
				<label for="zomeex-not-found-search">Search products and insights</label>
				<div><input id="zomeex-not-found-search" type="search" name="s" placeholder="Search by product, SKU, or use" autocomplete="off"><button type="submit">Search <span aria-hidden="true">↗</span></button></div>
			</form>
		</div>
	</section>
</main>
<?php get_footer(); ?>
