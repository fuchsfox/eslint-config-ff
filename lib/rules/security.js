// "off" or 0 - turn the rule off
// "warn" or 1 - turn the rule on as a warning (doesn’t affect exit code)
// "error" or 2 - turn the rule on as an error (exit code is 1 when triggered)

module.exports = {
  'security/detect-buffer-noassert': 1,
  'security/detect-child-process': 1,
  'security/detect-disable-mustache-escape': 1,
  'security/detect-eval-with-expression': 1,
  'security/detect-new-buffer': 1,
  'security/detect-no-csrf-before-method-override': 1,
  'security/detect-non-literal-fs-filename': 0,
  'security/detect-non-literal-regexp': 1,
  'security/detect-non-literal-require': 1,
  'security/detect-object-injection': 1,
  'security/detect-possible-timing-attacks': 1,
  'security/detect-pseudoRandomBytes': 1,
  'security/detect-unsafe-regex': 1,
};
