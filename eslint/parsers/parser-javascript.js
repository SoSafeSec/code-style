module.exports = {
    parser: 'babel-eslint', // Specifies the ESLint parser
    parserOptions: {
        sourceType: 'module', // Allows for the use of imports
        ecmaFeatures: {
            jsx: true, // Allows for the parsing of JSX
        },
    },
};
