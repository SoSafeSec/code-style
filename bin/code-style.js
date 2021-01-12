#!/usr/bin/env node

const path = require('path');
const args = process.argv.slice(2);
const configPath = path.resolve(__dirname, '../.eslintrc')

const { exec } = require("child_process");
// syntax to call eslint: eslint [options] [file|dir|glob]*
exec(`eslint --config ${configPath} ${args.join(' ') }`, (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
});