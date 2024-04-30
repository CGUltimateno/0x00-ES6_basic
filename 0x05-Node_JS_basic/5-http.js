const fs = require('fs');
const http = require('http');
const url = require('url');

const DB_FILE = process.argv.length > 2 ? process.argv[2] : '';

function countStudents(path) {
    const res = [];
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf8', (err, data) => {
            if (err) {
                reject(Error('Cannot load the database'));
                return;
            }
            const lines = data.split('\n').filter((line) => line.length > 0);
            console.log(`Number of students: ${lines.length}`);
            lines.forEach((line) => {
                const student = line.split(',');
                if (student.length === 4) {
                    res.push({
                        firstname: student[0],
                        lastname: student[1],
                        age: student[2],
                        field: student[3],
                    });
                }
            });
            res.shift();
            console.log(`List: ${res.map((s) => s.firstname).join(', ')}`);
            resolve();
        });
    }

    );
}


const app = http.createServer((req, res) => {
    const q = url.parse(req.url, true);
    if (q.pathname === '/students') {
        if (req.method === 'GET') {
            countStudents(DB_FILE)
                .then(() => {
                    res.writeHead(200, { 'Content-Type': 'text/plain' });
                    res.write('This is the list of our students\n');
                    res.end();
                })
                .catch((error) => {
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    res.write(error.message);
                    res.end();
                });
        }
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.write('Invalid request');
        res.end();
    }
});

app.listen(1245);

module.exports = app;
