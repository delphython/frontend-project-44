import { app, questionsCount } from '../index.js';
import { getRandomNumbers } from '../helpers.js';

const GAME_RULE_MESSAGE = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const randomNumbers = getRandomNumbers(questionsCount);

const isPrime = (number) => {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) return false;
  }
  return number !== 1;
};

const getCorrectAnswers = (numbersArray) => {
  const correctAnswersArray = [];

  numbersArray.forEach(
    (number) => correctAnswersArray.push(isPrime(number) ? 'yes' : 'no'),
  );

  return correctAnswersArray;
};

const correctAnswers = getCorrectAnswers(randomNumbers);

export default () => app(GAME_RULE_MESSAGE, randomNumbers, correctAnswers);
