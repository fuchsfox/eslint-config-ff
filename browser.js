module.exports = {
  extends: ['./lib/core.js', './lib/react.js', './lib/prettier.js'],
  env: { browser: true, commonjs: true },
  plugins: ['xss'],
  globals: {
    window: true,
  },
  rules: require('./lib/rules/xss'),
};
