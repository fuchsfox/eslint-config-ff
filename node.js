const merge = require('lodash.merge');

module.exports = {
  extends: ['./lib/core.js', './lib/react.js', './lib/prettier.js'],
  env: { node: true },
  plugins: ['security'],
  rules: merge(require('./lib/rules/node'), require('./lib/rules/security')),
};
