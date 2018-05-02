'use strict';

const fs = require('fs');
const now = new Date();


// fs.writeFile('log.txt', 
//     `Application started ${now.toISOString()}\n`, 
//     {flag: 'a'}, 
//     (err) => {
//         if (err) {
//             throw err;
//         }
// });

const stream = fs.createWriteStream('log.txt', {flags: 'a'});
stream.on('error', (err) => {throw err});
stream.on('close', () => {console.log('the log file is closed')});

stream.write(`Application started ${now.toISOString()}\n`);

stream.close();