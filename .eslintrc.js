// eslint-disable-next-line no-undef
module.exports = {
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: "module",
  },
  env: {
    es6: true,
    browser: true,
    jest: true,
  },
  plugins: ["svelte3", "jest"],
  extends: "eslint:recommended",
  overrides: [
    {
      files: ["*.svelte"],
      processor: "svelte3/svelte3",
    },
  ],
  rules: {},
  settings: {},
};
