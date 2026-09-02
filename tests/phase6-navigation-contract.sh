#!/usr/bin/env bash
set -euo pipefail

repo_root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
theme_root="$repo_root/wp-content/themes/woodmart-child"
site_url="${1:-http://127.0.0.1:8080/}"
page="$(curl --fail --silent --show-error "$site_url")"

assert_page_contains() {
	local expected="$1"
	if ! grep -Fq -- "$expected" <<<"$page"; then
		printf 'Expected homepage output to include: %s\n' "$expected" >&2
		exit 1
	fi
}

assert_file_contains() {
	local file="$1"
	local expected="$2"
	if ! grep -Fq -- "$expected" "$file"; then
		printf 'Expected %s to include: %s\n' "$file" "$expected" >&2
		exit 1
	fi
}

assert_page_contains 'zomeex-header__utility'
assert_page_contains 'zomeex-account-link'
assert_page_contains 'zomeex-cart-link'
assert_page_contains 'fas fa-search'
assert_page_contains 'fas fa-user'
assert_page_contains 'fas fa-shopping-cart'
assert_page_contains 'data-cart-count'
assert_page_contains 'Account'
assert_page_contains 'Cart'

assert_file_contains "$theme_root/functions.php" 'is_cart()'
assert_file_contains "$theme_root/functions.php" 'is_account_page()'
assert_file_contains "$theme_root/style.css" '.zomeex-header__utility'
assert_file_contains "$theme_root/style.css" '--zomeex-nav-font-size'
assert_file_contains "$theme_root/style.css" 'font-weight: 700;'
assert_file_contains "$theme_root/style.css" 'min-width: 44px;'
assert_file_contains "$theme_root/style.css" '.zomeex-desktop-nav > .zomeex-nav-dropdown:first-child'
assert_file_contains "$theme_root/style.css" 'max-height: calc(100dvh - 124px);'
assert_file_contains "$theme_root/style.css" 'overflow-y: auto;'
assert_file_contains "$theme_root/style.css" '.zomeex-header .zomeex-desktop-nav .zomeex-nav-trigger'
assert_file_contains "$theme_root/style.css" '.zomeex-header .zomeex-language-switcher .zomeex-locale__trigger'
assert_file_contains "$theme_root/functions.php" 'filemtime( $child_style_path )'

printf 'Phase 6 navigation contract: PASS\n'
