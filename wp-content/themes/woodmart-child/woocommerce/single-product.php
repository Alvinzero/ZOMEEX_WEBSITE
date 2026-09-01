<?php
/**
 * ZOMEEX product detail page.
 * Product fields come from WooCommerce; unknown commercial terms stay explicit.
 */
defined( 'ABSPATH' ) || exit;

global $product;
if ( ! $product || ! is_a( $product, 'WC_Product' ) ) {
	$product = wc_get_product( get_the_ID() );
}

$product_id   = $product ? $product->get_id() : get_the_ID();
$title        = $product ? $product->get_name() : get_the_title();
$sku          = $product ? $product->get_sku() : '';
$short        = $product ? $product->get_short_description() : '';
$description  = $product ? $product->get_description() : '';
$main_id      = $product ? $product->get_image_id() : get_post_thumbnail_id( $product_id );
$main_url     = $main_id ? wp_get_attachment_image_url( $main_id, 'woocommerce_single' ) : '';
$gallery_ids  = $product ? $product->get_gallery_image_ids() : array();
$categories   = $product ? wp_get_post_terms( $product_id, 'product_cat', array( 'orderby' => 'parent', 'order' => 'ASC' ) ) : array();
$primary_cat  = $categories && ! is_wp_error( $categories ) ? $categories[0] : null;
$category_url = $primary_cat && ! is_wp_error( $primary_cat ) ? get_term_link( $primary_cat ) : zomeex_home_url( '/shop/' );
$attributes   = $product ? $product->get_attributes() : array();
$quote_url    = zomeex_quote_url();
$related_ids  = function_exists( 'wc_get_related_products' ) ? wc_get_related_products( $product_id, 4, array( $product_id ) ) : array();

$gallery = array();
if ( $main_id ) {
	$gallery[] = $main_id;
}
foreach ( $gallery_ids as $gallery_id ) {
	if ( ! in_array( $gallery_id, $gallery, true ) ) {
		$gallery[] = $gallery_id;
	}
}

get_header();
?>
<main class="zomeex-product" id="main-content">
	<div class="zomeex-container">
		<nav class="zomeex-breadcrumbs" aria-label="Breadcrumb"><a href="<?php echo esc_url( zomeex_home_url( '/shop/' ) ); ?>">Products</a><span aria-hidden="true">/</span><?php if ( $primary_cat && ! is_wp_error( $primary_cat ) ) : ?><a href="<?php echo esc_url( $category_url ); ?>"><?php echo esc_html( $primary_cat->name ); ?></a><span aria-hidden="true">/</span><?php endif; ?><span aria-current="page"><?php echo esc_html( $title ); ?></span></nav>
		<section class="zomeex-product__hero">
			<div class="zomeex-product__gallery">
				<div class="zomeex-product__main-media"><?php if ( $main_url ) : ?><img src="<?php echo esc_url( $main_url ); ?>" alt="<?php echo esc_attr( $title ); ?>" width="900" height="900"><?php else : ?><span class="zomeex-catalog-card__placeholder">Image pending</span><?php endif; ?></div>
				<?php if ( count( $gallery ) > 1 ) : ?><div class="zomeex-product__thumbs" role="list" aria-label="Product images"><?php foreach ( $gallery as $index => $image_id ) : $thumb_url = wp_get_attachment_image_url( $image_id, 'woocommerce_thumbnail' ); $full_url = wp_get_attachment_image_url( $image_id, 'woocommerce_single' ); ?><a role="listitem" href="<?php echo esc_url( $full_url ); ?>" data-product-gallery-image="<?php echo esc_url( $full_url ); ?>" class="<?php echo 0 === $index ? 'is-active' : ''; ?>"><img src="<?php echo esc_url( $thumb_url ); ?>" alt="<?php echo esc_attr( $title . ' view ' . ( $index + 1 ) ); ?>" loading="lazy" width="96" height="96"></a><?php endforeach; ?></div><?php endif; ?>
			</div>
			<div class="zomeex-product__summary">
				<p class="zomeex-kicker"><?php echo $primary_cat && ! is_wp_error( $primary_cat ) ? esc_html( $primary_cat->name ) : 'Product detail'; ?></p>
				<h1><?php echo esc_html( $title ); ?></h1>
				<div class="zomeex-product__intro"><?php echo $short ? wp_kses_post( wpautop( $short ) ) : '<p>A configurable product route for teams building against a defined market brief.</p>'; ?></div>
				<div class="zomeex-product__meta"><span><?php echo $sku ? esc_html( 'SKU ' . $sku ) : 'SKU to confirm'; ?></span><span>Quote on request</span></div>
				<div class="zomeex-product__actions"><button class="zomeex-button zomeex-button--solid zomeex-button--wide" type="button" data-quote-add data-product-id="<?php echo esc_attr( $product_id ); ?>" data-product-title="<?php echo esc_attr( $title ); ?>" data-product-url="<?php echo esc_url( get_permalink( $product_id ) ); ?>" data-product-image="<?php echo esc_url( $main_url ); ?>" data-product-sku="<?php echo esc_attr( $sku ); ?>"><span aria-hidden="true">+</span><span data-quote-label>Add to quote list</span></button><a class="zomeex-button zomeex-button--wide" href="<?php echo esc_url( $quote_url ); ?>"><span data-quote-count hidden>0</span>Open quote list <span aria-hidden="true">↗</span></a></div>
				<div class="zomeex-product__note"><span aria-hidden="true">i</span><p>Pricing, MOQ, lead time and compliance documents are confirmed after we review your destination market and volume.</p></div>
			</div>
		</section>

		<section class="zomeex-product__details">
			<div class="zomeex-product__description"><p class="zomeex-kicker">Specification notes</p><h2>Designed to be scoped clearly.</h2><?php if ( $description ) : ?><div class="zomeex-richtext"><?php echo wp_kses_post( wpautop( $description ) ); ?></div><?php else : ?><p>Use the quote list to tell us the target use, market, finish and expected volume. The team will confirm the technical and commercial fit before production.</p><?php endif; ?></div>
			<div class="zomeex-product__accordions">
				<details open><summary>Product attributes <span aria-hidden="true">+</span></summary><dl class="zomeex-spec-list"><?php if ( $attributes ) : foreach ( $attributes as $attribute ) : $name = wc_attribute_label( $attribute->get_name() ); $values = $attribute->is_taxonomy() ? wc_get_product_terms( $product_id, $attribute->get_name(), array( 'fields' => 'names' ) ) : $attribute->get_options(); ?><div><dt><?php echo esc_html( $name ); ?></dt><dd><?php echo esc_html( implode( ', ', $values ) ); ?></dd></div><?php endforeach; else : ?><div><dt>Technical sheet</dt><dd>To confirm against your brief</dd></div><div><dt>Finish / format</dt><dd>Available options reviewed with sales</dd></div><?php endif; ?></dl></details>
				<details><summary>Customization and MOQ <span aria-hidden="true">+</span></summary><div class="zomeex-richtext"><p>Private label, color, finish and packaging routes can be discussed for qualified projects. Minimum order quantities are set by format, tooling and destination market.</p><p><strong>Current status:</strong> Quote on request.</p></div></details>
				<details><summary>Lead time and compliance <span aria-hidden="true">+</span></summary><div class="zomeex-richtext"><p>Lead time, sample timing and available documentation are confirmed once the brief and market are known. We do not publish unverified certificates or delivery promises.</p></div></details>
			</div>
		</section>

		<?php if ( $related_ids ) : ?>
			<section class="zomeex-product__related" aria-labelledby="zomeex-related-title"><div class="zomeex-section-heading"><h2 id="zomeex-related-title">Related routes</h2><a href="<?php echo esc_url( zomeex_home_url( '/shop/' ) ); ?>">View all products <span aria-hidden="true">→</span></a></div><div class="zomeex-product__related-grid"><?php foreach ( $related_ids as $related_id ) : $related = wc_get_product( $related_id ); if ( ! $related ) { continue; } $related_image = wp_get_attachment_image_url( $related->get_image_id(), 'woocommerce_single' ); ?><article class="zomeex-related-card"><a class="zomeex-related-card__media" href="<?php echo esc_url( get_permalink( $related_id ) ); ?>"><?php if ( $related_image ) : ?><img src="<?php echo esc_url( $related_image ); ?>" alt="<?php echo esc_attr( $related->get_name() ); ?>" loading="lazy" width="600" height="600"><?php else : ?><span class="zomeex-catalog-card__placeholder">Image pending</span><?php endif; ?></a><div><p><?php echo esc_html( $related->get_sku() ? 'SKU ' . $related->get_sku() : 'SKU to confirm' ); ?></p><h3><a href="<?php echo esc_url( get_permalink( $related_id ) ); ?>"><?php echo esc_html( $related->get_name() ); ?></a></h3></div></article><?php endforeach; ?></div></section>
		<?php endif; ?>
	</div>
	<div class="zomeex-quote-feedback" data-quote-feedback hidden role="status" aria-live="polite"></div>
</main>
<?php get_footer(); ?>
