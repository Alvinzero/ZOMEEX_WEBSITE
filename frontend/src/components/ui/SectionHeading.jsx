import { ArrowLink } from './ArrowLink';

export function SectionHeading({ id, title, href, linkLabel, theme = 'default' }) {
  return (
    <div className={['section-heading', `section-heading--${theme}`].join(' ')}>
      <h2 id={id}>{title}</h2>
      {href && linkLabel ? <ArrowLink href={href}>{linkLabel}</ArrowLink> : null}
    </div>
  );
}
