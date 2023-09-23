export default function createSortedArray(startValue, endValue) {
  const tempArray = [];
  for (let i = startValue; i < endValue; i++) {
    tempArray.push(i);
  }
  return tempArray;
}
