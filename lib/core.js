const merge = require('lodash.merge');

module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  env: { es6: true },
  globals: {
    console: false,
    exports: false,
    global: false,
    module: false,
    require: false,
  },
  plugins: ['import', 'babel'],
  rules: merge(require('./rules/old'), require('./rules/import'), require('./rules/babel')),
};
