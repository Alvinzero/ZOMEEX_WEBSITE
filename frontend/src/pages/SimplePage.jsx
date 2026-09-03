import { ArrowLink } from '../components/ui/ArrowLink';

export function SimplePage({ eyebrow = 'ZOMEEX', title, copy, href = '/shop/', linkLabel = 'Browse products' }) {
  return <main className="simple-page" id="main-content"><div className="container"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p>{copy}</p><ArrowLink href={href}>{linkLabel}</ArrowLink></div></main>;
}
