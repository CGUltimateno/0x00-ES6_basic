import readDatabase from "../utils";
/**
 * List of majors
 */
const majors = ['CS', 'SWE'];

class StudentsController {
    /**
     * Returns the number of students in each major
     * @param {import('http').ServerResponse} res - Server response
     */
    static async getAllStudents(res) {
        const studentGroups = await readDatabase(process.argv[2]);
        const totalStudents = Object
        .values(studentGroups)
        .reduce((pre, cur) => (pre || []).length + cur.length);
        res.write('This is the list of our students\n');
        res.write(`Number of students: ${totalStudents}\n`);
        for (const [field, group] of Object.entries(studentGroups)) {
        if (majors.includes(field)) {
            const studentNames = group.map((student) => student.firstname).join(', ');
            res.write(`Number of students in ${field}: ${group.length}. List: ${studentNames}\n`);
        }
        }
        res.end();
    }

    static getAllStudentsByMajor(res, major) {
        readDatabase(process.argv[2])
        .then((studentGroups) => {
            if (majors.includes(major)) {
                const group = studentGroups[major];
                const studentNames = group.map((student) => student.firstname).join(', ');
                res.write(`Number of students in ${major}: ${group.length}. List: ${studentNames}\n`);
            } else {
                res.write('Major parameter must be CS or SWE\n');
            }
            res.end();
        })
        .catch(() => {
            res.write('Cannot load the database\n');
            res.end();
        });
    }
}

export default StudentsController;
module.exports = StudentsController;