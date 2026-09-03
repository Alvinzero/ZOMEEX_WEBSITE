import { useCallback } from 'react';
import { ProductCard } from '../components/commerce/ProductCard';
import { ArrowLink } from '../components/ui/ArrowLink';
import { Button } from '../components/ui/Button';
import { SectionHeading } from '../components/ui/SectionHeading';
import { productPortals } from '../data/navigation';
import { featuredProducts, insightPreviews, solutionCards } from '../data/products';

const projectSteps = [
  ['01', 'Define the brief', 'Product direction, target market, and volume.'],
  ['02', 'Confirm the format', 'Hardware, packaging, finishes, and product fit.'],
  ['03', 'Sample or proof', 'Review the options and align the open details.'],
  ['04', 'Production route', 'Move the confirmed scope into the next commercial conversation.'],
];

const proofPoints = [
  ['One-stop supply', 'Products, accessories, packaging, and logistics in one place.'],
  ['Custom product paths', 'Semi-private molds and OEM/ODM options for a defined brief.'],
  ['Audited supply chain', 'Audited factories, consistent quality, and fast delivery.'],
  ['EU + US market context', '10+ years in EU and US vape and cannabis markets.'],
];

const procurementItems = [
  ['Product direction', 'Format, intended use, and the product families you are comparing.'],
  ['Target market', 'Where the product will launch and any requirements already known to your team.'],
  ['Customization scope', 'Branding, color, finish, packaging, or product changes that are still under review.'],
  ['Reference material', 'Artwork, samples, drawings, or product links if they are available. A complete pack is not required.'],
];

export function HomePage() {
  const addToQuote = useCallback((product) => {
    try {
      const current = JSON.parse(window.localStorage.getItem('zomeex-quote-items') || '[]');
      const items = Array.isArray(current) ? current : [];
      const existing = items.find((item) => Number(item.id) === product.id);
      if (existing) existing.quantity = Number(existing.quantity || 1) + 1;
      else items.push({ ...product, quantity: 1 });
      window.localStorage.setItem('zomeex-quote-items', JSON.stringify(items));
      window.dispatchEvent(new Event('zomeex:quote-updated'));
    } catch {
      // The quote flow still works when browser storage is unavailable.
    }
  }, []);

  return (
    <main id="main-content">
      <section className="hero container" aria-labelledby="hero-title">
        <div className="hero__copy">
          <p className="eyebrow">Hardware / packaging / OEM ODM</p>
          <h1 id="hero-title">Hardware and packaging with the structure in view.</h1>
          <p className="lede">Explore vape hardware, packaging, and OEM/ODM support built for teams that need clear options before they commit.</p>
          <div className="actions"><Button href="/shop/" variant="solid">Browse products <span aria-hidden="true">↗</span></Button><Button href="/quote-request/">Request a quote <span aria-hidden="true">↗</span></Button></div>
        </div>
        <div className="hero__media">
          <img src="/wp-content/uploads/2025/11/zomee-core-pulse-510-battery-1-1170x536.jpg" alt="CORE Pulse 510 battery product range" fetchPriority="high" width="1170" height="536" />
          <div className="media-note"><span>Product detail</span><strong>CORE Pulse 510</strong></div>
          <span className="media-stamp">Real product media / 01</span>
        </div>
      </section>

      <section className="family-rail" aria-labelledby="family-title">
        <div className="container">
          <SectionHeading id="family-title" title="Explore by product family" href="/shop/" linkLabel="View all products" />
          <div className="family-track">
            {productPortals.map((portal) => <a className="family-card" href={portal.href} key={portal.key}><span><strong>{portal.name}</strong><small>{portal.label}</small></span><span>Explore <b aria-hidden="true">↗</b></span></a>)}
          </div>
        </div>
      </section>

      <section className="solutions container" aria-labelledby="solutions-title">
        <div className="solutions__intro"><h2 id="solutions-title">Find the right starting point for the project.</h2><p>Choose the part of the brief that is already clear. Each portal keeps the next product, packaging, or production decision connected to the same project.</p><ArrowLink href="/quote-request/">Start a project brief</ArrowLink></div>
        <div className="solution-grid">
          {solutionCards.map((card) => <article className="solution-card" key={card.portal}><a className="solution-card__image" href={card.href}><img src={card.image} alt={`${card.portal} product route`} loading="lazy" width="1000" height="700" /></a><div><p className="eyebrow">{card.portal}</p><h3><a href={card.href}>{card.title}</a></h3><p>{card.copy}</p><ArrowLink href={card.href}>Explore {card.portal}</ArrowLink></div></article>)}
        </div>
      </section>

      <section className="featured section-dark" aria-labelledby="featured-title">
        <div className="container"><SectionHeading id="featured-title" title="Featured products" href="/shop/" linkLabel="View all products" theme="light" /><div className="product-grid">{featuredProducts.map((product) => <ProductCard key={product.id} product={product} onAdd={addToQuote} />)}</div></div>
      </section>

      <section className="capability" id="capability" aria-labelledby="capability-title"><div className="container capability__grid"><div><h2 id="capability-title">A project route with the decisions in order.</h2><p>Bring the market, product direction, quantity, and open questions. The conversation can start before every detail is final.</p><ArrowLink href="/quote-request/">Start a project brief</ArrowLink></div><div className="steps">{projectSteps.map(([number, title, copy]) => <div className="step" key={number}><span>{number}</span><strong>{title}</strong><p>{copy}</p></div>)}</div></div></section>

      <section className="proof container" id="proof" aria-labelledby="proof-title"><SectionHeading id="proof-title" title="What the current site already says" linkLabel="Working proof points" /><p className="proof__intro">These points are carried forward from the legacy website as content placeholders. Confirm wording, documents, and scope before publishing.</p><div className="proof-grid">{proofPoints.map(([title, copy]) => <article key={title}><strong>{title}</strong><p>{copy}</p><small>Legacy copy / verify</small></article>)}</div></section>

      <section className="procurement container" aria-labelledby="procurement-title"><div><h2 id="procurement-title">What to bring into the first conversation.</h2><p>Not every item has to be settled. These details help the team give your project a useful first direction.</p></div><div className="procurement-list">{procurementItems.map(([title, copy]) => <article key={title}><h3>{title}</h3><p>{copy}</p></article>)}</div></section>

      <section className="quote-paths container" aria-labelledby="quote-paths-title"><h2 id="quote-paths-title">Choose the quote path that matches your starting point.</h2><div className="quote-paths__grid"><article><h3>Already have product options?</h3><p>Browse product detail pages, add the relevant items to your Quote List, then send the list with your requirements.</p><Button href="/shop/" variant="solid">Build a quote list <span aria-hidden="true">↗</span></Button></article><article><h3>Still defining the project?</h3><p>Send a focused brief when you need help choosing the format, product path, packaging, or OEM and ODM direction.</p><Button href="/quote-request/">Start a project brief <span aria-hidden="true">↗</span></Button></article></div></section>

      <section className="insights container" aria-labelledby="insights-title"><SectionHeading id="insights-title" title="Notes from the build" href="/news/" linkLabel="View insights" /><div className="insights-grid">{insightPreviews.map((insight) => <article key={insight.title}><p className="eyebrow">{insight.date}</p><h3><a href={insight.href}>{insight.title}</a></h3><p>{insight.copy}</p><ArrowLink href={insight.href}>Read note</ArrowLink></article>)}</div></section>

      <section className="cta-band"><div className="container"><h2>Need a build that fits your market?</h2><ArrowLink href="/contact-us/">Talk to the team</ArrowLink></div></section>
    </main>
  );
}
