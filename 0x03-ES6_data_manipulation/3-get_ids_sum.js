/**
 * returns the sum of all student ids
 */

const getStudentIdsSum = (students) => (
  students.reduce((prev, next) => (
    prev + next.id
  ), 0)
);
export default getStudentIdsSum;
