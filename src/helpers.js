const MIN_RANGE_NUMBER = 1;
const MAX_RANGE_NUMBER = 100;

export const getRandomInt = (min, max) => {
  const cMin = Math.ceil(min);
  const fMax = Math.floor(max);
  return Math.floor(Math.random() * (fMax - cMin)) + cMin;
};

export const getRandomNumbers = (numbersCount) => {
  const randomNumbersArray = [];

  for (let i = 0; i < numbersCount; i += 1) {
    randomNumbersArray.push(getRandomInt(MIN_RANGE_NUMBER, MAX_RANGE_NUMBER));
  }

  return randomNumbersArray;
}
