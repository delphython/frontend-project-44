import { app, questionsCount } from '../index.js';
import { getRandomNumbers } from '../helpers.js';

const GAME_RULE_MESSAGE = 'Answer "yes" if the number is even, otherwise answer "no".';

const randomNumbers = getRandomNumbers(questionsCount);

const getCorrectAnswers = (numbersArray) => {
  const correctAnswersArray = [];

  numbersArray.forEach(
    (number) => correctAnswersArray.push(number % 2 === 0 ? 'yes' : 'no'),
  );

  return correctAnswersArray;
};

const correctAnswers = getCorrectAnswers(randomNumbers);

export default () => app(GAME_RULE_MESSAGE, randomNumbers, correctAnswers);
