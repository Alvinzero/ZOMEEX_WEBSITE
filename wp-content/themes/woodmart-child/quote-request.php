<?php
/**
 * Quote request surface for the shared localStorage quote list.
 */
defined( 'ABSPATH' ) || exit;

$submitted = isset( $_GET['submitted'] ) && '1' === sanitize_text_field( wp_unslash( $_GET['submitted'] ) );
$reference = sanitize_text_field( wp_unslash( $_GET['ref'] ?? '' ) );
$interest  = sanitize_text_field( wp_unslash( $_GET['interest'] ?? '' ) );
$resource  = sanitize_key( wp_unslash( $_GET['resource'] ?? '' ) );
$interest  = $interest ?: ( 'dieline' === $resource ? 'Dieline guidance' : ( 'sample-kit' === $resource ? 'Sample kit' : '' ) );
$error_key = sanitize_key( wp_unslash( $_GET['quote_error'] ?? '' ) );
$errors    = array(
	'required' => 'Please complete the required fields before sending your brief.',
	'invalid'  => 'Some fields are too long or contain an unsupported value. Please review and try again.',
	'security' => 'This form has expired. Please refresh the page and try again.',
	'spam'     => 'We could not accept this request. Please try again.',
	'save'     => 'We could not save this brief. Please try again or email the team directly.',
);

get_header();
?>
<main class="zomeex-quote" id="main-content">
	<section class="zomeex-quote__masthead">
		<div class="zomeex-container"><p class="zomeex-kicker">Quote request / structured brief</p><h1>Turn a shortlist into a clear next step.</h1><p>Tell us what you are building, where it will launch, and the volume you are planning. We will confirm fit, documentation and commercial terms with you.</p></div>
	</section>
	<div class="zomeex-container">
		<?php if ( $submitted ) : ?>
			<section class="zomeex-quote__success" data-quote-success role="status" aria-labelledby="quote-success-title"><p class="zomeex-kicker">Brief received</p><h2 id="quote-success-title">Thanks. Your reference is <?php echo esc_html( $reference ?: 'received' ); ?>.</h2><p>The team will review your products and market context before replying. Keep this reference for follow-up.</p><a class="zomeex-button zomeex-button--solid" href="<?php echo esc_url( zomeex_home_url( '/shop/' ) ); ?>">Continue browsing <span aria-hidden="true">↗</span></a></section>
		<?php else : ?>
			<?php if ( $error_key && isset( $errors[ $error_key ] ) ) : ?><div class="zomeex-form-alert zomeex-form-alert--error" role="alert"><?php echo esc_html( $errors[ $error_key ] ); ?></div><?php endif; ?>
			<form class="zomeex-quote__layout" data-quote-form action="<?php echo esc_url( admin_url( 'admin-post.php' ) ); ?>" method="post" enctype="multipart/form-data">
				<div class="zomeex-quote__brief">
					<div class="zomeex-quote__list-panel"><div class="zomeex-section-heading"><h2>Your quote list</h2><button class="zomeex-text-button" type="button" data-quote-clear>Clear list</button></div><div class="zomeex-quote-list" data-quote-list></div><div class="zomeex-quote-empty" data-quote-empty hidden><p class="zomeex-kicker">No products selected</p><h3>Start with the directory.</h3><p>Add products here to keep your brief focused, or send a general project note below.</p><a class="zomeex-text-link" href="<?php echo esc_url( zomeex_home_url( '/shop/' ) ); ?>">Browse products <span aria-hidden="true">↗</span></a></div></div>
					<div class="zomeex-quote__fieldset"><p class="zomeex-kicker">Project context</p><h2>Where should we focus?</h2><div class="zomeex-form-grid"><label><span>Name <em>*</em></span><input type="text" name="name" autocomplete="name" maxlength="120" required></label><label><span>Company <em>*</em></span><input type="text" name="company" autocomplete="organization" maxlength="160" required></label><label><span>Work email <em>*</em></span><input type="email" name="email" autocomplete="email" maxlength="254" required></label><label><span>Country / region <em>*</em></span><input type="text" name="country" autocomplete="country-name" maxlength="120" required></label><label><span>Your role</span><select name="role"><option value="">Select one</option><option>Founder / owner</option><option>Procurement</option><option>Product / R&amp;D</option><option>Brand / marketing</option><option>Compliance / legal</option><option>Distributor</option><option>Other</option></select></label><label><span>Target market <em>*</em></span><input type="text" name="target_market" placeholder="e.g. EU, US, Canada" maxlength="160" required></label><label><span>Estimated quantity</span><input type="text" name="quantity" inputmode="numeric" maxlength="32" pattern="[0-9]{1,9}" placeholder="Units per order or year"></label><label><span>Target timeline</span><select name="timeline"><option value="">Select one</option><option>Exploring options</option><option>1-3 months</option><option>3-6 months</option><option>6+ months</option></select></label><label class="zomeex-form-field--full"><span>Product interest</span><input type="text" name="product_interest" maxlength="180" value="<?php echo esc_attr( $interest ); ?>" placeholder="e.g. Mylar bags, pre-roll tubes, vape hardware"></label></div></div>
					<div class="zomeex-quote__fieldset"><p class="zomeex-kicker">Build requirements</p><h2>What should we prepare?</h2><div class="zomeex-form-grid"><label class="zomeex-form-field--full"><span>Customization, finish or packaging</span><textarea name="customization" rows="4" maxlength="3000" placeholder="Colors, branding, format, technical requirements"></textarea></label><label><span>Samples</span><select name="samples"><option value="">Select one</option><option>Yes, please advise</option><option>Not yet</option><option>Already have samples</option></select></label><label><span>Anything else</span><textarea name="notes" rows="3" maxlength="3000" placeholder="Additional context"></textarea></label><label class="zomeex-form-field--full zomeex-file-field"><span>Artwork / dieline files</span><input type="file" name="artwork_files[]" multiple accept=".pdf,.ai,.eps,.svg,.png,.jpg,.jpeg,.webp"><small>Up to 3 files, 10 MB each. PDF, AI, EPS, SVG, PNG, JPG or WEBP.</small></label></div></div>
				</div>
				<aside class="zomeex-quote__aside"><div class="zomeex-quote__aside-inner"><p class="zomeex-kicker">Before you send</p><h2>A useful brief makes the next reply sharper.</h2><ul><li>Destination market and expected volume</li><li>Product family or format</li><li>Branding, packaging or equipment needs</li><li>Sample and timing expectations</li></ul><p class="zomeex-quote__privacy">Your details are used to respond to this request. We do not publish your brief.</p><label class="zomeex-privacy-consent"><input type="checkbox" name="privacy_consent" value="1" required><span>I agree that ZOMEEX may use these details and files to respond to this enquiry.</span></label><div class="zomeex-honeypot" aria-hidden="true" hidden><label>Website<input type="text" name="zomeex_quote_honeypot" tabindex="-1" autocomplete="off"></label></div><input type="hidden" name="action" value="zomeex_quote_submit"><input type="hidden" name="quote_items" id="zomeex-quote-items" value="[]"><?php wp_nonce_field( 'zomeex_quote_submit', 'zomeex_quote_nonce' ); ?><button class="zomeex-button zomeex-button--solid zomeex-button--wide" type="submit" data-quote-submit><span data-quote-submit-label>Send quote request</span> <span aria-hidden="true">↗</span></button></div></aside>
			</form>
		<?php endif; ?>
	</div>
	<div class="zomeex-quote-feedback" data-quote-feedback hidden role="status" aria-live="polite"></div>
</main>
<?php get_footer(); ?>
