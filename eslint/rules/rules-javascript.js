module.exports = {
    extends: [
        'eslint-config-airbnb-base/rules/best-practices.js',
        'eslint-config-airbnb-base/rules/errors.js',
        'eslint-config-airbnb-base/rules/node.js',
        'eslint-config-airbnb-base/rules/style.js',
        'eslint-config-airbnb-base/rules/variables.js',
        'eslint-config-airbnb-base/rules/es6.js',
    ],
    // we should check if all these are still necessary with es2020/Node 14.5
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
        __DEV__: true,
        idx: true,
        TIMING: 'readonly',
    },
    rules: {
        'arrow-body-style': ['error', 'as-needed'],
        'class-methods-use-this': 'off',
        'dot-notation': ['off'],
        'max-classes-per-file': 'off',
        'no-param-reassign': ['error', { props: false }],
        'no-restricted-syntax': ['off', 'BinaryExpression[operator=\'in\']'],
        'no-return-assign': 'off',
        'object-curly-newline': 'off',

        'no-use-before-define': [
            'error',
            {
                functions: false,
                classes: true,
                variables: true,
            },
        ],

        'prefer-destructuring': [
            'error',
            {
                array: false,
                object: false,
            },
        ],
    },
};
