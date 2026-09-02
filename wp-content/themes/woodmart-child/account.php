<?php
/** Shared account route for installs where WooCommerce account pages are not assigned yet. */
defined( 'ABSPATH' ) || exit;

get_header();
?>
<main class="zomeex-commerce-page" id="main-content">
	<div class="zomeex-container zomeex-commerce-page__inner">
		<p class="zomeex-kicker">Customer account</p>
		<h1>Account</h1>
		<p class="zomeex-commerce-page__lede">Sign in to review your account details and order history.</p>
		<?php echo do_shortcode( '[woocommerce_my_account]' ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
	</div>
</main>
<?php get_footer(); ?>
