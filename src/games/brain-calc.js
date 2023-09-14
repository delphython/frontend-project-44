import app from '../index.js';
import { getRandomNumbers } from '../helpers.js';

const description = 'What is the result of the expression?';
const arithmeticActionsArray = ['+', '-', '*'];
const randomNumbersCount = 2;

const getCalculationResult = (
  arithmeticAction,
  firstArithmeticOperator,
  lastArithmeticOperator,
) => {
  let result;

  switch (arithmeticAction) {
    case '+':
      result = firstArithmeticOperator + lastArithmeticOperator;
      break;
    case '-':
      result = firstArithmeticOperator - lastArithmeticOperator;
      break;
    case '*':
      result = firstArithmeticOperator * lastArithmeticOperator;
      break;
    default:
      result = null;
  }

  return result;
};

const getQuestionAndAnswer = () => {
  const [firstArithmeticOperator, lastArithmeticOperator] = getRandomNumbers(randomNumbersCount);
  const arithmeticAction = arithmeticActionsArray[
    Math.floor(Math.random() * arithmeticActionsArray.length)
  ];

  const question = `${firstArithmeticOperator} ${arithmeticAction} ${lastArithmeticOperator}`;
  const answer = getCalculationResult(
    arithmeticAction,
    firstArithmeticOperator,
    lastArithmeticOperator,
  );

  return [question, answer.toString()];
};

export default () => {
  app(description, getQuestionAndAnswer);
};
