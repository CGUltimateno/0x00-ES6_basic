// eslint-disable-next-line import/prefer-default-export
export class HolbertonClass {
  constructor(year, location) {
    // eslint-disable-next-line no-underscore-dangle
    this._year = year;
    // eslint-disable-next-line no-underscore-dangle
    this._location = location;
  }

  get year() {
    // eslint-disable-next-line no-underscore-dangle
    return this._year;
  }

  get location() {
    // eslint-disable-next-line no-underscore-dangle
    return this._location;
  }
}

export class StudentHolberton {
  constructor(firstName, lastName) {
    if (typeof firstName !== 'string') {
      throw new TypeError('firstName must be a string');
    }
    if (typeof lastName !== 'string') {
      throw new TypeError('lastName must be a string');
    }
    // eslint-disable-next-line no-underscore-dangle
    this._firstName = firstName;
    // eslint-disable-next-line no-underscore-dangle
    this._lastName = lastName;
  }

  get fullName() {
    // eslint-disable-next-line no-underscore-dangle
    return `${this._firstName} ${this._lastName}`;
  }

  get holbertonClass() {
    // eslint-disable-next-line no-underscore-dangle
    return this._holbertonClass;
  }

  get fullStudentDescription() {
    // eslint-disable-next-line no-underscore-dangle
    return `${this._firstName} ${this._lastName} - ${this._holbertonClass.year} - ${this._holbertonClass.location}`;
  }
}

const class2019 = new HolbertonClass(2019, 'San Francisco');
const class2020 = new HolbertonClass(2020, 'San Francisco');

const student1 = new StudentHolberton('Guillaume', 'Salva', class2020);
const student2 = new StudentHolberton('John', 'Doe', class2020);
const student3 = new StudentHolberton('Albert', 'Clinton', class2019);
const student4 = new StudentHolberton('Donald', 'Bush', class2019);
const student5 = new StudentHolberton('Jason', 'Sandler', class2019);

const listOfStudents = [student1, student2, student3, student4, student5];
export default listOfStudents;