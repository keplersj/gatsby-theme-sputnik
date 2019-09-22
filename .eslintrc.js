module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:prettier/recommended",
    "prettier",
    "plugin:react/recommended",
    "prettier/react",
    "plugin:jest/recommended"
  ],
  settings: {
    react: {
      version: "detect" // React version. "detect" automatically picks the version you have installed.
    }
  },
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    ecmaVersion: 9,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  }
};
