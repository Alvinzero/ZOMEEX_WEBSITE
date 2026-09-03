import { useMemo, useState } from 'react';
import { ProductCard } from '../components/commerce/ProductCard';
import { ArrowLink } from '../components/ui/ArrowLink';
import { Button } from '../components/ui/Button';
import { portalCategories, productPortals } from '../data/navigation';
import { featuredProducts } from '../data/products';

export function CatalogPage() {
  const params = new URLSearchParams(window.location.search);
  const activePortal = params.get('portal') || '';
  const [search, setSearch] = useState(params.get('s') || '');
  const [sort, setSort] = useState(params.get('sort') || 'latest');
  const [items, setItems] = useState(featuredProducts);

  const portalName = productPortals.find((portal) => portal.key === activePortal)?.name;
  const visibleItems = useMemo(() => {
    const query = search.trim().toLowerCase();
    const categories = portalCategories[activePortal] || [];
    return items.filter((product) => {
      const matchesQuery = !query || `${product.title} ${product.category} ${product.sku}`.toLowerCase().includes(query);
      const matchesPortal = !activePortal || categories.includes(product.category);
      return matchesQuery && matchesPortal;
    });
  }, [activePortal, items, search]);

  const addToQuote = (product) => {
    try {
      const current = JSON.parse(window.localStorage.getItem('zomeex-quote-items') || '[]');
      const list = Array.isArray(current) ? current : [];
      const existing = list.find((item) => Number(item.id) === product.id);
      if (existing) existing.quantity = Number(existing.quantity || 1) + 1;
      else list.push({ ...product, quantity: 1 });
      window.localStorage.setItem('zomeex-quote-items', JSON.stringify(list));
      window.dispatchEvent(new Event('zomeex:quote-updated'));
    } catch {
      // Ignore storage errors; the page remains navigable.
    }
  };

  const submitFilters = (event) => {
    event.preventDefault();
    const next = new URLSearchParams();
    if (activePortal) next.set('portal', activePortal);
    if (search) next.set('s', search);
    if (sort !== 'latest') next.set('sort', sort);
    window.history.replaceState({}, '', `${window.location.pathname}?${next.toString()}`);
    setItems((current) => sort === 'name' ? [...current].sort((a, b) => a.title.localeCompare(b.title)) : sort === 'oldest' ? [...current].reverse() : current);
  };

  return (
    <main className="catalog-page" id="main-content">
      <section className="catalog-masthead"><div className="container catalog-masthead__inner"><div><p className="eyebrow">Product directory / {portalName || 'All products'}</p><h1>{search ? `Results for "${search}"` : portalName || 'All products'}</h1><p>A clear starting point for hardware, packaging, and equipment briefs. Commercial terms are confirmed against your market and volume.</p></div><Button href="/quote-request/" variant="solid">Open quote list <span aria-hidden="true">↗</span></Button></div></section>
      <section className="container catalog-body" aria-label="Product directory">
        <div className="catalog-toolbar"><nav className="catalog-portals" aria-label="Product portals"><a className={!activePortal ? 'is-active' : ''} href="/shop/">All products</a>{productPortals.map((portal) => <a className={activePortal === portal.key ? 'is-active' : ''} href={portal.href} key={portal.key}>{portal.name}</a>)}</nav><form className="catalog-filters" onSubmit={submitFilters}><label><span className="sr-only">Search products</span><input type="search" value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search products" /></label><label><span className="sr-only">Sort products</span><select value={sort} onChange={(event) => setSort(event.target.value)}><option value="latest">Latest</option><option value="name">Name A-Z</option><option value="oldest">Oldest</option></select></label><Button type="submit">Apply <span aria-hidden="true">↗</span></Button></form></div>
        <div className="catalog-summary"><p><strong>{visibleItems.length}</strong> products</p><p>{sort === 'name' ? 'Name A-Z' : sort === 'oldest' ? 'Oldest' : 'Latest'} <span aria-hidden="true">·</span> Quote on request</p></div>
        {visibleItems.length > 0 ? <div className="product-grid product-grid--catalog">{visibleItems.map((product) => <ProductCard key={product.id} product={product} onAdd={addToQuote} />)}</div> : <div className="catalog-empty"><p className="eyebrow">No matching products</p><h2>Try another term or start with a portal.</h2><p>We can also scope a product that is not yet listed. Share the format, market, and volume with the team.</p><ArrowLink href="/quote-request/">Start a quote</ArrowLink></div>}
      </section>
    </main>
  );
}
