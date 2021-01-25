#!/usr/bin/env node

/* eslint-disable no-console */

/**
 * code-style takes one argument and directly depends on the package.json being present:
 * file(s) to check: [file|dir|glob]*
 *
 */

const path = require('path');
const fs = require('fs');
const { ESLint } = require('eslint');

const args = process.argv.slice(2);
const packageJsonFile = path.resolve(process.cwd(), 'package.json');
if (!packageJsonFile) throw new Error(`package.json could not be found in location ${process.cwd()}`);

const packageJson = JSON.parse(fs.readFileSync(packageJsonFile));
if (!packageJson['eslintConfig']) throw new Error('package.json does not include key "eslintConfig". Please make sure the key exists and has a proper value.');

const flags = args.filter((cArg) => cArg.startsWith('--'));
const locations = args
    .filter((cArg) => !cArg.startsWith('--'))
    .map((cArg) => path.resolve(process.cwd(), cArg));
if (!locations.length) throw new Error('please specify one or more locations to be linted.');

// we currently support --fix and --summary as flags
const autofix = (flags.includes('--fix'));
const summary = (flags.includes('--summary'));

const lintingOptions = {
    useEslintrc: false,
    overrideConfig: packageJson['eslintConfig'],
    fix: autofix,
};

console.log('linting files\n', locations, '\nwith lintingOptions:', lintingOptions);

(async function main() {
    const eslint = new ESLint(lintingOptions);
    const results = await eslint.lintFiles(locations);
    const formatter = await eslint.loadFormatter(summary ? 'summary' : 'stylish');
    const resultText = formatter.format(results);

    if (resultText) console.log(resultText);
    else console.log('No linting errors found! 🎉');
}()).catch((error) => {
    process.exitCode = 1;
    console.error(error);
});
