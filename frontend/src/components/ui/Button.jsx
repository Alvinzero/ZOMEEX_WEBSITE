export function Button({ href, children, variant = 'outline', className = '', ...props }) {
  const classes = ['button', `button--${variant}`, className].filter(Boolean).join(' ');

  if (href) {
    return <a className={classes} href={href} {...props}>{children}</a>;
  }

  return <button className={classes} type="button" {...props}>{children}</button>;
}
