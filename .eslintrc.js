module.exports = {
  "parser": "babel-eslint",
  "extends": [
    "airbnb",
    "prettier",
    "prettier/react"
  ],
  "settings": {
    "import/resolver": {
      "node": {
        "extensions": [
          ".js",
          ".ios.js",
          ".android.js"
        ]
      }
    }
  },
  "env": {
    "node": true,
    "es6": true,
    "commonjs": true
  },
  "plugins": [
    "react"
  ],
  "rules": {
    "arrow-body-style": 0,
    "dot-notation": 0,
    "import/extensions": [
      "error",
      "never"
    ],
    "import/prefer-default-export": "off",
    "jsx-quotes": [
      "error",
      "prefer-double"
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "no-alert": 0,
    "no-shadow": 0,
    "no-throw-literal": 0,
    "no-underscore-dangle": 0,
    "no-use-before-define": 0,
    "padded-blocks": 0,
    "quotes": [
      "error",
      "single"
    ],
    "react/forbid-prop-types": [
      0,
      {}
    ],
    "react/no-unused-prop-types": [
      2
    ],
    "react/jsx-boolean-value": 0,
    "react/jsx-filename-extension": [
      1,
      {
        "extensions": [
          ".js",
          ".jsx"
        ]
      }
    ],
    "react/sort-comp": 0,
    "strict": 0,
    "react/prefer-stateless-function": "off"
  },
  "globals": {
    "alert": true,
    "__DEV__": true,
    "fetch": true
  }
};
