const fs = require('fs');

function countStudents(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf8', (e, data) => {
            if (e) {
                reject(new Error('Cannot load the database'));
            } else {
                const lines = data.trim().split('\n').slice(1, -1);
                const noOfStudents = lines.length;
                const obj = {};

                lines.forEach((line) => {
                    const student = line.split(',');
                    const field = student[student.length - 1];

                    if (!obj[field]) {
                        obj[field] = {};
                        obj[field].firstname = [];
                        obj[field].count = 1;
                    } else {
                        obj[field].count += 1;
                    }
                    obj[field].firstname.push(student[0]);
                });

                console.log(`Number of students: ${noOfStudents}`);

                for (const [key, value] of Object.entries(obj)) {
                    console.log(`Number of students in ${key}: ${value.count}. List: ${value.firstname.join(', ')}`);
                }
                resolve();
            }
        });
    });
}