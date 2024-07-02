// .eslintrcファイルは扱いやすくするために拡張子を.jsにして以下のように変更します。
// vercel/next.js/packages/eslint-config-next/index.jsから設定ファイルをコピーしてきて、extendsを変更します。
// fetch や lint　結果のキャッシュが `./next` に残って開発の妨げになる可能性があるので npm script に `rm -rf ./.next` を追加
/** @type {import('eslint').ESLint.ConfigData} */
module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "next/core-web-vitals",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
  },
  plugins: ["import", "@typescript-eslint"],
  root: true,
  rules: {
    "import/order": [
      "error",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          ["parent", "sibling"],
          "object",
          "type",
          "index",
        ],
        "newlines-between": "always",
        pathGroupsExcludedImportTypes: ["builtin"],
        pathGroups: [
          {
            pattern: "@/utils/**",
            group: "internal",
            position: "before",
          },
          {
            pattern: "@/libs/**",
            group: "internal",
            position: "before",
          },
          {
            pattern: "@/hooks/**",
            group: "internal",
            position: "before",
          },
          {
            pattern: "@/components/**",
            group: "internal",
            position: "before",
          },
          {
            pattern: "@/const/**",
            group: "internal",
            position: "before",
          },
          {
            pattern: "@/types/**",
            group: "internal",
            position: "before",
          },
        ],
        alphabetize: {
          order: "asc",
        },
      },
    ],
  },
};
