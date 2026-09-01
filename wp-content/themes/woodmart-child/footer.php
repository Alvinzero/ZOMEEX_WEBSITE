<?php
/** Homepage footer; other routes use Woodmart's original footer. */
if ( ! zomeex_is_modern_route() ) {
	include get_template_directory() . '/footer.php';
	return;
}
?>
		<footer class="zomeex-footer">
			<div class="zomeex-container zomeex-footer__grid">
				<div><a class="zomeex-wordmark zomeex-wordmark--light" href="<?php echo esc_url( zomeex_home_url() ); ?>">ZOMEEX</a><p>Hardware, packaging, and OEM/ODM support for teams building the next version.</p></div>
				<div><p class="zomeex-footer__label">Explore</p><a href="<?php echo esc_url( zomeex_home_url( '/shop/' ) ); ?>">Products</a><a href="<?php echo esc_url( zomeex_page_url( 'about-us-3', '/about-us-3/' ) ); ?>">About</a><a href="<?php echo esc_url( zomeex_page_url( 'news', '/news/' ) ); ?>">Insights</a></div>
				<div><p class="zomeex-footer__label">Start a brief</p><p>Share your target market, product family, and quantity.</p><a class="zomeex-footer__link" href="<?php echo esc_url( zomeex_quote_url() ); ?>">Request a quote <span aria-hidden="true">↗</span></a></div>
			</div>
			<div class="zomeex-container zomeex-footer__base"><span>&copy; <?php echo esc_html( gmdate( 'Y' ) ); ?> ZOMEEX. All rights reserved.</span><span>Product information is subject to confirmation.</span></div>
		</footer>
	</div>
	<?php do_action( 'woodmart_before_wp_footer' ); ?>
	<?php wp_footer(); ?>
</body>
</html>
