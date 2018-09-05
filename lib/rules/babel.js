// "off" or 0 - turn the rule off
// "warn" or 1 - turn the rule on as a warning (doesn’t affect exit code)
// "error" or 2 - turn the rule on as an error (exit code is 1 when triggered)

module.exports = {
  // Ignores capitalized decorators (@Decorator)
  'babel/new-cap': [2, { newIsCap: true, capIsNew: false }],
  // Doesn't complain about export x from "mod"; or export * as x from "mod";
  'babel/object-curly-spacing': [1, 'always', { objectsInObjects: true }],
  // Doesn't fail when inside class properties
  'babel/no-invalid-this': 2,
  // Rule to flag missing semicolons
  'babel/semi': 0,
};
