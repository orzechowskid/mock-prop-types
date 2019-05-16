module.exports = {
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaVersion": 2017,
        "sourceType": "module"
    },
    "plugins": [ "react" ],
    "env": {
        "es6": true,
        "node": true
    },
    "root": true,
    "rules": {
        "array-bracket-spacing": [ "warn", "always", {
            "objectsInArrays": false
        } ],
        "arrow-body-style": [ "warn", "as-needed" ],
        "arrow-parens": [ "warn", "always" ],
        "comma-dangle": [ "warn", "never" ],
        "func-names": "off",
        "function-paren-newline": "off",
        "indent": [ "warn", 4, {
            "SwitchCase": 1
        } ],
        "no-console": [ "error", {
            "allow": [ "info", "warn", "error" ]
        } ],
        "no-extra-semi": "warn",
        "no-plusplus": [ "warn", {
            "allowForLoopAfterthoughts": true
        } ],
        "no-trailing-spaces": "warn",
        "no-undef": "error",
        "no-unused-vars": [ "warn", {
            "ignoreRestSiblings": true
        } ],
        "operator-linebreak": "off",
        "prefer-arrow-callback": "off",
        "prefer-destructuring": [ "warn" ],
        "quotes": "off",
        "space-before-function-paren": [ "warn", {
            "anonymous": "never",
            "asyncArrow": "always",
            "named": "never"
        } ]
    }
};
