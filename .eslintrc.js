module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaFeatures: {
      js: true
    },
    ecmaVersion: 6,
    sourceType: 'module'
  },
  plugins: ['react', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'linebreak-style': ['error', 'windows'],
    'react/jsx-filename-extension': [1, { extensions: ['.js'] }],
    'eslint quotes': ['error', 'single', { allowTemplateLiterals: true }],
    'comma-dangle': ['error', 'never']
  }
};
