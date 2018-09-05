// "off" or 0 - turn the rule off
// "warn" or 1 - turn the rule on as a warning (doesn’t affect exit code)
// "error" or 2 - turn the rule on as an error (exit code is 1 when triggered)

module.exports = {
  // Static analysis

  // Ensure imports point to a file/module that can be resolved.
  'import/no-unresolved': 2,
  // Ensure named imports correspond to a named export in the remote file.
  'import/named': 2,
  // Ensure a default export is present, given a default import.
  'import/default': 0,
  // Ensure imported namespaces contain dereferenced properties as they are dereferenced.
  'import/namespace': 0,
  // Forbid require() calls with expressions
  'import/no-dynamic-require': 0,
  // Prevent importing the submodules of other modules
  'import/no-internal-modules': 0,
  // Reports use of a default export as a locally named import.
  'import/no-named-default': 2,
  // Restrict which files can be imported in a given folder
  'import/no-restricted-paths': 0,
  // Forbid import of modules using absolute paths
  'import/no-absolute-path': 2,
  // Forbid Webpack loader syntax in imports
  'import/no-webpack-loader-syntax': 2,
  // Ensures that there are no useless path segments
  'import/no-useless-path-segments': 2,

  // Helpful warnings

  // Report any invalid exports, i.e. re-export of the same name
  'import/export': 2,
  // Force exports to be declared at the bottom of the file
  'import/exports-last': 0,
  // Report use of exported name as identifier of default export
  'import/no-named-as-default': 2,
  // Report use of exported name as property of default export
  'import/no-named-as-default-member': 2,
  // Report imported names marked with @deprecated documentation tag
  'import/no-deprecated': 2,
  // Forbid the use of extraneous packages
  'import/no-extraneous-dependencies': 2,
  // Forbid the use of mutable exports with var or let.
  'import/no-mutable-exports': 2,
  // Forbid a module from importing itself
  'import/no-self-import': 2,

  // Module systems

  // Report potentially ambiguous parse goal (script vs. module)
  'import/unambiguous': 0,
  // Report CommonJS require calls and module.exports or exports.*.
  'import/no-commonjs': 0,
  // Report AMD require and define calls.
  'import/no-amd': 0,
  // No Node.js builtin modules.
  'import/no-nodejs-modules': 0,

  // Style guide

  // Ensure all imports appear before other statements
  'import/first': 2,
  // Report repeated import of the same module in multiple places
  'import/no-duplicates': 2,
  // Report namespace imports
  'import/no-namespace': 0,
  // Ensure consistent use of file extension within the import path
  'import/extensions': [
    2,
    {
      js: 'never',
      json: 'always',
      svg: 'always',
      png: 'always',
      jpg: 'always',
      ico: 'always',
      graphql: 'always',
      css: 'always',
      sass: 'always',
      scss: 'always',
      less: 'always',
      styl: 'always',
    },
  ],
  // Enforce a convention in module import order
  'import/order': [
    2,
    {
      groups: [['builtin', 'external'], ['internal', 'parent', 'sibling']],
    },
  ],
  // Enforce a newline after import statements
  'import/newline-after-import': 2,
  // Prefer a default export if module exports a single name
  'import/prefer-default-export': 0,
  // Limit the maximum number of dependencies a module can have
  'import/max-dependencies': 0,
  // Forbid unassigned imports
  'import/no-unassigned-import': 0,
  // Forbid anonymous values as default exports
  'import/no-anonymous-default-export': 0,
  // Prohibit default exports. Mostly an inverse of prefer-default-export.
  'import/no-default-export': 0,
  // Reports when named exports are not grouped together in a single export declaration or when multiple assignments to CommonJS module.exports or exports object are present in a single file.
  'import/group-exports': 0,
};
