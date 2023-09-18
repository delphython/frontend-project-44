import app from '../index.js';
import { getRandomInt } from '../helpers.js';

const description = 'What number is missing in the progression?';
const progressionLength = 10;

const getProgressionArray = (firstProgressionNumber, progressionStep) => {
  const progressionArray = [];
  let count = 0;
  let nextProgressionNumber = firstProgressionNumber;

  while (count <= progressionLength) {
    progressionArray.push(nextProgressionNumber);
    count += 1;
    nextProgressionNumber += progressionStep;
  }

  return progressionArray;
};

const getQuestionAndAnswer = () => {
  const progressionStep = getRandomInt(2, 8);
  const firstProgressionNumber = getRandomInt(0, 50);

  const hiddenProgressionElementId = getRandomInt(0, 9);

  const progressionArray = getProgressionArray(
    firstProgressionNumber,
    progressionStep,
  );

  const answer = progressionArray[hiddenProgressionElementId];
  progressionArray[hiddenProgressionElementId] = '..';
  const question = progressionArray.join(' ');

  return [question, answer.toString()];
};

export default () => {
  app(description, getQuestionAndAnswer);
};
