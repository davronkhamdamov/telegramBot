require('./core')
require('./action')
require('./db')

const http = require('http');
const cors = require('cors');

const port = 3000;

const server = http.createServer((req, res) => {
    cors()(req, res, () => {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello, this is your Node.js server with CORS enabled!\n');
    });
});

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
