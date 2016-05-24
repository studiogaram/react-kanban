module.exports = {
    "env": {
        "browser": true,
        "es6": true,
    },
    "extends": "airbnb",
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "indent": [
            "error",
            2
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        "arrow-body-style": [
            "error",
            "as-needed"
        ],
        "jsx-no-bind": [<enabled>, {
          "ignoreRefs": false,
          "allowArrowFunctions": false,
          "allowBind": true
        }]
    }
};