module.exports = {
    extends: [
        'eslint-config-airbnb-base/rules/best-practices.js',
        'eslint-config-airbnb-base/rules/errors.js',
        'eslint-config-airbnb-base/rules/node.js',
        'eslint-config-airbnb-base/rules/style.js',
        'eslint-config-airbnb-base/rules/variables.js',
        'eslint-config-airbnb-base/rules/es6.js',
        'plugin:import/errors',
        'plugin:import/warnings',
    ],
    // we should check if all these are still necessary with es2020/Node 14.5
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
        __DEV__: true,
        idx: true,
        TIMING: 'readonly',
    },
    plugins: ['import'],
    // this may be obsolete - we shall see
    /* settings: {
        'import/resolver': {
            node: {
                paths: [
                    'src',
                ],
            },
        },
    }, */
    rules: {
        // regarding imports
        'import/named': 2,
        'import/namespace': 2,
        'import/default': 2,
        'import/export': 2,
        'sort-imports': [
            'error',
            {
                ignoreCase: true,
                ignoreDeclarationSort: true,
                ignoreMemberSort: true,
            },
        ],
        // misc rules
        'arrow-body-style': ['error', 'as-needed'],
        'class-methods-use-this': 'off',
        'dot-notation': ['off'],
        'max-classes-per-file': 'off',
        'no-param-reassign': ['error', { props: false }],
        'no-restricted-syntax': ['off', 'BinaryExpression[operator=\'in\']'],
        'no-return-assign': 'off',
        'object-curly-newline': 'off',

        'prefer-destructuring': [
            'error',
            {
                array: false,
                object: false,
            },
        ],
    },
};
