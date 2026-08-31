# ZOMEEX Website

WordPress/WooCommerce website source for ZOMEE, including the Woodmart child theme, Elementor layouts, plugins, and media assets.

## Local development

1. Copy `wp-config-sample.php` to `wp-config.php` and fill in local database settings.
2. Import a WordPress database dump using the table prefix configured in `wp-config.php`.
3. Point a PHP-enabled web server at this directory. WordPress pretty permalinks should route requests to `index.php`.

The local development router used for the original site preview is intentionally kept outside the repository because it contains machine-specific paths and database settings.

## Excluded files

Production credentials, database dumps, hosting backups, logs, and runtime caches are excluded from version control. The original database dump is larger than GitHub's 100 MB single-file limit and should be stored through a private backup or artifact service instead.
