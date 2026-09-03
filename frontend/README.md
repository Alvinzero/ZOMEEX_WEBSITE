# ZOMEEX React frontend

This directory is the new componentized frontend boundary for the ZOMEEX website.
The WordPress/WooCommerce tree at the repository root remains the content and
admin runtime during the migration. Product images are served from the existing
WordPress uploads directory through the Vite proxy.

## Start locally

```bash
cd frontend
npm install
npm run dev
```

Open `http://localhost:5173/`. Keep the WordPress preview on `http://localhost:8000/`
running as the media proxy target.

## Folder conventions

```text
src/
  app/          route selection and application composition
  components/   reusable UI grouped by responsibility
  data/         navigation, product, and copy data
  pages/        route-level compositions
  styles/       design tokens, base rules, and page styles
```

See [`ARCHITECTURE.md`](ARCHITECTURE.md) for the runtime boundary, data flow,
and the rules for adding a route.

## Migration rule

Pages own composition, components own reusable markup, and data owns content.
Do not put WordPress queries or page-specific CSS in shared components. When a
page is ready to move to production, replace its data adapter with a WordPress
REST or server API adapter without changing the component tree.
