module.exports = {
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        }
    },
    //extend th default one
    extends: [ "./index.js" ],
    plugins: [
        "react"
    ],
    rules: {
        /**
         *  JSX/React validations
         */
        "react/react-in-jsx-scope": "error",
        "react/jsx-key": "error",
        "react/jsx-uses-vars": "error",
        "react/jsx-uses-react": "error",
        "react/prop-types": "error"
    }
};
