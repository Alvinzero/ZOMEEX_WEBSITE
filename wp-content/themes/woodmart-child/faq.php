<?php
/**
 * FAQ surface for packaging buyers. Content stays in PHP for the demo until
 * the FAQ is moved to an editable WordPress field set.
 */
defined( 'ABSPATH' ) || exit;

$faq_items = function_exists( 'zomeex_faq_items' ) ? zomeex_faq_items() : array();
$quote_url  = function_exists( 'zomeex_quote_url' ) ? zomeex_quote_url() : home_url( '/quote-request/' );

get_header();
?>
<main class="zomeex-faq" id="main-content">
	<section class="zomeex-content-masthead zomeex-faq__masthead">
		<div class="zomeex-container">
			<p class="zomeex-kicker">Packaging questions / clear answers</p>
			<h1>Cannabis Packaging FAQ</h1>
			<p>Start with the practical details: formats, child-resistant structures, samples, artwork and the information we need to scope a wholesale project.</p>
		</div>
	</section>
	<section class="zomeex-faq__body">
		<div class="zomeex-container zomeex-faq__layout">
			<div class="zomeex-faq__intro">
				<p class="zomeex-kicker">Before you send a brief</p>
				<h2>The useful details are usually already in your notes.</h2>
				<p>Tell us the product format, destination market, estimated volume and artwork status. We can clarify the remaining decisions with you.</p>
				<a class="zomeex-button zomeex-button--solid" href="<?php echo esc_url( $quote_url ); ?>">Start a project brief <span aria-hidden="true">↗</span></a>
			</div>
			<div class="zomeex-faq__list" data-faq-list>
				<?php foreach ( $faq_items as $index => $faq ) : ?>
					<details class="zomeex-faq__item"<?php echo 0 === $index ? ' open' : ''; ?>>
						<summary><span><?php echo esc_html( $faq['question'] ); ?></span><span class="zomeex-faq__icon" aria-hidden="true">+</span></summary>
						<div class="zomeex-faq__answer"><p><?php echo esc_html( $faq['answer'] ); ?></p></div>
					</details>
				<?php endforeach; ?>
			</div>
		</div>
	</section>
	<section class="zomeex-faq__cta">
		<div class="zomeex-container zomeex-faq__cta-inner">
			<h2>Still deciding on the format?</h2>
			<p>Send the questions you already have. The team can help map the next product and packaging decision.</p>
			<a class="zomeex-button" href="<?php echo esc_url( $quote_url ); ?>">Talk through a brief <span aria-hidden="true">↗</span></a>
		</div>
	</section>
</main>
<?php get_footer(); ?>
