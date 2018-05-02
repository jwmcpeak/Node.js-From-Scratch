const path = require('path');
const fs = require('fs');
let _port = 8080;
let _publicFolder = 'public';

module.exports = {
    getPublicPath(filename) {
        return path.join(__dirname, `/${_publicFolder}/`, filename);
    },
    load(filename) {

        if (!filename) {
            return;
        }

        let filePath = path.join(__dirname, '/config/', filename);

        let chunk = fs.readFileSync(filePath);

        let obj = JSON.parse(chunk.toString());

        _port = obj.port;
        _publicFolder = obj.publicFolder;
    },
    get port() {
        return _port;
    },
    get publicFolder() {
        return _publicFolder;
    }
}