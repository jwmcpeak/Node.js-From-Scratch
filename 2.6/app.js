const config = require('./config');
const fs = require('fs');
const http = require('http');
const path = require('path');

http.createServer((request, response) => {
    console.log(`request ${request.url}`);

    let file = request.url;

    if (file.endsWith('/')) {
        file += 'index.html';
    }

    let ext = path.extname(file); // .html
    let mimeTypes = {
        '.html': 'text/html',
        '.js': 'text/javascript',
        '.css': 'text/css',
        '.json': 'application/json',
        '.png': 'image/png',
        '.jpg': 'image/jpg',
        '.gif': 'image/gif'
    };

    let contentType = {
        'Content-Type' : mimeTypes[ext] || 'application/octet-stream'
    };

    fs.readFile(config.getPublicPath(file), (error, content) => {
        if (error) {
            if (error.code === 'ENOENT') {
                fs.readFile(config.getPublicPath('404.html'), (error, content) => {
                    response.writeHead(200, contentType);
                    response.end(content, 'utf-8');
                });
            } else {
                response.writeHead(500);
                response.end(`Sorry, something went wrong. Try again. Error code: ${error.code}`)
            }
        } else {
            response.writeHead(200, contentType);
            response.end(content, 'utf-8');
        }
    });

}).listen(config.port);

console.log(`Server running at http://localhost:${config.port}`);