// .eslintrcファイルは扱いやすくするために拡張子を.jsにして以下のように変更します。
// vercel/next.js/packages/eslint-config-next/index.jsから設定ファイルをコピーしてきて、extendsを変更します。
// fetch や lint　結果のキャッシュが `./next` に残って開発の妨げになる可能性があるので npm script に `rm -rf ./.next` を追加
/** @type {import('eslint').ESLint.ConfigData} */
module.exports = { extends: ["next/core-web-vitals", "prettier"] };
