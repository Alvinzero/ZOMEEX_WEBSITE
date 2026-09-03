export function ArrowLink({ href, children, className = '' }) {
  return <a className={['arrow-link', className].filter(Boolean).join(' ')} href={href}>{children}<span aria-hidden="true">↗</span></a>;
}
