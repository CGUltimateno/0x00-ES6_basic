/**
 *  a const instance of WeakMap that tracks
 *  the number of times queryAPI is called for each endpoint
 */

const weakMap = new WeakMap();

const queryAPI = ((endpoint) => {
  if (!(weakMap.has(endpoint))) weakMap.set(endpoint, 0);

  if (weakMap.get(endpoint) >= 4) throw new Error('Endpoint load is high');
  weakMap.set(endpoint, weakMap.get(endpoint) + 1);
});

export { weakMap, queryAPI };
