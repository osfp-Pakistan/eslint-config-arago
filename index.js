/**
 *  ESLint config for Arago JS projects.
 *
 *  Sensible defaults, obviously you can extend/amend per-project.
 */
module.exports = {
    parser: "babel-eslint",
    parserOptions: {
        // assume ES6 as default.
        ecmaVersion: 6,
        // Always use es2015 module import/export for synchronous modules
        // and webpack's require.ensure/System.import for async
        sourceType: "module",
        // always strict.
        ecmaFeatures: {
            impliedStrict: true
        }
    },
    //We write for maximum isomorphism node and browser.
    env: {
      node: true,
      browser: true,
      es6: true
    },
    // rules, I list as many as possible to be explicit
    "rules": {
        /**
         * Possible errors
         */
        "comma-dangle": "error",
        "no-cond-assign": "error",
        "no-console": "off",
        "no-constant-condition": "error",
        "no-control-regex": "error",
        "no-debugger": "off",
        "no-dupe-args": "error",
        "no-dupe-keys": "error",
        "no-duplicate-case": "error",
        "no-empty": "error",
        "no-empty-character-class": "error",
        "no-ex-assign": "error",
        "no-extra-boolean-cast": "error",
        "no-extra-parens": "off",
        "no-extra-semi": "error",
        "no-func-assign": "error",
        "no-inner-declarations": "error",
        "no-invalid-regexp": "error",
        "no-irregular-whitespace": "error",
        "no-negated-in-lhs": "error",
        "no-obj-calls": "error",
        "no-regex-spaces": "error",
        "no-sparse-arrays": "error",
        "no-unexpected-multiline": "error",
        "no-unreachable": "error",
        "no-unsafe-finally": "error",
        "use-isnan": "error",
        "valid-jsdoc": "off",
        "valid-typeof": "error",

        /**
         * Best Practices
         */
        "accessor-pairs": "error",
        "array-callback-return": "off",
        "block-scoped-var": "error",
        "complexity": "off",
        "consistent-return": "off",
        "curly": "error",
        "default-case": "error",
        //always put the dot with the property, not the object if multiline
        "dot-location": ["error", "property"],
        "dot-notation": "error",
        "eqeqeq": "error",
        "guard-for-in": "error",
        "no-alert": "warn",
        "no-caller": "error",
        "no-case-declarations": "off",
        "no-div-regex": "error",
        "no-else-return": "off",
        "no-empty-function": "off",
        "no-empty-pattern": "error",
        "no-eq-null": "error",
        "no-eval": "error",
        "no-extend-native": ["error", { "exceptions": ["Error"] }],
        "no-extra-bind": "error",
        "no-extra-label": "error",
        "no-fallthrough": "error",
        "no-floating-decimal": "error",
        "no-implicit-coercion": "off",
        "no-implicit-globals": "error",
        "no-implied-eval": "error",
        "no-invalid-this": "error",
        "no-iterator": "error",
        "no-labels": "error",
        "no-lone-blocks": "error",
        "no-loop-func": "error",
        "no-magic-numbers": "off",
        "no-multi-spaces": "error",
        "no-multi-str": "error",
        "no-native-reassign": "error",
        "no-new": "error",
        "no-new-func": "error",
        "no-new-wrappers": "error",
        "no-octal": "error",
        "no-octal-escape": "error",
        "no-param-reassign": "error",
        "no-proto": "error",
        "no-redeclare": "error",
        //this is not recommended, but useful in arrow functions.
        "no-return-assign": "off",
        "no-script-url": "error",
        "no-self-assign": "error",
        "no-self-compare": "error",
        "no-sequences": "off",
        "no-throw-literal": "error",
        "no-unmodified-loop-condition": "error",
        "no-unused-expressions": "error",
        "no-unused-labels": "error",
        "no-useless-call": "error",
        "no-useless-concat": "error",
        "no-useless-escape": "error",
        "no-void": "error",
        "no-warning-comments": "off",
        "no-with": "error",
        "radix": "error",
        "vars-on-top": "warn",
        "wrap-iife": "error",
        "yoda": "off",

        /**
         *  Strict mode
         */
        // don't use it -- it is implied
        "strict": "error",

        /**
         *  Variables
         */
        "init-declarations": "off",
        "no-catch-shadow": "error",
        "no-delete-var": "error",
        "no-label-var": "error",
        "no-restricted-globals": "off",
        "no-shadow": "error",
        "no-shadow-restricted-names": "error",
        "no-undef": "error",
        "no-undef-init": "error",
        "no-undefined": "off",
        "no-unused-vars": "error",
        "no-use-before-define": "off",

        /**
         *  Node.js and CommonJS
         */
        "callback-return": "off",
        "global-require": "error",
        "handle-callback-err": "error",
        "no-mixed-requires": "error",
        "no-new-require": "error",
        "no-path-concat": "error",
        "no-process-env": "off",
        "no-process-exit": "off",
        "no-restricted-modules": "off",
        //it *is* fine to use sync functions, but
        //be aware. Hopefully you are writing a one-off cli script
        "no-sync": "warn",

        /**
         *  Stylistic Issues
         */
        "array-bracket-spacing": ["error", "never"],
        "block-spacing": ["error", "always"],
        //1 true brace style
        "brace-style": ["error", "1tbs"],
        "camelcase": ["error", { properties: "never" }],
        "comma-spacing": ["error", { before: false, after: true }],
        "comma-style": "error",
        "computed-property-spacing": "error",
        "consistent-this": "off",
        "eol-last": "error",
        "func-names": "off",
        "func-style": "off",
        "id-blacklist": "off",
        "id-length": "off",
        "id-match": "off",
        "indent": ["error", 4, { SwitchCase: 1 }],
        "jsx-quotes": "error",
        "key-spacing": "error",
        "keyword-spacing": "error",
        "linebreak-style": ["error", "unix"],
        "lines-around-comment": "off",
        "max-depth": "off",
        "max-len": "off",
        "max-nested-callbacks": "off",
        "max-params": ["error", { max: 5 }],
        "max-statements": "off",
        "max-statements-per-line": "off",
        "new-cap": "off",
        "new-parens": "error",
        "newline-after-var": "off",
        "newline-before-return": "off",
        "newline-per-chained-call": "off",
        "no-array-constructor": "error",
        "no-bitwise": "off",
        "no-continue": "off",
        "no-inline-comments": "off",
        "no-lonely-if": "error",
        "no-mixed-spaces-and-tabs": "error",
        "no-multiple-empty-lines": "error",
        "no-negated-condition": "off",
        "no-nested-ternary": "error",
        "no-new-object": "error",
        "no-plusplus": "off",
        "no-restricted-syntax": "off",
        "no-spaced-func": "error",
        "no-ternary": "off",
        "no-trailing-spaces": "error",
        "no-underscore-dangle": "off",
        "no-unneeded-ternary": "off",
        "no-whitespace-before-property": "error",
        "object-curly-spacing": ["error", "always"],
        "object-property-newline": "off",
        "one-var": ["error", { uninitialized: "always", initialized: "never" }],
        "one-var-declaration-per-line": "off",
        "operator-assignment": "off",
        "operator-linebreak": "off",
        "padded-blocks": ["error", "never"],
        "quote-props": "off",
        "quotes": ["error", "double", { "allowTemplateLiterals": true }],
        "require-jsdoc": "off",
        "semi": ["error", "always"],
        "semi-spacing": "error",
        "sort-vars": "off",
        "space-before-blocks": "error",
        "space-before-function-paren": ["error", "never"],
        "space-in-parens": "error",
        "space-infix-ops": "error",
        "space-unary-ops": "error",
        "spaced-comment": "off",
        "wrap-regex": "off",

        /**
         *  ES2105 options
         */
        "arrow-body-style": "off",
        "arrow-parens": "off",
        "arrow-spacing": "error",
        "constructor-super": "error",
        "generator-star-spacing": "off",
        "no-class-assign": "error",
        "no-confusing-arrow": "off",
        "no-const-assign": "error",
        "no-dupe-class-members": "error",
        "no-duplicate-imports": "error",
        "no-new-symbol": "error",
        "no-restricted-imports": "off",
        "no-this-before-super": "error",
        "no-useless-computed-key": "error",
        "no-useless-constructor": "error",
        "no-var": "error",
        "object-shorthand": "off",
        "prefer-arrow-callback": "off",
        "prefer-const": "error",
        "prefer-reflect": "off",
        "prefer-rest-params": "error",
        "prefer-spread": "error",
        "prefer-template": "off",
        "require-yield": "off",
        "sort-imports": "off",
        "template-curly-spacing": "error",
        "yield-star-spacing": "error"
    }
};
