import app from '../index.js';
import { getRandomNumbers } from '../helpers.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const randomNumbersCount = 1;

const IsEven = (number) => (number % 2 === 0);

const getQuestionAndAnswer = () => {
  const [question] = getRandomNumbers(randomNumbersCount);

  const answer = IsEven(question) ? 'yes' : 'no';

  return [question, answer.toString()];
};

export default () => {
  app(description, getQuestionAndAnswer);
};
