#!/usr/bin/env bash
set -euo pipefail

repo_root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
theme_root="$repo_root/wp-content/themes/woodmart-child"

grep -q "is_404()" "$theme_root/functions.php"
grep -q "404.php" "$theme_root/functions.php"
grep -q "quote_error.*invalid" "$theme_root/functions.php"
grep -q "quote_error.*spam" "$theme_root/functions.php"
grep -q "zomeex_quote_field_limit" "$theme_root/functions.php"
grep -q "zomeex_quote_safe_url" "$theme_root/functions.php"

[ -f "$theme_root/404.php" ]
grep -q "data-quote-submit" "$theme_root/quote-request.php"
grep -q "zomeex_quote_honeypot" "$theme_root/quote-request.php"
grep -q "maxlength=\"" "$theme_root/quote-request.php"

grep -q "normalizeItem" "$theme_root/assets/zomeex-catalog.js"
grep -q "addEventListener('storage'" "$theme_root/assets/zomeex-catalog.js"
grep -q "zomeex-quote-draft" "$theme_root/assets/zomeex-catalog.js"
grep -q "safeStorage" "$theme_root/assets/zomeex-home.js"
grep -q "addEventListener('storage'" "$theme_root/assets/zomeex-home.js"
grep -q "focus-visible" "$theme_root/style.css"
grep -q "forced-colors" "$theme_root/style.css"
grep -q "font-size: 16px" "$theme_root/style.css"

printf 'Phase 4 hardening contract: PASS\n'
