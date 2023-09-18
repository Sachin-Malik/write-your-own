#! /usr/bin/env node

const yargs = require('yargs');
const utils = require('./utils');
const fs = require('fs');
const usage = "\nUsage: tran <operation_type> what peice of info do you need";
const options = yargs
    .usage(usage)
    .option("words", {
        alias: "w",
        describe: "words in the given file",
        type: "boolean",
        demandOption: false
    })
    .option('chars', {
        alias: 'c',
        describe: 'chars in the given file'
    })
    .help(true)
    .argv;

const command = options._[0];
const filePath = options._[1];

if (command === 'words') {
    utils.getWords(filePath);
} else if (command === 'chars') {
    utils.getChars(filePath);
}

