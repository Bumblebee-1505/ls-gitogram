module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },

  extends: [
    'plugin:vue/essential',
    'standard',
    'plugin:storybook/recommended',
    'plugin:vue/vue3-essential',
    '@vue/standard'
  ],

  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    parser: '@babel/eslint-parser'
  },

  plugins: [
    'vue'
  ],

  rules: {
    'vue/multi-word-component-names': 'off',
    'vue/no-multiple-template-root': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  },

  root: true,

  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        jest: true
      }
    }
  ]
}
