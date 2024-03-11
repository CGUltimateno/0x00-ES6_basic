/**
 *   a function that returns a new ArrayBuffer with an Int8 value at a specific position.
 */

const createInt8TypedArray = (length, position, value) => {
  const buffer = new ArrayBuffer(length);
  const view = new DataView(buffer);
  if (position < length) {
    view.setInt8(position, value);
    return view;
  }
  throw new Error('Position outside range');
};

export default createInt8TypedArray;
