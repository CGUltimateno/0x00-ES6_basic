/**
 * returns the sum of all student ids
 */

const getStudentIdsSum = (students) => (
  students.reduce((prev, curr) => (prev + curr.id), 0));

export default getStudentIdsSum;
