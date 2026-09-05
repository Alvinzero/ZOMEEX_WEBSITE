#!/usr/bin/env bash
set -euo pipefail

repo_root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
theme_root="$repo_root/wp-content/themes/woodmart-child"
site_url="${1:-http://127.0.0.1:8080/}"
page="$(curl --fail --silent --show-error "$site_url")"
style_file="$theme_root/assets/zomeex-home.css"
style_sheet="$(<"$style_file")"

assert_contains() {
	local expected="$1"
	if ! grep -Fq "$expected" <<<"$page"; then
		printf 'Expected homepage output to include: %s\n' "$expected" >&2
		exit 1
	fi
}

assert_not_contains() {
	local unexpected="$1"
	if grep -Fq "$unexpected" <<<"$page"; then
		printf 'Expected homepage output not to include: %s\n' "$unexpected" >&2
		exit 1
	fi
}

assert_style_contains() {
	local expected="$1"
	if ! grep -Fq "$expected" <<<"$style_sheet"; then
		printf 'Expected homepage stylesheet to include: %s\n' "$expected" >&2
		exit 1
	fi
}

assert_file_contains() {
	local file="$1"
	local expected="$2"
	if ! grep -Fq "$expected" "$file"; then
		printf 'Expected %s to include: %s\n' "$file" "$expected" >&2
		exit 1
	fi
}

assert_css_block_contains() {
	local selector="$1"
	local expected="$2"
	local block
	block="$(awk -v selector="$selector" '$0 == selector { found = 1 } found { print } found && /^}/ { exit }' "$style_file")"
	if ! grep -Fq "$expected" <<<"$block"; then
		printf 'Expected %s to include: %s\n' "$selector" "$expected" >&2
		exit 1
	fi
}

assert_contains 'id="zx-hero-title"'
assert_contains 'id="zx-categories-title"'
assert_contains 'id="zomeex-applications"'
assert_contains 'id="zx-finishes-title"'
assert_contains 'id="zomeex-capability-title"'
assert_contains 'id="zx-rfq"'
assert_contains 'data-rfq-stepper'
assert_contains 'name="quote_return" value="home"'
assert_contains 'zomeex-packaging-hero.png'
assert_not_contains 'id="zomeex-solution-title"'

assert_style_contains '.zx-hero {'
assert_style_contains '.zx-category-grid {'
assert_style_contains '.zx-rfq-steps {'
assert_style_contains 'grid-template-columns: 1fr !important;'
assert_css_block_contains '.zomeex-home-page .zx-hero__product-media {' 'background: transparent;'
assert_css_block_contains '.zomeex-home-page .zx-hero__product-media img {' 'object-fit: contain;'
assert_style_contains '@media (prefers-reduced-motion: reduce)'
assert_file_contains "$theme_root/functions.php" "'zomeex-home'"
assert_file_contains "$theme_root/functions.php" "'/assets/zomeex-home.css'"

printf 'Phase 5 project path contract: PASS\n'
