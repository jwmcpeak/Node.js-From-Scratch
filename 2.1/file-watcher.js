'use strict';

const fs = require('fs');

fs.watch('data.txt', () => console.log('File updated.'));


console.log('Application started and listening for changes.');
console.log("Don't mind me while I count");

let val = 0;

setInterval(() => console.log(val++), 1000);