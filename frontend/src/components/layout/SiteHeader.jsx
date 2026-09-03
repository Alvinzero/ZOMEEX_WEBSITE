import { useEffect, useRef, useState } from 'react';
import { productPortals, solutionLinks } from '../../data/navigation';
import { MegaMenu } from '../navigation/MegaMenu';
import { ArrowLink } from '../ui/ArrowLink';

const languages = [
  ['en', 'English'],
  ['zh-CN', '中文'],
  ['ru', 'Русский'],
  ['de', 'Deutsch'],
  ['fr', 'Français'],
];

export function SiteHeader() {
  const [menu, setMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [announcementVisible, setAnnouncementVisible] = useState(true);
  const [language, setLanguage] = useState('EN');
  const headerRef = useRef(null);

  useEffect(() => {
    const handlePointerDown = (event) => {
      if (!headerRef.current?.contains(event.target)) {
        setMenu(null);
        setLanguageOpen(false);
      }
    };
    document.addEventListener('pointerdown', handlePointerDown);
    return () => document.removeEventListener('pointerdown', handlePointerDown);
  }, []);

  const closeMenus = () => {
    setMenu(null);
    setLanguageOpen(false);
  };

  return (
    <header className="site-header" ref={headerRef}>
      {announcementVisible ? <div className="announcement">
        <div className="container announcement__inner">
          <span>Samples and OEM/ODM support available</span>
          <button type="button" aria-label="Dismiss announcement" onClick={() => setAnnouncementVisible(false)}>&times;</button>
        </div>
      </div> : null}
      <div className="container site-header__inner">
        <a className="wordmark" href="/" aria-label="ZOMEEX home">ZOMEEX</a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <div className="nav-dropdown">
            <button className="nav-trigger" type="button" aria-expanded={menu === 'products'} onClick={() => setMenu(menu === 'products' ? null : 'products')}>
              Products <span aria-hidden="true">⌄</span>
            </button>
            <MegaMenu open={menu === 'products'} onClose={closeMenus} portals={productPortals} />
          </div>
          <div className="nav-dropdown">
            <button className="nav-trigger" type="button" aria-expanded={menu === 'solutions'} onClick={() => setMenu(menu === 'solutions' ? null : 'solutions')}>
              Solutions <span aria-hidden="true">⌄</span>
            </button>
            {menu === 'solutions' ? (
              <div className="solutions-menu" role="menu">
                {solutionLinks.map((link) => <a href={link.href} key={link.title} onClick={closeMenus}><strong>{link.title}</strong><small>{link.hint}</small></a>)}
              </div>
            ) : null}
          </div>
          <a href="/news/">Insights</a>
          <a href="/about-us-3/">About</a>
        </nav>
        <div className="header-actions">
          <div className="utility-actions" aria-label="Account tools">
            <button className="icon-button" type="button" aria-label="Open search" aria-expanded={searchOpen} onClick={() => setSearchOpen(!searchOpen)}><span className="icon-glyph icon-glyph--search" aria-hidden="true" /></button>
            <a className="icon-button" href="/my-account/" aria-label="Account"><span className="icon-glyph icon-glyph--account" aria-hidden="true" /></a>
            <a className="icon-button icon-button--cart" href="/cart/" aria-label="Cart"><span className="icon-glyph icon-glyph--cart" aria-hidden="true" /><span className="cart-count" hidden>0</span></a>
          </div>
          <div className="language-switcher">
            <button className="language-trigger" type="button" aria-expanded={languageOpen} onClick={() => setLanguageOpen(!languageOpen)}>{language} <span aria-hidden="true">⌄</span></button>
            {languageOpen ? (
              <div className="language-menu" role="menu">
                <p>Choose language</p>
                {languages.map(([code, label]) => <button type="button" role="menuitem" key={code} onClick={() => { setLanguage(code === 'zh-CN' ? 'ZH' : code.toUpperCase()); setLanguageOpen(false); document.documentElement.lang = code; }}><span>{label}</span><small>{code === 'zh-CN' ? 'ZH' : code.toUpperCase()}</small></button>)}
              </div>
            ) : null}
          </div>
          <ArrowLink className="header-quote" href="/quote-request/">Quote list</ArrowLink>
          <button className="menu-toggle" type="button" aria-label={mobileOpen ? 'Close menu' : 'Open menu'} aria-expanded={mobileOpen} onClick={() => setMobileOpen(!mobileOpen)}><span /><span /></button>
        </div>
      </div>
      {searchOpen ? (
        <div className="search-panel">
          <div className="container">
            <form role="search" action="/" method="get">
              <label htmlFor="site-search">Search products and insights</label>
              <div><input id="site-search" type="search" name="s" placeholder="Search by product, SKU, or use" /><button type="submit">Search <span aria-hidden="true">↗</span></button></div>
            </form>
          </div>
        </div>
      ) : null}
      {mobileOpen ? (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          <div className="container">
            <a href="/shop/">Products <span aria-hidden="true">↗</span></a>
            <a href="/#capability">Solutions <span aria-hidden="true">↗</span></a>
            <a href="/news/">Insights <span aria-hidden="true">↗</span></a>
            <a href="/about-us-3/">About <span aria-hidden="true">↗</span></a>
            <a className="mobile-nav__cta" href="/quote-request/">Open quote list <span aria-hidden="true">↗</span></a>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
