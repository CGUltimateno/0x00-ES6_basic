/**
 *  fetch set values matching
 *  the string
 */

const cleanSet = (set, startString) => {
  if (!startString || typeof startString !== 'string') return '';
  const result = [];
  // eslint-disable-next-line no-restricted-syntax
  for (const item of set) {
    if (item && item.startsWith(startString)) {
      result.push(item.slice(startString.length));
    }
  }
  return result.join('-');
};

export default cleanSet;
