exports.testMethod = function() {
    console.log("This is a message from the code-style package");
}

exports.eslintConfig = {
    globals: {
        MyGlobal: true
    },

    rules: {
        "jsx-quotes": ["error", "prefer-double"],
        "quotes": ["error", "double"],
    }
};