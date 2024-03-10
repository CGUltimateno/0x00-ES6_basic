export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw new TypeError('name must be a string');
    }
    if (typeof length !== 'number') {
      throw new TypeError('length must be a number');
    }
    if (!Array.isArray(students)) {
      throw new TypeError('students must be an array');
    }
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < students.length; i++) {
      if (typeof students[i] !== 'string') {
        throw new TypeError('students must be an array of strings');
      }
    }
    // eslint-disable-next-line no-underscore-dangle
    this._name = name;
    // eslint-disable-next-line no-underscore-dangle
    this._length = length;
    // eslint-disable-next-line no-underscore-dangle
    this._students = students;
  }

  get name() {
    // eslint-disable-next-line no-underscore-dangle
    return this._name;
  }

  get length() {
    // eslint-disable-next-line no-underscore-dangle
    return this._length;
  }

  get students() {
    // eslint-disable-next-line no-underscore-dangle
    return this._students;
  }

  // eslint-disable-next-line grouped-accessor-pairs
  set name(newName) {
    if (typeof newName !== 'string') {
      throw new TypeError('name must be a string');
    }
    // eslint-disable-next-line no-underscore-dangle
    this._name = newName;
  }

  // eslint-disable-next-line grouped-accessor-pairs
  set length(newLength) {
    if (typeof newLength !== 'number') {
      throw new TypeError('length must be a number');
    }
    // eslint-disable-next-line no-underscore-dangle
    this._length = newLength;
  }

  // eslint-disable-next-line grouped-accessor-pairs
  set students(newStudents) {
    if (!Array.isArray(newStudents)) {
      throw new TypeError('students must be an array');
    }
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < newStudents.length; i++) {
      if (typeof newStudents[i] !== 'string') {
        throw new TypeError('students must be an array of strings');
      }
    }
    // eslint-disable-next-line no-underscore-dangle
    this._students = newStudents;
  }
}
