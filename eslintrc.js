module.exports = {
  env: {
    browser: true,
  },
  parser: "babel-eslint",
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "prettier", // See https://github.com/prettier/eslint-plugin-prettier
    "prettier/react",
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
    document: false,
    global: false,
    process: false,
    require: false,
    store: false,
    $: false,
    Promise: false,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2021,
    sourceType: "module",
  },
  plugins: ["react", "prettier"],
  rules: {
    "prettier/prettier": "error",
    quotes: [2, "double", { avoidEscape: true }],
    "object-curly-spacing": ["error", "always"],
    "space-before-blocks": ["error", "always"],
    "keyword-spacing": ["error", { before: true, after: true }],
    "comma-dangle": [
      "error",
      {
        arrays: "always-multiline",
        objects: "always-multiline",
        imports: "always-multiline",
        exports: "always-multiline",
        functions: "never",
      },
    ],
    semi: [2, "always"],
    "arrow-parens": ["error", "as-needed"],
    "comma-spacing": ["error", { before: false, after: true }],
    "semi-spacing": ["error", { before: false, after: true }],
    "no-extra-semi": "error",
    "space-infix-ops": "error",
  },
  overrides: [
    {
      files: ["spec/cypress/integration/**/*.js"],
      globals: {
        cy: false,
        it: false,
        context: false,
        before: false,
        after: false,
        describe: false,
        expect: false,
        beforeEach: false,
      },
    },
  ],
  settings: {
    react: {
      createClass: "createReactClass", // Regex for Component Factory to use,
      // default to "createReactClass"
      pragma: "React", // Pragma to use, default to "React"
      version: "detect", // React version. "detect" automatically picks the version you have installed.
      // You can also use `16.0`, `16.3`, etc, if you want to override the detected value.
      // default to latest and warns if missing
      // It will default to "detect" in the future
      flowVersion: "0.53", // Flow version
    },
    propWrapperFunctions: [
      // The names of any function used to wrap propTypes, e.g. `forbidExtraProps`. If this isn't set, any propTypes wrapped in a function will be skipped.
      "forbidExtraProps",
      { property: "freeze", object: "Object" },
      { property: "myFavoriteWrapper" },
    ],
    linkComponents: [
      // Components used as alternatives to <a> for linking, eg. <Link to={ url } />
      "Hyperlink",
      { name: "Link", linkAttribute: "to" },
    ],
  },
};
