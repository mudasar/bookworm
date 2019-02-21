module.exports = {
    "extends": "airbnb",
    "ecmaFeatures": {
        "modules":true,
        "arrowFunctions":true,
        "classes":true
      },
      "env": {
        "es6": true
      },
      "parser": "babel-eslint",
   "rules": {
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "react/destructuring-assignment": [ "always", { "ignoreClassFields": true }],
        "jsx-a11y/label-has-for": [ 2, {
          "components": [ "Label" ],
          "required": {
              "every": [  "id" ]
          },
          "allowChildren": false
      }]
    }
};