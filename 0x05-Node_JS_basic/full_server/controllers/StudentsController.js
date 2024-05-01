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
    static getAllStudents(res, req) {
        readDatabase(process.argv.length > 2 ? process.argv[2] : '')
        .then((studentGroups) => {
            const responseParts = ['This is the list of our students'];

            const cmpFxn = (a, b) => {
              if (a[0].toLowerCase() < b[0].toLowerCase()) {
                return -1;
              }
              if (a[0].toLowerCase() > b[0].toLowerCase()) {
                return 1;
              }
              return 0;
            };

        for (const [field, group] of Object.entries(studentGroups).sort(cmpFxn)) {
            responseParts.push([
              `Number of students in ${field}: ${group.length}.`,
              'List:',
              group.map((student) => student.firstname).join(', '),
            ].join(' '));
          }
          response.status(200).send(responseParts.join('\n'));
        })
        .catch((err) => {
          response
            .status(500)
            .send(err instanceof Error ? err.message : err.toString());
        });
    }
    
    
    static getAllStudentsByMajor(res, req) {
        readDatabase(process.argv.length > 2 ? process.argv[2] : '')
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