#!/usr/bin/env bash
set -euo pipefail

repo_root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
theme_root="$repo_root/wp-content/themes/woodmart-child"

grep -q "function zomeex_is_content_route" "$theme_root/functions.php"
grep -q "function zomeex_output_seo_head" "$theme_root/functions.php"
grep -q "function zomeex_output_schema" "$theme_root/functions.php"
grep -q "insights.php" "$theme_root/functions.php"
grep -q "single-insight.php" "$theme_root/functions.php"
grep -q "about.php" "$theme_root/functions.php"
grep -q "contact.php" "$theme_root/functions.php"

for template in insights.php single-insight.php about.php contact.php; do
	[ -f "$theme_root/$template" ]
done

grep -q 'application/ld+json' "$theme_root/functions.php"
grep -q 'zomeex-content' "$theme_root/style.css"
grep -q 'zomeex-insights' "$theme_root/style.css"
grep -q 'zomeex-contact' "$theme_root/style.css"

printf 'Phase 3 content contract: PASS\n'
