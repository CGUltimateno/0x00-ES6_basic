/**
 *  returns a list of student ids
 *   in a city
 */

const getStudentsByLocation = (students, location) => (
  students.filter((student) => student.location === location).map((student) => student.id));

export default getStudentsByLocation;
