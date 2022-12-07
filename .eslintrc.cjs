/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  extends: ["plugin:vue/vue3-essential", "eslint:recommended", "@vue/eslint-config-prettier"],
  parserOptions: {
    ecmaVersion: "latest",
  },
  ignorePatterns: ["src/assets/*", "coverage", "styles", "commitlint.config.js", "src/components/icons/*"],
  rules: {
    "no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
        caughtErrorsIgnorePattern: "^_",
      },
    ],
    semi: [2, "always"],
    quotes: ["warn", "double"],
    "comma-dangle": ["error", "always-multiline"],
    "space-before-function-paren": [
      "error",
      {
        anonymous: "always",
        named: "never",
        asyncArrow: "always",
      },
    ],
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    curly: ["error", "all"],
    "generator-star-spacing": 0,
    "no-multi-spaces": ["error", { ignoreEOLComments: true }],
    "no-multiple-empty-lines": ["error", { max: 2, maxBOF: 1, maxEOF: 1 }],
    eqeqeq: ["error", "always"],
    "prefer-const": "error",
    "max-len": ["error", { code: 120 }],
  },
};
