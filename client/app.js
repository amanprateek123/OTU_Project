const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const app = express();
// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
// Point static path to dist
app.use(express.static(path.join(__dirname, '/build')));
// Catch all other routes and return the index file
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/build/index.html'));
});

const port = process.env.PORT || '9021';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`APP is running on localhost: ${port}`));