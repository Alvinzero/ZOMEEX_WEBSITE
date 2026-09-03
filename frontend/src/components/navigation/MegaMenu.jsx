import { ArrowLink } from '../ui/ArrowLink';

export function MegaMenu({ open, onClose, portals }) {
  if (!open) return null;

  return (
    <div className="mega-menu" role="menu">
      <div className="mega-menu__intro">
        <p className="eyebrow">Product catalogue</p>
        <h2>Choose the system<br />behind your brief.</h2>
        <ArrowLink href="/shop/">View all products</ArrowLink>
      </div>
      <div className="mega-menu__portals">
        {portals.map((portal) => (
          <div className="mega-menu__portal" key={portal.key}>
            <a className="mega-menu__title" href={portal.href} onClick={onClose}>
              <strong>{portal.name}</strong><span aria-hidden="true">↗</span>
            </a>
            <p>{portal.description}</p>
            {portal.children.length > 0 ? (
              <div className="mega-menu__children">
                {portal.children.map((child) => <a href={`${portal.href}&series=${encodeURIComponent(child)}`} key={child}>{child}</a>)}
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}
