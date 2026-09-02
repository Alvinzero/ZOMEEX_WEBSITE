#!/usr/bin/env bash
set -euo pipefail

site_url="${1:-http://127.0.0.1:8080/}"
page="$(curl --fail --silent --show-error "$site_url")"
style_file="wp-content/themes/woodmart-child/style.css"
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

assert_contains 'id="zomeex-solution-title"'
assert_contains 'id="zomeex-process-title"'
assert_contains 'id="zomeex-procurement-title"'
assert_contains 'id="zomeex-quote-paths-title"'
assert_contains 'Explore by product family'
assert_contains 'Build a quote list'
assert_contains 'Start a project brief'
assert_not_contains 'Built for specification'

assert_style_contains '.zomeex-solutions__grid {'
assert_style_contains '"intro intro vape vape"'
assert_style_contains '"pack pack switch boost";'
assert_style_contains '.zomeex-quote-paths__grid {'
assert_style_contains '.zomeex-solutions__grid {'
assert_style_contains 'grid-template-columns: 1fr;'
assert_style_contains 'object-position: right center;'
assert_css_block_contains '.zomeex-solution__image {' 'min-height: 0;'
assert_css_block_contains '.zomeex-solution__image img {' 'position: absolute;'
assert_style_contains '@media (prefers-reduced-motion: reduce)'

printf 'Phase 5 project path contract: PASS\n'
