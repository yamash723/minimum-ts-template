module.exports = {
  extends: ["eslint:recommended", "plugin:prettier/recommended"],
  plugins: ["@typescript-eslint", 'prettier', "jest"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
    project: "./tsconfig.json"
  },
  env: {
    browser: true,
    node: true,
    es6: true,
    "jest/globals": true
  },
  rules: {
    "no-console": "warn",
    "@typescript-eslint/adjacent-overload-signatures": "warn",
    "@typescript-eslint/no-unnecessary-type-assertion": "error",
  }
}
