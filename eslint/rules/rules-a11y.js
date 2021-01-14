module.exports = {
    // to be used with keyboardA11y-Helper functions!
    plugins: ['jsx-a11y'],
    rules: {
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
