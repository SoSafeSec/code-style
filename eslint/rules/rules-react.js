module.exports = {
    extends: 'plugin:react/recommended',
    plugins: ['react'],
    rules: {
        'jsx-quotes': ['error', 'prefer-single'],
        'react/jsx-one-expression-per-line': 'off',
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        'react/jsx-filename-extension': 'off',
        'react/jsx-fragments': ['error', 'element'],
        'react/prop-types': 1,
        'react/no-did-update-set-state': 'off',
        'react/sort-comp': [
            1,
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
        'react/destructuring-assignment': [
            'off', 'always',
        ],
    },
};
