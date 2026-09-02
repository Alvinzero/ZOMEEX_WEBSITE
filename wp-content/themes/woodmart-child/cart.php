<?php
/** Shared cart route for installs where WooCommerce cart pages are not assigned yet. */
defined( 'ABSPATH' ) || exit;

get_header();
?>
<main class="zomeex-commerce-page" id="main-content">
	<div class="zomeex-container zomeex-commerce-page__inner">
		<p class="zomeex-kicker">Shopping cart</p>
		<h1>Cart</h1>
		<p class="zomeex-commerce-page__lede">Review selected items before continuing with the standard WooCommerce flow.</p>
		<?php echo do_shortcode( '[woocommerce_cart]' ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
	</div>
</main>
<?php get_footer(); ?>
