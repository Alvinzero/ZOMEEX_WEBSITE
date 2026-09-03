import { SiteFooter } from './SiteFooter';
import { SiteHeader } from './SiteHeader';
import { QuoteFloat } from '../commerce/QuoteFloat';

export function SiteShell({ children }) {
  return <div className="site-shell"><SiteHeader />{children}<SiteFooter /><QuoteFloat /></div>;
}
