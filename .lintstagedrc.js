// {.ts,.tsx} ファイルに対して next lint と prettier をコミット時に実行
// https://nextjs.org/docs/pages/building-your-application/configuring/eslint#lint-staged

const path = require("path");

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(" --file ")}`;

module.exports = {
  "*.{ts,tsx}": [
    // --incremental: 前回のビルドから変更されたファイルのみをコンパイルし、ビルド速度を大幅に向上させる
    // ルートディレクトリにキャッシュ用の tsconfig.tsbuildinfo ファイルが出来てしまう
    // --noEmit: コンパイラにコードの型チェックを実行するように指示
    // ファイルの出力は行わない
    () => "tsc --incremental false --noEmit",
    buildEslintCommand,
    "prettier --write",
  ],
};
