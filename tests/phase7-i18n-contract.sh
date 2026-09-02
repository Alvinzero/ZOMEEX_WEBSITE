#!/usr/bin/env bash
set -euo pipefail

repo_root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
theme_root="$repo_root/wp-content/themes/woodmart-child"
i18n_file="$theme_root/assets/zomeex-i18n.js"

assert_file_contains() {
	local file="$1"
	local expected="$2"
	if [[ ! -f "$file" ]] || ! grep -Fq -- "$expected" "$file"; then
		printf 'Expected %s to include: %s\n' "$file" "$expected" >&2
		exit 1
	fi
}

assert_file_contains "$i18n_file" "zh-CN"
assert_file_contains "$i18n_file" "ru"
assert_file_contains "$i18n_file" "de"
assert_file_contains "$i18n_file" "fr"
assert_file_contains "$i18n_file" "nav.cart"
assert_file_contains "$i18n_file" "aria-label"
assert_file_contains "$i18n_file" "data-zomeex-i18n"
assert_file_contains "$i18n_file" "Before proceed to checkout you must add some products to your shopping cart. You will find a lot of interesting products on our \"Shop\" page."
assert_file_contains "$i18n_file" "继续结算前，请先将产品加入购物车。你可以在产品目录中查看可选产品。"
assert_file_contains "$i18n_file" "Перед оформлением заказа добавьте товары в корзину. Выберите подходящие варианты в каталоге."
assert_file_contains "$i18n_file" "Fügen Sie Artikel in den Warenkorb, bevor Sie zur Kasse gehen. Im Katalog finden Sie passende Produkte."
assert_file_contains "$i18n_file" "Ajoutez des articles au panier avant de passer la commande. Consultez le catalogue pour découvrir les produits disponibles."

assert_file_contains "$theme_root/functions.php" "zomeex-i18n"
assert_file_contains "$theme_root/header.php" "notranslate"
assert_file_contains "$theme_root/header.php" "translate=\"no\""
assert_file_contains "$theme_root/style.css" "html[data-zomeex-locale=\"zh-CN\"]"
assert_file_contains "$theme_root/style.css" "html[data-zomeex-locale=\"ru\"]"
assert_file_contains "$theme_root/style.css" "html[data-zomeex-locale=\"de\"]"
assert_file_contains "$theme_root/style.css" "html[data-zomeex-locale=\"fr\"]"

# Locale changes must always translate from the original source text, even
# when a previous locale replaced the text node in the DOM.
assert_file_contains "$i18n_file" "data-zomeex-source-text"
assert_file_contains "$i18n_file" "sourceForTextNode"
assert_file_contains "$theme_root/functions.php" "'1.0.12'"

printf 'Phase 7 i18n contract: PASS\n'
