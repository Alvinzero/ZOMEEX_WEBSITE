import { ArrowLink } from '../ui/ArrowLink';

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__main">
        <div>
          <a className="wordmark wordmark--footer" href="/">ZOMEEX</a>
          <p>For teams building products, packaging, and OEM/ODM routes for regulated markets.</p>
        </div>
        <div className="footer-links">
          <p className="eyebrow">Explore</p>
          <a href="/shop/">Products</a>
          <a href="/about-us-3/">About us</a>
          <a href="/news/">Industry insights</a>
        </div>
        <div className="footer-brief">
          <p className="eyebrow">Start a brief</p>
          <p>Share your target market, product direction, and expected volume.</p>
          <ArrowLink href="/quote-request/">Request a quote</ArrowLink>
        </div>
      </div>
      <div className="container site-footer__bottom"><span>© 2026 ZOMEEX. All rights reserved.</span><span>Product information is subject to confirmation.</span></div>
    </footer>
  );
}
