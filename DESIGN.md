---
name: ZOMEEX B2B Catalogue Homepage
description: A quiet industrial catalogue system for product discovery and qualified RFQ paths.
colors:
  ink: "#14271f"
  ink-soft: "#53655c"
  paper: "#f5f7f3"
  paper-alt: "#e9eee9"
  line: "#d2ddd5"
  accent: "#17885d"
  accent-dark: "#0d6947"
  deep: "#10251d"
  white: "#ffffff"
  field-surface: "#f6f8f5"
typography:
  display:
    fontFamily: "Avenir Next, Helvetica Neue, Arial, sans-serif"
    fontSize: "62px"
    fontWeight: 720
    lineHeight: 0.98
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Avenir Next, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(36px, 3.25vw, 48px)"
    fontWeight: 720
    lineHeight: 1.02
    letterSpacing: "-0.035em"
  title:
    fontFamily: "Avenir Next, Helvetica Neue, Arial, sans-serif"
    fontSize: "21px"
    fontWeight: 720
    lineHeight: 1.12
    letterSpacing: "-0.025em"
  body:
    fontFamily: "inherit"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "normal"
  label:
    fontFamily: "Avenir Next, Helvetica Neue, Arial, sans-serif"
    fontSize: "10px"
    fontWeight: 750
    lineHeight: 1.3
    letterSpacing: "0.1em"
rounded:
  none: "0"
spacing:
  xs: "8px"
  sm: "12px"
  md: "16px"
  control-x: "20px"
  section-head: "30px"
  lg: "32px"
  tablet-section: "48px"
  directory-section: "64px"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.white}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0 20px"
    height: "50px"
  button-primary-hover:
    backgroundColor: "{colors.accent-dark}"
    textColor: "{colors.white}"
  inline-link:
    textColor: "{colors.accent-dark}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0 0 5px"
  rfq-product-path:
    backgroundColor: "{colors.paper-alt}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "15px 20px"
    height: "82px"
  rfq-product-path-hover:
    backgroundColor: "{colors.accent-dark}"
    textColor: "{colors.white}"
  text-field:
    backgroundColor: "{colors.field-surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "12px 13px"
    height: "48px"
---

# Design System: ZOMEEX B2B Catalogue Homepage

## Overview

**Creative North Star: "Quiet Industrial Catalogue"**

The implemented homepage uses restrained paper surfaces, dark green type, thin dividers, square controls, and real product imagery to keep product evaluation ahead of decoration. Its density is catalogue-like rather than promotional: headings establish hierarchy, supporting copy stays compact, and repeated information is organized by grids and rules.

This is a code-led local extension of the existing ZOMEEX WordPress/WooCommerce theme. The homepage `--zx-*` tokens are the normative values for this surface; the root theme has a closely related `--zomeex-*` family, so new work should continue the token namespace already active on its surface rather than mixing the two families inside one component.

**Key Characteristics:**

- Paper-toned backgrounds with dark green text and a controlled green accent.
- Thin rules and open grids instead of decorative card stacks.
- Square, compact controls with visible keyboard states and minimum 44px targets.
- Product discovery and a qualified inquiry are presented as parallel routes.
- English source copy has localized mappings for Simplified Chinese, Russian, German, and French.

## Colors

The palette is a low-saturation green system: dark botanical text, light paper neutrals, one functional green accent, and white reserved for contrast and form surfaces.

### Primary

- **Functional Green:** Drives primary actions, selected steps, focus treatment, and small status marks.
- **Deep Action Green:** Carries hover states, text links, and the RFQ path reversal state.

### Neutral

- **Botanical Ink:** Default heading and high-emphasis text.
- **Soft Botanical Ink:** Supporting copy and secondary descriptions.
- **Light Paper:** Default homepage surface.
- **Alternate Paper:** RFQ section ground and other quiet tonal bands.
- **Fine Green-Gray Line:** One-pixel grid, section, and field boundaries.
- **Deep Green Field:** Dark hero and high-contrast bands.
- **White and Field Surface:** Form contrast and input fill.

**The Functional Accent Rule.** Green is used to signal action, state, and orientation; large neutral fields continue to carry most of the page.

## Typography

**Display Font:** Avenir Next (with Helvetica Neue, Arial, and sans-serif fallbacks)

**Body Font:** Inherited from the active Woodmart page context

**Character:** Headings are compact, weight-forward, and tightly set. Body copy is quieter, normal case, and optimized for scanning product names, short descriptions, and form instructions.

### Hierarchy

- **Display:** Homepage hero only; the implemented hero uses a 62px desktop size and a near-solid line height.
- **Headline:** Section introductions; responsive sizes stay within the implemented 36-48px range.
- **Title:** Product and feature names; use compact line height and short measures.
- **Body:** Supporting copy; the RFQ route introduction is capped at 64ch and individual path descriptions stay to one concise phrase.
- **Label:** Eyebrows, inline actions, and form labels; uppercase with tracked letters. Product names and descriptions in the RFQ directory remain normal case.

**The Case-by-Function Rule.** Use uppercase tracking for controls and labels, not for product names or explanatory copy.

## Layout

The homepage container is capped at 1488px with 24px side gutters. At 600px and below, the side gutter reduces to 18px. Sections use full-width tonal bands around a constrained inner grid.

The RFQ product directory is a 3-column by 2-row grid above 820px. From 561px through 820px it becomes a complete 2-column by 3-row directory. At 560px and below it becomes a horizontal sequence with `minmax(248px, 78vw)` columns, proximity scroll snapping, container-aligned edge padding, and enough exposed width to reveal the next route. Each route has an 82px minimum height, exceeding the 44px touch-target floor.

The directory precedes the existing three-step inquiry form. This order is intentional: visitors can browse a known product category or continue directly into a cross-category project brief without either route displacing the other.

**The Complete Tablet Directory Rule.** The 561-820px layout shows all six routes in the two-column grid; it does not collapse them into a carousel or disclosure.

## Elevation & Depth

The homepage is flat by default. Depth comes from tonal bands, one-pixel dividers, image scale on hover, and high-contrast state reversal. The RFQ product directory has no shadow, raised tile, or separate card background; its structure is carried by the shared paper surface and line grid.

**The Line-Defined Directory Rule.** RFQ routes remain parts of one continuous directory; elevation must not turn them into a card wall.

## Shapes

Homepage controls, fields, category bodies, and RFQ paths use square corners. Boundaries are thin and structural. Circular geometry is limited to small status marks and does not define the main component language. Other WooCommerce account surfaces retain their existing rounded containers, so square corners are a homepage-local fact rather than a site-wide prohibition.

## Components

### Buttons

- **Shape:** Square, compact, and uppercase; primary homepage buttons use a 50px minimum height and 20px horizontal padding.
- **Primary:** Functional green fill with white text and a matching one-pixel border.
- **Hover / Focus:** Deep action green, with a 2px upward translation on hover or visible focus. Arrow-bearing actions move the arrow 3px right and 3px up.
- **Secondary:** Transparent on dark surfaces, reversing to white on hover or focus.

### Inline Links

- **Style:** Deep action green, uppercase label typography, and a one-pixel current-color underline.
- **Motion:** The shared northeast arrow moves 3px right and 3px up on hover or visible focus.

### Cards / Containers

- **Category cards:** Use a white product-media field, real product imagery, and an unboxed text body finished by a one-pixel divider.
- **Corner Style:** Square.
- **Shadow Strategy:** None on the homepage catalogue and RFQ directory.

### Inputs / Fields

- **Style:** Quiet field surface, one-pixel green-gray border, square corners, 48px minimum height, and inherited type.
- **Focus:** Accent border plus a soft 3px green focus halo.
- **Selection:** Checkbox and radio groups use the accent for the native control and a pale green selected surface.

### Navigation

- **Style:** Catalogue navigation favors concise labels, thin separators, and explicit destination text. The RFQ path group is a semantic `nav` labelled by its section heading.
- **Localization:** Every visible RFQ path heading, description, product name, and follow-on form introduction has mappings for the four non-English homepage locales.

### RFQ Product Paths

This is the homepage Signature Component. It is a six-link product directory, not a card collection: each link contains a product name, one short description, and the same 20px linear northeast arrow. The six WooCommerce category slugs are `mylar-bag`, `preroll-wraps`, `vape-box`, `terpa`, `accessories`, and `machine`; URLs resolve through the product-category term before the existing shop fallback is used.

At rest, the component uses alternate paper, botanical ink, soft supporting copy, and shared dividers. Hover and `:focus-visible` reverse the row to deep action green with white text; focus also keeps a 2px accent outline inset by 3px. The arrow shifts 2px right and 2px up. The full link surface is the target, so the 82px row height and padding remain intact across languages.

**The Dual RFQ Path Rule.** Keep the product directory immediately above the three-step project form so the page supports both known-product browsing and cross-category inquiry.

## Do's and Don'ts

### Do:

- **Do** preserve the RFQ order: route heading, six product links, then the three-step inquiry form.
- **Do** keep the RFQ directory at 3 columns on desktop, 2 columns from 561-820px, and scroll-snap with the next item visible at 560px and below.
- **Do** keep the full link surface at least 44px high and retain the visible 2px focus outline plus color reversal.
- **Do** use the shared linear northeast arrow and keep product names and descriptions in normal case.
- **Do** maintain all five language paths when changing RFQ-visible copy.

### Don't:

- **Don't** restyle the RFQ directory as individually floating or rounded cards.
- **Don't** hide part of the six-item directory behind a tablet carousel or disclosure.
- **Don't** replace verified WooCommerce category resolution with placeholder destinations.
- **Don't** remove the project form when adding product-specific browse routes; the two paths serve different briefs.
