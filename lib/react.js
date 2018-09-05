module.exports = {
  parserOptions: {
    ecmaFeatures: { jsx: true },
  },
  plugins: ['react'],
  rules: require('./rules/react'),
};
