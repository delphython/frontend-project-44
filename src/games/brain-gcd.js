import { app, questionsCount } from '../index.js';
import { getRandomNumbers } from '../helpers.js';

const GAME_RULE_MESSAGE = 'Find the greatest common divisor of given numbers.';
const expressionsArray = [];
const correctAnswersArray = [];

const getGdc = (firstNumber, lastNumber) => {
  let a = firstNumber;
  let b = lastNumber;

  while (a !== b) {
    if (a > b) {
      a -= b;
    } else {
      b -= a;
    }
  }

  return a;
};

for (let i = 0; i < questionsCount; i += 1) {
  const [firstNumber, lastNumber] = getRandomNumbers(2);

  const result = getGdc(firstNumber, lastNumber);

  expressionsArray.push(`${firstNumber} ${lastNumber}`);
  correctAnswersArray.push(result.toString());
}

export default () => app(GAME_RULE_MESSAGE, expressionsArray, correctAnswersArray);
