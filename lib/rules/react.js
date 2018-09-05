// "off" or 0 - turn the rule off
// "warn" or 1 - turn the rule on as a warning (doesn’t affect exit code)
// "error" or 2 - turn the rule on as an error (exit code is 1 when triggered)

module.exports = {
  // Prevent missing displayName in a React component definition
  'react/display-name': 0,
  // Prevent multiple component definition per file
  'react/no-multi-comp': 0,
  // Prevent usage of unknown DOM property
  'react/no-unknown-property': 0,
  // Prevent missing props validation in a React component definition
  'react/prop-types': 2,
  // Prevent missing React when using JSX
  'react/react-in-jsx-scope': 0,
  // Prevent extra closing tags for components without children
  'react/self-closing-comp': 1,
  // Prevent usage of setState in componentDidMount
  'react/no-did-mount-set-state': 1,
  // Prevent usage of setState in componentDidUpdate
  'react/no-did-update-set-state': 1,

  // JSX
  'jsx-quotes': [1, 'prefer-double'],
  // Disallow undeclared variables in JSX
  'react/jsx-no-undef': 2,
  // Prevent missing parentheses around multilines JSX
  'react/jsx-wrap-multilines': 2,
  // Enforce boolean attributes notation in JSX
  'react/jsx-boolean-value': 0,
  // Enforce props alphabetical sorting
  'react/jsx-sort-props': 0,
  // Prevent React to be incorrectly marked as unused
  'react/jsx-uses-react': 1,
  // Prevent variables used in JSX to be incorrectly marked as unused
  'react/jsx-uses-vars': 1,
  // Restrict file extensions that may contain JSX
  'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
};
