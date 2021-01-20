module.exports = {
    env: {
        browser: true,
        es2020: true, // Allows for the parsing of modern ECMAScript features - node 14.5 required!
        node: true,
    },
    settings: {
        react: {
            version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
        },
        'import/resolver': {
            'node': {
                'extensions': ['.js', '.jsx', '.ts', '.tsx'],
                'moduleDirectory': ['node_modules ', 'src'],
            },
        },
    },
    extends: [
        'eslint:recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
    ],
    ignorePatterns: ['node_modules/'],
    plugins: ['import'],
    // rules we want to apply to all projects, regardless of OS and used language.
    // basically, our version of editorconf.
    rules: {
        'semi': ['error', 'always'],
        'indent': ['error', 4, { SwitchCase: 1 }],
        'quote-props': 'off',
        'linebreak-style': 'off', // we should let git and the OS handle this one
        'max-len': ['error', { code: 160 }],
        'eol-last': ['error', 'always'],
        'no-trailing-spaces': 'error',
        'no-multiple-empty-lines': [2, { max: 2 }],
        'no-plusplus': 'off',
        'quotes': ['error', 'single'],
        'camelcase': ['warn'],

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
    },
};
