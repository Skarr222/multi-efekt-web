module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2020: true,
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'next/core-web-vitals'
  ],
  plugins: ['@typescript-eslint'],
  ignorePatterns: ['node_modules/', 'dist/', '.next/'],
  rules: {
    semi: ['error', 'always'],
    quotes: ['error', 'single'],
  },
};