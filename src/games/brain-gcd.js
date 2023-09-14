import app from '../index.js';
import { getRandomNumbers } from '../helpers.js';

const description = 'Find the greatest common divisor of given numbers.';
const randomNumbersCount = 2;

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

const getQuestionAndAnswer = () => {
  const [firstNumber, lastNumber] = getRandomNumbers(randomNumbersCount);

  const question = `${firstNumber} ${lastNumber}`;

  const answer = getGdc(firstNumber, lastNumber);

  return [question, answer.toString()];
};

export default () => {
  app(description, getQuestionAndAnswer);
};
