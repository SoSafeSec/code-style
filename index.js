#!/usr/bin/env node

/* eslint-disable no-unreachable */
/* eslint-disable no-console */

/**
 * code-style takes two arguments:
 * config: [js|js-react|js-react-a11y|ts|ts-react]
 * file(s) to check: [file|dir|glob]*
 */


const path = require('path');

const args = process.argv.slice(2);
const configName = args.shift();
const configPath = path.resolve(__dirname, `./eslint/eslint-config-${configName}.json`);

const flags = args.filter((cArg) => cArg.startsWith('--'));
const locations = args
    .filter((cArg) => !cArg.startsWith('--'))
    .map((cArg) => path.resolve(process.cwd(), cArg));

const command = `eslint --config ${configPath} ${locations.join(' ')} ${flags.join(' ')}`;

console.log('Linting project with ruleset: ', configPath, '\nlinting location(s): ', locations, '\nadditional flags: ', flags);
console.log('running command:\n', command);

const { exec } = require('child_process');
// syntax to call eslint: eslint [options] [file|dir|glob]*
// more info here: https://eslint.org/docs/user-guide/command-line-interface
// we're not able to set multiple config files, hence the many json-files that just extend different rulesets
exec(command, (error, stdout, stderr) => {
    if (error) console.log(`error: ${error}`);
    if (stderr) console.log(`stderr: ${stderr}`);
    if (stdout) console.log(`stdout: ${stdout}`);
});
