module.exports = {
    parser: 'babel-eslint',
    env: {
        browser: true,
        es6: true,
    },
    extends: [
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:react/recommended',
        'airbnb',
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
        __DEV__: true,
        idx: true,
        TIMING: 'readonly',
    },
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    plugins: [
        'react',
        'import',
    ],
    ignorePatterns: ['node_modules/'],
    settings: {
        'import/resolver': {
            node: {
                paths: [
                    'src',
                ],
            },
        },
    },
    rules: {
        'import/named': 2,
        'import/namespace': 2,
        'import/default': 2,
        'import/export': 2,
        'linebreak-style': 'off', // should be off, because of problems between apple and windoof
        indent: ['error', 4, { SwitchCase: 1 }],
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        quotes: ['error', 'single'],
        'jsx-quotes': ['error', 'prefer-single'],
        'react/jsx-filename-extension': 'off',
        'react/jsx-fragments': ['error', 'element'],
        camelcase: ['warn'],
        'sort-imports': [
            'error',
            {
                ignoreCase: true,
                ignoreDeclarationSort: true,
                ignoreMemberSort: true,
            },
        ],
        'react/sort-comp': [1,
            {
                order: [
                    'lifecycle',
                    '/^onCom.+$/',
                    'getDerivedStateFromError',
                    'render',
                    'static-methods',
                    'everything-else',
                ],
            },
        ],
        'no-use-before-define': [
            'error',
            {
                functions: false,
                classes: true,
                variables: true,
            },
        ],
        'class-methods-use-this': 'off',
        'react/destructuring-assignment': [
            'off', 'always',
        ],
        'prefer-destructuring': [
            'error',
            {
                array: false,
                object: false,
            },
        ],
        'no-param-reassign': ['error', { props: false }],
        'no-return-assign': ['off'],
        'react/prop-types': 1,
        'react/jsx-one-expression-per-line': 'off',
        'dot-notation': ['off'],
        'react/no-did-update-set-state': 'off',
        'arrow-body-style': ['error', 'as-needed'],
        'no-restricted-syntax': ['off', 'BinaryExpression[operator=\'in\']'],
        'no-plusplus': 'off',
        'no-multiple-empty-lines': [2, { max: 2 }],
        'max-classes-per-file': 'off',
        'object-curly-newline': 'off',
        'max-len': 'off',
        'jsx-a11y/anchor-is-valid': 'off',
        'jsx-a11y/aria-role': 'error',
        'jsx-a11y/click-events-have-key-events': 'off',
        'jsx-a11y/mouse-events-have-key-events': 'off',
        'jsx-a11y/label-has-associated-control': 'error',
        'jsx-a11y/no-noninteractive-element-interactions': 'error',
        'jsx-a11y/no-static-element-interactions': 'error',
        'jsx-a11y/interactive-supports-focus': 'off',
    },
};
