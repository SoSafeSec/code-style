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
            },
        },
    },
    ignorePatterns: ['node_modules/'],
    plugins: ['markdown'],
    // rules we want to apply to all projects, regardless of OS and used language.
    // basically, our version of editorconf.
    rules: {
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
    },
    // overrides to be used for rules within non-js/ts-files
    overrides: [
        {
            files: ['*.md'],
            rules: {
                'max-len': 'off',
            },
        },
    ],
};
