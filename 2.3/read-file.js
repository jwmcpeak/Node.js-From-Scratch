'use strict';

const fs = require('fs');

const configFile = process.argv[2];

if (!configFile) {
    throw Error('Please provide a configuration file.');
}

fs.createReadStream(configFile)
    .on('data', (chunk) => process.stdout.write(chunk))
    .on('error', (err) => process.stdout.write(`Error: ${err.message}`));



//fs.createReadStream(configFile).pipe(process.stdout);


// fs.readFile(configFile, (err, data) => {
//     if(err) {
//         throw err;
//     }

//     console.log(data.toString());
// });