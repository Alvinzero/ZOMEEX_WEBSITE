# Frontend architecture

## Runtime boundary

```text
WordPress / WooCommerce (port 8000)
  - admin, products, media, quote endpoint
  - existing child theme remains untouched during migration

React + Vite (port 5173)
  src/main.jsx -> App -> route page -> reusable components
```

Vite proxies `/wp-content/*` to WordPress in development. This keeps the
existing product media available without copying 224 MB of uploads into the
frontend bundle.

## Source responsibilities

| Folder | Responsibility |
| --- | --- |
| `src/app` | Route selection and app composition |
| `src/components/layout` | Header, footer, and shell shared by every route |
| `src/components/navigation` | Menus and navigation-specific behavior |
| `src/components/commerce` | Quote list behavior and product cards |
| `src/components/ui` | Small presentational building blocks |
| `src/data` | Navigation, product, portal, and copy data |
| `src/pages` | One composition per URL surface |
| `src/styles` | Tokens, base rules, and component/page styling |

## Adding a page

1. Add a page component in `src/pages/`.
2. Add one path branch in `src/app/routes.jsx`.
3. Keep content in `src/data/` when it is reused or likely to come from the CMS.
4. Reuse existing components before creating a page-local variant.

The current data files are demo adapters. The next migration step is replacing
them with a small WordPress REST adapter; page and component APIs should stay
unchanged when that happens.
