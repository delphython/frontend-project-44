import { app, questionsCount } from '../index.js';

const GAME_RULE_MESSAGE = 'What is the result of the expression?';
const MIN_RANGE_NUMBER = 1;
const MAX_RANGE_NUMBER = 100;

const getRandomInt = (min, max) => {
  const cMin = Math.ceil(min);
  const fMax = Math.floor(max);
  return Math.floor(Math.random() * (fMax - cMin)) + cMin;
};

const getRandomNumbers = () => {
  const randomNumbersArray = [];

  for (let i = 0; i < questionsCount; i += 1) {
    randomNumbersArray.push(getRandomInt(MIN_RANGE_NUMBER, MAX_RANGE_NUMBER));
  }

  return randomNumbersArray;
}


const randomNumbers = getRandomNumbers();

const getCorrectAnswers = (numbersArray) => {
  const correctAnswersArray = [];

  for (const number of numbersArray) {
    correctAnswersArray.push(number % 2 === 0 ? 'yes' : 'no');
  }

  return correctAnswersArray;
}

const correctAnswers = getCorrectAnswers(randomNumbers);

export default () => app(GAME_RULE_MESSAGE, randomNumbers, correctAnswers);
