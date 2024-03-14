/**
 *  returns a list of student ids
 *   in a city
 */

const getStudentsByLocation = (students, location) => (
  students.filter((student) => student.location === location));

export default getStudentsByLocation;
