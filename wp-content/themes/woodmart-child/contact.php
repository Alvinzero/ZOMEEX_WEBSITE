<?php
/**
 * ZOMEEX contact page. Quote requests remain the primary conversion path.
 */
defined( 'ABSPATH' ) || exit;

get_header();
?>
<main class="zomeex-content zomeex-contact" id="main-content">
	<section class="zomeex-content-masthead">
		<div class="zomeex-container"><p class="zomeex-kicker">Contact ZOMEEX</p><h1>Plan the product and the market together.</h1><p>Send a structured brief for product selection, OEM / ODM development, packaging, equipment or documentation support.</p><a class="zomeex-button zomeex-button--solid" href="<?php echo esc_url( zomeex_quote_url() ); ?>">Start a quote <span aria-hidden="true">↗</span></a></div>
	</section>

	<section class="zomeex-container zomeex-contact__body">
		<div class="zomeex-contact__details"><h2>Talk to the team.</h2><p>Use the quote form for a product shortlist or a new project. For a direct follow-up, the current site lists these contact points.</p><dl><div><dt>Head office</dt><dd>5th Floor, Fifth Zone, Ganghuaxing Industry Park, No. 118 YongFu Road, Shenzhen, China</dd></div><div><dt>Email support</dt><dd><a href="mailto:info@zomeeco.com">info@zomeeco.com</a></dd></div><div><dt>Phone</dt><dd><a href="tel:+8613691935217">+86 136 9193 5217</a></dd></div></dl><small>Legacy demo contact data. Confirm routing and business hours before production launch.</small></div>
		<aside class="zomeex-contact__aside"><p class="zomeex-kicker">Useful context</p><h2>The faster route starts with four details.</h2><ul><li>Product family or format</li><li>Target country or region</li><li>Expected order volume</li><li>Branding, packaging or sample needs</li></ul><a class="zomeex-text-link" href="<?php echo esc_url( zomeex_home_url( '/shop/' ) ); ?>">Browse products <span aria-hidden="true">↗</span></a></aside>
	</section>
</main>
<?php get_footer(); ?>
