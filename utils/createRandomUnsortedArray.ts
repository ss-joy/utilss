import generateRandomInteger from "@/utils/generateRandomInteger";
export default function createRandomUnsortedArray(
  startValue: number,
  endValue: number
) {
  const tempArray = [];
  for (let i = startValue; i < endValue; i++) {
    let randomNumber = generateRandomInteger(startValue, endValue);
    tempArray.push(randomNumber);
  }
  return tempArray;
}
