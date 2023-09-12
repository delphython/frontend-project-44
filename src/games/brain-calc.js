import { app, questionsCount } from '../index.js';
import { getRandomNumbers } from '../helpers.js';

const description = 'What is the result of the expression?';
const arithmeticActionsArray = ['+', '-', '*'];
const expressionsArray = [];
const correctAnswersArray = [];

const getCalculationResult = (arithmeticAction, firstArithmeticOperator, lastArithmeticOperator) => {
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
}

for (let i = 0; i < questionsCount; i += 1) {
  let result;

  const [firstArithmeticOperator, lastArithmeticOperator] = getRandomNumbers(2);
  const arithmeticAction = arithmeticActionsArray[
    Math.floor(Math.random() * arithmeticActionsArray.length)
  ];

  result = getCalculationResult(arithmeticAction, firstArithmeticOperator, lastArithmeticOperator);

  expressionsArray.push(`${firstArithmeticOperator} ${arithmeticAction} ${lastArithmeticOperator}`);
  correctAnswersArray.push(result.toString());
}

export default () => app(description, expressionsArray, correctAnswersArray);
