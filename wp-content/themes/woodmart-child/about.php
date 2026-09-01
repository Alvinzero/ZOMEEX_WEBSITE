<?php
/**
 * ZOMEEX about page. Legacy business copy is intentionally visible as demo content.
 */
defined( 'ABSPATH' ) || exit;

$about_image = zomeex_upload_url( '1920540-about-1170x536.jpg' );

get_header();
?>
<main class="zomeex-content zomeex-about" id="main-content">
	<section class="zomeex-about__hero">
		<div class="zomeex-container zomeex-about__hero-inner">
			<div><p class="zomeex-kicker">About ZOMEEX</p><h1>Private-mold power. Global supply chain. Licensed solutions.</h1><p>We help cannabis brands move from product direction to a clearer supply chain brief.</p></div>
			<div class="zomeex-about__hero-media"><img src="<?php echo esc_url( $about_image ); ?>" alt="ZOMEEX product and supply chain presentation" width="1170" height="536"></div>
		</div>
	</section>

	<section class="zomeex-container zomeex-about__intro">
		<div><h2>Solutions, delivered.</h2><p>Our existing site describes a product and service portfolio built around vape devices, packaging, private-label development and support for global markets.</p><small>Legacy demo copy. Confirm public claims and supporting documents before launch.</small></div>
		<div class="zomeex-about__values"><article><strong>Product routes</strong><p>Vape hardware, packaging systems and equipment can be scoped from one catalogue.</p></article><article><strong>OEM / ODM</strong><p>Private-mold and customization conversations start with use, finish, volume and target market.</p></article><article><strong>Market context</strong><p>Regional requirements and documentation are reviewed before commercial terms are confirmed.</p></article></div>
	</section>

	<section class="zomeex-about__dark">
		<div class="zomeex-container"><h2>A practical partner for the next brief.</h2><div class="zomeex-about__capabilities"><div><span>VAPE</span><p>Devices, batteries and related hardware.</p></div><div><span>PACK</span><p>Bags, boxes and presentation-ready formats.</p></div><div><span>SWITCH</span><p>Equipment and testing routes for product teams.</p></div><div><span>BOOST</span><p>OEM / ODM, market planning and compliance support.</p></div></div></div>
	</section>

	<section class="zomeex-content-cta"><div class="zomeex-container"><h2>Bring the next product brief.</h2><p>Share the market, format and expected volume. We will map the right starting point.</p><a class="zomeex-button zomeex-button--solid" href="<?php echo esc_url( zomeex_quote_url() ); ?>">Start a quote <span aria-hidden="true">↗</span></a></div></section>
</main>
<?php get_footer(); ?>
