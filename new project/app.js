const express = require('express');

let app = express();

app.get('/', (req, res) => {
    res.send('Hello, Express!');
});

app.listen(8080);

console.log('Listening...');