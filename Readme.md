# Calling the code-styles function in a parent Package

In order to call "code-style" as a script from inside the package.json of a parent Project (E-learning, Manager, ...) we need to define the scripts in this packages package.json file unter the "bin" key.
Performing a npm install on the parent project builds the executables of all installed packaged inside node_modules/.bin/{package.json.bin} thus you can call those by their name defined via the "bin" key in their package.json.

# How we want to call our scripts
Basically we will call ESLint via its CLI and pass in the according arguments from the parents package.json

# What needs to be done
A whole lot of node script work. This package may need some packages of it's own to work as an "ESLint proxy". To handle the cli input I'd suggest Yargs <https://www.npmjs.com/package/yargs> to get rid of index management in passed arguments

# Inspiration gathering
Most of the functionalities can be seen at <https://github.com/facebook/create-react-app/tree/master/packages/react-scripts>

# using this package with npm-scripts

you can copy-paste this from the respective `/eslint/eslint-config-*.json` file


add these two lines to your `"scripts"` tag inside the package.json:

```json
"lint": "code-style ./src",
"lint:fix": "npm run lint -- --fix"
```

in addition, you have to add the eslintConfig Object to your package.json. *This package won't work without this key!*:
```json
"eslintConfig": {
    "extends": "./node_modules/@sosafe-react/code-style/eslint/eslint-config-js-react"
},
```

the `eslint-config-js-react` file can be replaced by any of these, to achieve respective linting: `[ eslint-config-js | eslint-config-js-react | eslint-config-js-react-a11y | eslint-config-ts | eslint-config-ts-react ]`

you can add custom rules right here, in a `"rules": {}`-Object

# configuring eslint-vscode extension to work with this package
In order for the VSCode extension to work, you have to have eslint and the eslint-plugins used in this package, globally installed:

```
npm i -g eslint eslint-plugin-react eslint-plugin-jsx-a11y eslint-plugin-import
```