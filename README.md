# eslint-config-ff
ESLint config of FUCHSFOX

## Setup

1. run `yarn add -D @fuchsfox/eslint-config-ff` or `npm i -D @fuchsfox/eslint-config-ff`

2. Install the correct versions of each package, which are listed by the command:

    `npm info "eslint-config-ff@latest" peerDependencies`

3. Add the following to your `.eslintrc` depending on your platform

  *single extensions*
   ```
   {
     "extends": "@fuchsfox/ff/native"
   }
   ```
   ```
   {
     "extends": "@fuchsfox/ff/browser"
   }
   ```
   *multiple extensions*
   ```
   {
     "extends": [
        "@fuchsfox/ff/node", 
        "@fuchsfox/ff/browser"
     ]
   }
   ```

As soon as you add a `prettier.rc` you'll overwrite the prettier-config, even if your file is empty.
