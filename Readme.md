# Calling the code-styles function in a parent Package

In order to call "code-style" as a script from inside the package.json of a parent Project (E-learning, Manager, ...) we need to define the scripts in this packages package.json file unter the "bin" key.
Performing a npm install on the parent project builds the executables of all installed packaged inside node_modules/.bin/{package.json.bin} thus you can call those by their name defined via the "bin" key in their package.json.

# How we want to call our scripts
Basically we will call ESLint via its CLI and pass in the according arguments from the parents package.json

# What needs to be done
A whole lot of node script work. This package may need some packages of it's own to work as an "ESLint proxy". To handle the cli input I'd suggest Yargs <https://www.npmjs.com/package/yargs> to get rid of index management in passed arguments

# Inspiration gathering
Most of the functionalities can be seen at <https://github.com/facebook/create-react-app/tree/master/packages/react-scripts>

# configuring eslint-vscode extension to work with this package
In order for the VSCode extension to work, you have to have eslint and the eslint-plugins used in this package, globally installed:

```
npm i -g eslint eslint-plugin-react eslint-plugin-jsx-a11y eslint-plugin-import
```

in addition, you have to tweak the package.json a tiny bit, depending on your preferred rules. If you want to use js and react, this is the config to add:
```json
"eslintConfig": {
    "extends": [
        "./node_modules/@sosafe-react/code-style/eslint/parsers/parser-javascript",
        "./node_modules/@sosafe-react/code-style/eslint/rules/rules-javascript",
        "./node_modules/@sosafe-react/code-style/eslint/rules/rules-react",
        "./node_modules/@sosafe-react/code-style/eslint/base"
    ]
},
```

you can copy-paste this from the respective `/eslint/eslint-config-*.json` file

# using this package with npm-scripts

add these two lines to your `"scripts"` tag inside the package.json:

```json
"lint": "code-style js-react ./src",
"lint:fix": "npm run lint -- --fix"
```

the `js-react` argument can be replaced by any of these, to achieve respective linting: `[ js | js-react | js-react-a11y | ts | ts-react ]`