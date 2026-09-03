import { CatalogPage } from '../pages/CatalogPage';
import { HomePage } from '../pages/HomePage';
import { NotFoundPage } from '../pages/NotFoundPage';
import { QuotePage } from '../pages/QuotePage';
import { SimplePage } from '../pages/SimplePage';

export function getPage(pathname = window.location.pathname) {
  const path = pathname.replace(/\/+$/, '') || '/';

  if (path === '/') return <HomePage />;
  if (path === '/shop' || path.startsWith('/product-category')) return <CatalogPage />;
  if (path === '/quote-request' || path === '/quote') return <QuotePage />;
  if (path === '/news') return <SimplePage eyebrow="Industry insights" title="Notes from the build." copy="Product and manufacturing notes are being organized into the new content surface." linkLabel="Browse products" />;
  if (path === '/about-us-3' || path === '/about') return <SimplePage eyebrow="About ZOMEEX" title="A clearer route from product idea to supply." copy="We help teams scope hardware, packaging, and OEM/ODM decisions for regulated markets." href="/contact-us/" linkLabel="Contact the team" />;
  if (path === '/contact-us' || path === '/contact') return <SimplePage eyebrow="Talk to the team" title="Bring the brief. We will map the next step." copy="Share your market, product direction, quantity, and open questions with the ZOMEEX team." href="/quote-request/" linkLabel="Start a quote brief" />;
  if (path === '/my-account' || path === '/cart') return <SimplePage eyebrow={path === '/cart' ? 'Shopping cart' : 'Customer account'} title={path === '/cart' ? 'Cart' : 'Account'} copy="This surface remains connected to the WooCommerce runtime during the React migration." />;

  return <NotFoundPage />;
}
