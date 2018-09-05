module.exports = {
  parserOptions: {
    ecmaVersion: 2015,
    sourceType: 'module',
  },
  env: {
    jest: true,
  },
  plugins: ['jest'],
  rules: require('./rules/jest'),
};
