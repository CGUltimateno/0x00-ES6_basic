/**
 *  returns a list of students. each student is an object with the following properties:
 *  - id: number
 *   - first: string
 *   - location: string
 */

const getListStudents = () => ([
  {
    id: 1,
    first: 'Guillaume',
    location: 'San Francisco',
  },
  {
    id: 2,
    first: 'James',
    location: 'Columbia',
  },
  {
    id: 3,
    first: 'Serena',
    location: 'San Francisco',
  },
]);

export default getListStudents;
