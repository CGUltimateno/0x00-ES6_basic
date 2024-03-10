export default class HolbertonClass {
  constructor(size, location) {
    if (typeof size !== 'number') {
      throw new TypeError('size must be a number');
    }
    if (typeof location !== 'string') {
      throw new TypeError('location must be a string');
    }
    // eslint-disable-next-line no-underscore-dangle
    this._size = size;
    // eslint-disable-next-line no-underscore-dangle
    this._location = location;
  }

  [Symbol.toPrimitive](hint) {
    // eslint-disable-next-line no-underscore-dangle
    if (hint === 'number') return this._size;
    // eslint-disable-next-line no-underscore-dangle
    if (hint === 'string') return this._location;
    return null;
  }
}
