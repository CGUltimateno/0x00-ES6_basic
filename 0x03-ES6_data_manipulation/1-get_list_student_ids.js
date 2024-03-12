/**
 *  returns a list of student ids
 *   in a city
 */

const getListStudentIds = (students) => (Array.isArray(students)
  ? students.map((student) => student.id)
  : []);
export default getListStudentIds();
