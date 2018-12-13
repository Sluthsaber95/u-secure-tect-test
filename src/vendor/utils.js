export const generateArrayInteger = (start, end) =>
  [...Array(end + 1).keys()].filter(x => x >= start)