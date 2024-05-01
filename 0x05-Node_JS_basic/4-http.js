const http = require('http');
const PORT = 1245;
const app = http.createServer();

app.on('request', (req, res) => {
    if (req.method === 'GET' && req.url === '/') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Hello Holberton School!');
    }
    });

app.listen(PORT, HOST, () => {
    process.stdout.write(`Server running at http://${HOST}:${PORT}`);
});

module.exports = app;