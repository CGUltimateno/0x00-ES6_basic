export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    /* eslint-disable no-unused-vars */
    // eslint-disable-next-line no-shadow
    const task = true;
    // eslint-disable-next-line no-shadow
    const task2 = false;
    /* eslint-disable no-unused-vars */
  }

  return [task, task2];
}
