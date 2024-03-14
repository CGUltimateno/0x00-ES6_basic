/**
 *  checks whether items in the array
 *  exist in the set
 */

const hasValuesFromArray = (set, array) => {
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < array.length; i++) {
    if (!set.has(array[i])) {
      return false;
    }
  }
  return true;
};

export default hasValuesFromArray;
