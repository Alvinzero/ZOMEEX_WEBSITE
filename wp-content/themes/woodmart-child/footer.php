<?php
/** Global footer for the modern ZOMEEX routes. */
if ( ! zomeex_is_modern_route() ) {
	include get_template_directory() . '/footer.php';
	return;
}

$shop_url = function_exists( 'wc_get_page_permalink' ) ? wc_get_page_permalink( 'shop' ) : zomeex_home_url( '/shop/' );
$news_url = zomeex_page_url( 'news', '/news/' );
$about_url = zomeex_page_url( 'about-us-3', '/about-us-3/' );
$contact_url = zomeex_page_url( 'contact-us', '/contact-us/' );
$faq_url = function_exists( 'zomeex_faq_url' ) ? zomeex_faq_url() : zomeex_home_url( '/faq/' );
?>
		<footer class="zomeex-footer">
			<div class="zomeex-container zomeex-footer__grid">
				<div class="zomeex-footer__brand"><a class="zomeex-footer__logo" href="<?php echo esc_url( zomeex_home_url() ); ?>" aria-label="ZOMEEX home"><img src="<?php echo esc_url( zomeex_upload_url( 'zomeex-logo_03.svg', '2026/05' ) ); ?>" alt="ZOMEEX" width="260" height="65"></a><p>Custom cannabis packaging, vape hardware and OEM/ODM support for teams building for a defined market.</p><div class="zomeex-footer__badges"><span>CPSC</span><span>ASTM</span><span>FSC</span></div><div class="zomeex-footer__social"><a href="<?php echo esc_url( $contact_url ); ?>" aria-label="Contact ZOMEEX">in</a><a href="<?php echo esc_url( $contact_url ); ?>" aria-label="WhatsApp ZOMEEX">wa</a></div></div>
				<div><h2 class="zomeex-footer__label">Products</h2><a href="<?php echo esc_url( $shop_url ); ?>">Mylar bags &amp; pouches</a><a href="<?php echo esc_url( $shop_url ); ?>">Paper &amp; rigid boxes</a><a href="<?php echo esc_url( $shop_url ); ?>">Glass jars &amp; containers</a><a href="<?php echo esc_url( $shop_url ); ?>">Pre-roll packaging</a><a href="<?php echo esc_url( $shop_url ); ?>">Displays &amp; merch</a></div>
				<div><h2 class="zomeex-footer__label">Resources</h2><a href="<?php echo esc_url( $news_url ); ?>">Packaging blog</a><a href="<?php echo esc_url( $news_url ); ?>#child-resistant">CR laws &amp; regulations</a><a href="<?php echo esc_url( $faq_url ); ?>">Packaging FAQ</a><a href="<?php echo esc_url( $about_url ); ?>#factory-tour">Factory tour</a><a href="<?php echo esc_url( $contact_url ); ?>">Contact the team</a></div>
				<div class="zomeex-footer__contact"><h2 class="zomeex-footer__label">Talk to sales</h2><a href="mailto:info@zomeeco.com">info@zomeeco.com</a><a href="tel:+8613691935217">+86 136 9193 5217</a><p>5th Floor, Fifth Zone, Ganghuaxing Industry Park, No. 118 YongFu Road, Shenzhen, China</p><p>Mon-Fri / 09:00-18:00 CST</p><a class="zomeex-footer__quote" href="<?php echo esc_url( zomeex_quote_url() ); ?>">Start a quote <span aria-hidden="true">↗</span></a></div>
			</div>
			<div class="zomeex-container zomeex-footer__base"><span>&copy; <?php echo esc_html( gmdate( 'Y' ) ); ?> ZOMEEX. All rights reserved.</span><span>Demo claims and legacy contact data must be verified before production launch.</span></div>
		</footer>
	</div>
	<?php do_action( 'woodmart_before_wp_footer' ); ?>
	<?php wp_footer(); ?>
</body>
</html>
