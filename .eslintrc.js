module.exports = {
  extends: ["airbnb-base", "airbnb-typescript", "prettier"],
  plugins: ["import", "prettier", "@typescript-eslint"],
  ignorePatterns: ["dist/", "node_modules/"],
  env: {
    es6: true,
    browser: true,
  },
  parserOptions: {
    project: ["tsconfig.json", "tsconfig.node.json"],
  },
  parser: "@typescript-eslint/parser",
  rules: {
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-shadow": "error",
    "@typescript-eslint/no-use-before-define": "off",
    camelcase: "off",
    "no-shadow": "off",
    "no-use-before-define": "off",
    "padding-line-between-statements": [
      "error",
      {
        blankLine: "always",
        next: "*",
        prev: ["const", "let", "var"],
      },
      {
        blankLine: "any",
        next: ["const", "let", "var"],
        prev: ["const", "let", "var"],
      },
      {
        blankLine: "always",
        next: "return",
        prev: "*",
      },
      {
        blankLine: "never",
        next: "*",
        prev: ["case", "default"],
      },
      {
        blankLine: "always",
        next: "*",
        prev: ["multiline-const"],
      },
    ],
    "react/jsx-filename-extension": "off",
    "prettier/prettier": ["error"],
    quotes: ["error", "double"],
    semi: ["error", "always"],
    "import/extensions": "off",
    "import/prefer-default-export": "off",
  },
  overrides: [
    {
      files: ["webpack.config.js", ".eslintrc.js", "babel.config.js"],
      env: {
        node: true,
      },
      rules: {
        "import/no-extraneous-dependencies": "off",
        "import/no-relative-packages": "off",
        "no-undef": "off",
      },
    },
  ],
};
