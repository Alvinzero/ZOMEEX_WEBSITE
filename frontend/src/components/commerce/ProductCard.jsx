export function ProductCard({ product, onAdd }) {
  return (
    <article className="product-card">
      <a className="product-card__media" href={product.href}>
        <img src={product.image} alt={product.title} loading="lazy" width="700" height="700" />
      </a>
      <div className="product-card__content">
        <div><p className="eyebrow">{product.category}</p><h3><a href={product.href}>{product.title}</a></h3><p className="product-card__sku">SKU {product.sku}</p></div>
        <button className="product-card__add" type="button" onClick={() => onAdd(product)}><span aria-hidden="true">+</span><span>Add to quote</span></button>
      </div>
    </article>
  );
}
