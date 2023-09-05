import { app, questionsCount } from '../index.js';
import { getRandomNumbers } from '../helpers.js';

const GAME_RULE_MESSAGE = 'Find the greatest common divisor of given numbers.';
const expressionsArray = [];
const correctAnswersArray = [];

const getGdc = (firstNumber, lastNumber) => {
  while (firstNumber != lastNumber) {
    if (firstNumber > lastNumber) {
      firstNumber = firstNumber - lastNumber;
    } else {
      lastNumber = lastNumber - firstNumber;
    }
  }

  return firstNumber;
}

for (let i = 0; i < questionsCount; i += 1) {
  const [firstNumber, lastNumber] = getRandomNumbers(2);

  let result = getGdc(firstNumber, lastNumber);

  expressionsArray.push(`${firstNumber} ${lastNumber}`);
  correctAnswersArray.push(result.toString());
}

export default () => app(GAME_RULE_MESSAGE, expressionsArray, correctAnswersArray);
