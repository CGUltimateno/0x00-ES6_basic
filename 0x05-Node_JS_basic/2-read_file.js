const fs = require('fs');

module.exports = function countStudents(path) {
    try {
        const data = fs.readFileSync(path, { encoding: 'utf8' });
        const lines = data.trim().split('\n').slice(1, -1);
        const noOfStudents = lines.length;
        const obj = {};

        lines.forEach((line) => {
            const student = line.split(',');
            const field = student[student.length - 1]; // Corrected here

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
    } catch (error) {
        throw new Error('Cannot load the database');
    }
};