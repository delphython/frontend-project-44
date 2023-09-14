import app from '../index.js';
import { getRandomInt } from '../helpers.js';

const description = 'What number is missing in the progression?';
const minProgressionLength = 5;
const maxProgressionLength = 10;
const minProgressionStep = 2;
const maxProgressionStep = 9;
const minProgressionFirstNumber = 1;
const maxProgressionFirstNumber = 20;

const getProgressionArray = (firstProgressionNumber, progressionLength, progressionStep) => {
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

const getProgressionByString = (progressionArray, hiddenProgressionElementId) => {
  const pArray = progressionArray;
  const hiddenProgressionElement = pArray[hiddenProgressionElementId];

  pArray[hiddenProgressionElementId] = '..';

  const progressionByString = pArray.join(' ');

  return [hiddenProgressionElement, progressionByString];
};

const getQuestionAndAnswer = () => {
  const progressionLength = getRandomInt(minProgressionLength, maxProgressionLength);
  const progressionStep = getRandomInt(minProgressionStep, maxProgressionStep);
  const firstProgressionNumber = getRandomInt(minProgressionFirstNumber, maxProgressionFirstNumber);

  const hiddenProgressionElementId = Math.floor(Math.random() * (progressionLength - 1));

  const progressionArray = getProgressionArray(
    firstProgressionNumber,
    progressionLength,
    progressionStep,
  );

  const [answer, question] = getProgressionByString(
    progressionArray,
    hiddenProgressionElementId,
  );

  return [question, answer.toString()];
};

export default () => {
  app(description, getQuestionAndAnswer);
};
