// "off" or 0 - turn the rule off
// "warn" or 1 - turn the rule on as a warning (doesn’t affect exit code)
// "error" or 2 - turn the rule on as an error (exit code is 1 when triggered)

module.exports = {
  'jest/no-disabled-tests': 2,
  'jest/no-focused-tests': 2,
  'jest/no-identical-title': 2,
  'jest/valid-expect': 2,
};
