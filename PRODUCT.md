# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

WordPress + WooCommerce with a Woodmart child theme. The first redesign phase keeps WordPress/WooCommerce as the content and product data source, using a custom child-theme front end.

## Users

Primary users are cannabis brand owners, procurement teams, product and R&D teams, and compliance or quality reviewers evaluating a manufacturing and OEM/ODM partner for regulated markets.

## Product Purpose

ZOMEEX presents vape hardware, packaging, manufacturing equipment, and OEM/ODM capabilities. The website should help a qualified business visitor find a relevant product, understand its use and constraints, and submit a useful quote request.

## Positioning

The site is a B2B product catalogue combined with manufacturing capability proof and a structured quote path. It is not primarily a consumer checkout experience.

## Operating Context

Visitors compare products by category, application, specifications, customization, minimum order quantity, lead time, and target-market requirements. Internal content owners need to add, update, publish, and archive products and insights without rebuilding page layouts.

## Capabilities and Constraints

- Existing source contains 38 published products, 8 pages, 6 published articles, WooCommerce, Elementor, Woodmart, and product media.
- Existing URL slugs, product identifiers, WordPress/WooCommerce behavior, and legal or consent copy must not be changed silently.
- The homepage redesign is the first implementation slice. Product detail, product index, quote form, and insights templates follow in later slices.
- Exact pricing, MOQ, lead times, certifications, market claims, age-gate rules, and CRM/email routing remain business and legal decisions.

## Brand Commitments

- Preserve the ZOMEEX/ZOMEE name, existing logo assets, real product photography, and the current product vocabulary while improving hierarchy and consistency.
- Use the linked Marijuana Packaging site as interaction and information-architecture inspiration only. Do not copy its brand, content, imagery, or code.
- The primary conversion language is B2B inquiry and OEM/ODM collaboration.

## Evidence on Hand

- Local WordPress source: `/Users/mac/Downloads/public_html` and the working copy in the project root.
- Local database dump used for the preview: `localhost.sql` (kept outside version control).
- Product media under `wp-content/uploads`.
- Existing published product and article records in the imported WordPress database.
- No confirmed customer logos, testimonial quotes, certification claims, or final sales SLA are available yet; do not fabricate them.

## Product Principles

- Make the product and its use obvious before making the brand expressive.
- Treat compliance, specifications, and manufacturing evidence as decision support, not decoration.
- Prefer a short path to a qualified quote over an unnecessary checkout flow.
- Keep content structured so product and insight growth does not require template duplication.
- Preserve searchability, accessibility, and responsive behavior as first-class requirements.

## Accessibility & Inclusion

The public website must support keyboard navigation, visible focus, readable contrast, semantic headings and landmarks, useful image alt text, touch targets of at least 44px, and a reduced-motion experience. Age verification, regional access, privacy, and compliance language must remain configurable pending legal review.
