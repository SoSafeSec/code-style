#Calling the code-styles function in a parent Package

In order to call "code-style" as a script from inside the package.json of a parent Project (E-learning, Manager, ...) we need to define the scripts in this packages package.json file unter the "bin" key.
Performing a npm install on the parent project builds the executables of all installed packaged inside node_modules/.bin/{package.json.bin} thus you can call those by their name defined via the "bin" key in their package.json.

#How we want to call our scripts
Basically we will call ESLint via its CLI and pass in the according arguments from the parents package.json

#What needs to be done
A whole lot of node script work. This package may need some packages of it's own to work as an "ESLint proxy". To handle the cli input I'd suggest Yargs <https://www.npmjs.com/package/yargs> to get rid of index management in passed arguments

#Inspiration gathering
Most of the functionalities can be seen at <https://github.com/facebook/create-react-app/tree/master/packages/react-scripts>
