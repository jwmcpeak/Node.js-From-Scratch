const config = require('./config');

const configFile = process.argv[2];

if (!configFile) {
    throw Error('Please provide a configuration file');
}

config.load(configFile, (err, settings) => {


});

console.log(config.apiKey);