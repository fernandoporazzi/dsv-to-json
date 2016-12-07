'use strict';

const fs = require('fs');

let currentLine = 1;
let fileName;
let delimiter;
let keys;
let json = [];

function createJson(line) {
  if (currentLine === 1) {
    keys = line.split(delimiter);
    return;
  }

  let values = line.split(delimiter);
  let currObj = {};

  for (let i = 0; i < keys.length; i++) {
    let key = keys[i].trim();
    currObj[key] = values[i].trim();
  }

  json.push(currObj);
}

function readFile(callback) {
  let lines;
  fs.readFile(fileName, (err, data) => {
    if (err) throw err;

    lines = data.toString().split('\n');

    for (let i = 0; i < lines.length - 1; i++) {
      createJson(lines[i]);
      currentLine++;
    }

    callback(json);
  });
}

function dsvToJson(options) {
  return new Promise( (resolve, reject) => {
    if (!options) {
      reject('You must provide the separator and the path to file');
      return;
    }

    fileName = options.fileName;
    delimiter = options.delimiter;

    if (!fileName || fileName.trim() === '') {
      reject('You must provide a file');
      return;
    }

    if (!delimiter || delimiter.trim() === '') {
      reject('You must provide a delimiter');
      return;
    }

    readFile(resolve, reject);
  });
}

module.exports = dsvToJson;
