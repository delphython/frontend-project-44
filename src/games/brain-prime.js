import app from '../index.js';
import { getRandomNumbers } from '../helpers.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const randomNumbersCount = 1;

const isPrime = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) return false;
  }
  return number !== 1;
};

const getQuestionAndAnswer = () => {
  const [question] = getRandomNumbers(randomNumbersCount);

  const answer = isPrime(question) ? 'yes' : 'no';

  return [question, answer.toString()];
};

export default () => {
  app(description, getQuestionAndAnswer);
};
