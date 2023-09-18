
module.exports = {
    getWords: getWords,
    getChars: getChars
}

const fs = require('fs');

function getWords(filePath) {
    const data = fs.readFileSync(filePath, 'utf8');
    console.log(data.split(' ').length, filePath);
}

function getChars(filePath) {
    const data = fs.readFileSync(filePath, 'utf8');
    console.log(data.split('').length, filePath);
}