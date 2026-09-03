# ZOMEEX Website

WordPress/WooCommerce website source for ZOMEE, including the Woodmart child theme, Elementor layouts, plugins, and media assets.

## Local development

1. Copy `wp-config-sample.php` to `wp-config.php` and fill in local database settings.
2. Import a WordPress database dump using the table prefix configured in `wp-config.php`.
3. Point a PHP-enabled web server at this directory. WordPress pretty permalinks should route requests to `index.php`.

## React/Vite frontend

The new componentized frontend lives in [`frontend/`](frontend/). It is the
active migration boundary for the public UI while WordPress/WooCommerce remains
the content and admin runtime.

```bash
cd frontend
npm install
npm run dev
```

Open `http://localhost:5173/` for the React app. Keep the WordPress preview on
`http://localhost:8000/` so Vite can proxy existing product media from
`/wp-content/uploads/`.

The local development router used for the original site preview is intentionally kept outside the repository because it contains machine-specific paths and database settings.

## Excluded files

Production credentials, database dumps, hosting backups, logs, and runtime caches are excluded from version control. The original database dump is larger than GitHub's 100 MB single-file limit and should be stored through a private backup or artifact service instead.
