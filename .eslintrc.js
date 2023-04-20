module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  overrides: [
  ],


  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    "react/react-in-jsx-scope": "off",
    "quotes": ["error", "double"],
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "react/jsx-props-no-spreading": ["warn"],
    "no-undef": "off",
    "no-shadow": "off",
    "camelcase": "off",
    "no-unexpected-multiline": "error",
    "eslint-disable-next-line": "off",
    "import/prefer-default-export": "off",
    "react/no-unescaped-entities": "off",
    "jsx-a11y/label-has-associated-control": [
      "error",
      {
        "required": {
          "some": ["nesting", "id"]
        }
      }
    ],
    "jsx-a11y/label-has-for": [
      "error",
      {
        "required": {
          "some": ["nesting", "id"]
        }
      }
    ],
    "linebreak-style": "off",
    "object-curly-spacing": "off",
    "indent": "off",
    "comma-dangle": "off",
    "require-jsdoc": "off",
    "arrow-parens": "off",
    "padded-blocks": "off",
    "react/react-in-jsx-scope": "off",
    "no-unused-vars": "off",
    "react/prop-types": 0
  },
};
