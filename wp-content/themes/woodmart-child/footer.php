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

/* Social profiles — plain data so the markup stays readable. */
$socials = array(
	array(
		'name' => 'Facebook',
		'url'  => 'https://www.facebook.com/ZOMEECO',
		'icon' => '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>',
	),
	array(
		'name' => 'X',
		'url'  => 'https://x.com/zomeeco',
		'icon' => '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg>',
	),
	array(
		'name' => 'Instagram',
		'url'  => 'https://www.instagram.com/zomee.co/',
		'icon' => '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>',
	),
	array(
		'name' => 'Pinterest',
		'url'  => 'https://www.pinterest.com/zomeeco/',
		'icon' => '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.015-4.882-3.416 0-5.419 2.561-5.419 5.207 0 1.031.397 2.138.893 2.739.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/></svg>',
	),
	array(
		'name' => 'LinkedIn',
		'url'  => 'https://www.linkedin.com/company/zomeeco',
		'icon' => '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>',
	),
	array(
		'name' => 'TikTok',
		'url'  => 'https://www.tiktok.com/@zomeeco',
		'icon' => '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.57v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.37-.04 2.74-.01 4.12-.36-.05-.71-.11-1.07-.08-1.18.07-2.29.6-3.04 1.52-.83 1-1.25 2.39-1.02 3.73.34 2.06 2.48 3.68 4.57 3.42 1.18-.12 2.31-.78 2.93-1.8.4-.67.58-1.45.59-2.23.05-2.8.02-5.6.03-8.4 0-2.95 0-5.9-.01-8.85 0-.24.01-.47.01-.71z"/></svg>',
	),
);
?>
		<footer class="zomeex-footer">
			<div class="zomeex-container zomeex-footer__grid">
				<div class="zomeex-footer__brand"><a class="zomeex-footer__logo" href="<?php echo esc_url( zomeex_home_url() ); ?>" aria-label="ZOMEEX home"><img src="<?php echo esc_url( zomeex_upload_url( 'zomeex-logo_03.svg', '2026/05' ) ); ?>" alt="ZOMEEX" width="260" height="65"></a><p>Custom cannabis packaging, vape hardware and OEM/ODM support for teams building for a defined market.</p><div class="zomeex-footer__badges"><span>CPSC</span><span>ASTM</span><span>FSC</span></div><div class="zomeex-footer__social"><?php foreach ( $socials as $social ) : ?><a href="<?php echo esc_url( $social['url'] ); ?>" target="_blank" rel="noopener noreferrer" aria-label="<?php echo esc_attr( 'ZOMEEX on ' . $social['name'] ); ?>"><?php echo $social['icon']; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?></a><?php endforeach; ?></div></div>
				<div><h2 class="zomeex-footer__label">Products</h2><a href="<?php echo esc_url( $shop_url ); ?>">Mylar bags &amp; pouches</a><a href="<?php echo esc_url( $shop_url ); ?>">Paper &amp; rigid boxes</a><a href="<?php echo esc_url( $shop_url ); ?>">Glass jars &amp; containers</a><a href="<?php echo esc_url( $shop_url ); ?>">Pre-roll packaging</a><a href="<?php echo esc_url( $shop_url ); ?>">Displays &amp; merch</a></div>
				<div><h2 class="zomeex-footer__label">Resources</h2><a href="<?php echo esc_url( $news_url ); ?>">Packaging blog</a><a href="<?php echo esc_url( $news_url ); ?>#child-resistant">CR laws &amp; regulations</a><a href="<?php echo esc_url( $faq_url ); ?>">Packaging FAQ</a><a href="<?php echo esc_url( $about_url ); ?>#factory-tour">Factory tour</a><a href="<?php echo esc_url( $contact_url ); ?>">Contact the team</a></div>
				<div class="zomeex-footer__contact"><h2 class="zomeex-footer__label">Talk to sales</h2><a class="zomeex-footer__line" href="mailto:info@zomeeco.com"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm0 2v.4l8 5.2 8-5.2V6H4zm16 12V9.1l-7.4 4.8a2 2 0 0 1-2.2 0L4 9.1V18h16z"/></svg><span>info@zomeeco.com</span></a><a class="zomeex-footer__line" href="tel:+8613691935217"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.6 3h2.7a1 1 0 0 1 1 .8l.9 3.6a1 1 0 0 1-.4 1.1L8.7 9.9a12.6 12.6 0 0 0 5.4 5.4l1.4-2.1a1 1 0 0 1 1.1-.4l3.6.9a1 1 0 0 1 .8 1v2.7a1.9 1.9 0 0 1-2 1.9C10.4 19.3 4.7 13.6 4.7 5a1.9 1.9 0 0 1 1.9-2z"/></svg><span>+86 136 9193 5217</span></a><p class="zomeex-footer__line"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a7 7 0 0 1 7 7c0 5.2-7 13-7 13S5 14.2 5 9a7 7 0 0 1 7-7zm0 9.5A2.5 2.5 0 1 0 12 6.5a2.5 2.5 0 0 0 0 5z"/></svg><span>5th Floor, Fifth Zone, Ganghuaxing Industry Park, No. 118 YongFu Road, Shenzhen, China</span></p><p class="zomeex-footer__line"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20zm1 5h-2v6l5.2 3.1 1-1.7-4.2-2.4V7z"/></svg><span>Mon-Fri / 09:00-18:00 CST</span></p><a class="zomeex-footer__quote" href="<?php echo esc_url( zomeex_quote_url() ); ?>">Start a quote <span aria-hidden="true">↗</span></a></div>
			</div>
			<div class="zomeex-container zomeex-footer__base"><span>&copy; <?php echo esc_html( gmdate( 'Y' ) ); ?> ZOMEEX. All rights reserved.</span><span>Demo claims and legacy contact data must be verified before production launch.</span></div>
		</footer>
	</div>
	<?php do_action( 'woodmart_before_wp_footer' ); ?>
	<?php wp_footer(); ?>
</body>
</html>
