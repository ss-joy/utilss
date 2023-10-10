//range: upto 90000000 element(s)
export default function createSortedArray(
  startValue: number,
  endValue: number,
) {
  const tempArray = [];
  for (let i = startValue; i <= endValue; i++) {
    tempArray.push(i);
  }
  return tempArray;
}
