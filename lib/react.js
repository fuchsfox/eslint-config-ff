module.exports = {
  settings: {
    react: {
      version: 'detect',
    },
  },
  parserOptions: {
    ecmaFeatures: { jsx: true },
  },
  plugins: ['react'],
  rules: require('./rules/react'),
};
