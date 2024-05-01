const fs = require('fs');

/**
 * Function that counts the number of students in a database
 * @param {string} path - Path to the database
 * @returns {void}
 */
const countStudents = (dataPath) => {
    fs.readFile(dataPath, 'utf8', (err, data) => {
        if (err) {
        console.log('Error: ', err);
        return;
        }
        const students = data.split('\n').filter((student) => student);
        const fields = {};
        students.forEach((student) => {
        const studentData = student.split(',');
        if (!fields[studentData[3]]) {
            fields[studentData[3]] = [];
        }
        fields[studentData[3]].push(studentData[0]);
        });
        console.log(`Number of students: ${students.length}`);
        for (const field in fields) {
        if (field) {
            const list = fields[field];
            console.log(`Number of students in ${field}: ${list.length}. List: ${list.join(', ')}`);
        }
        }
    });
};
module.exports = countStudents;