export default class Classroom {
  constructor(maxStudentsSize) {
    if (typeof maxStudentsSize !== 'number') {
      throw new Error('maxStudentsSize must be a number');
    }
    this.maxStudentsSize = maxStudentsSize;
  }
}
