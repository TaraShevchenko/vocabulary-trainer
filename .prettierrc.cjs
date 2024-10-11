/** @type {import("prettier").Config} */
const config = {
  "tabWidth": 4,
  "printWidth": 120,
  "semi": false,
  "singleQuote": true,
  "bracketSpacing": true,
  "bracketSameLine": false,
  "arrowParens": "always",
  "quoteProps": "consistent",
  "trailingComma": "all",
  "importOrder": [
    "^react$",
    "^(next/(.*)$)|^(next$)",
    "<THIRD_PARTY_MODULES>",
    "^kernel/(.*)$",
    "^app/(.*)$",
    "^widgets/(.*)$",
    "^features/(.*)$",
    "^entities/(.*)$",
    "^shared/(.*)$",
    "([.](png|jpg|jpeg|svg))$",
    "^[./]"
  ],
  "importOrderSeparation": true,
  "importOrderSortSpecifiers": true,
  "importOrderParserPlugins": ["jsx", "typescript"],
  "plugins": ["@trivago/prettier-plugin-sort-imports", "prettier-plugin-tailwindcss"],
  "endOfLine": "auto"
}

module.exports = config
