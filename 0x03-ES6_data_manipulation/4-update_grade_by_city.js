/**
 *   a function that returns an array of students for a specific city with their new grade
 */

/* eslint-disable */
const updateStudentGradeByCity = (students, city, grades) => (
  students.filter((student) => {
    if (student.location === city) {
      student.grade = 'N/A';
      grades.map((grade) => {
        if (student.id === grade.studentId)
            student.grade = grade.grade;
        return (grade);
      });
      return (student);
    }
  })
);
export default updateStudentGradeByCity;
