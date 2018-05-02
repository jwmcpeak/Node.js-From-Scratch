const path = require('path');
const fs = require('fs');
let _apiKey = 'default value';



module.exports = {
    load(filename) {

        let filePath = path.join(__dirname, '/config/', filename);

        let chunk = fs.readFileSync(filePath);

        let obj = JSON.parse(chunk.toString());

        _apiKey = obj.apiKey;
        
    },
    get apiKey() {
        return _apiKey;
    }

}