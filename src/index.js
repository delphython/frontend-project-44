#!/usr/bin/env node

import readlineSync from 'readline-sync';

export const questionsCount = 3;
let isWinner = true;

export const app = (gameRuleMessage, gameQuestions, correctAnswers) => {
  console.log('Welcome to the Brain Games!');

  const gamerName = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${gamerName}!`);

  console.log(gameRuleMessage);

  for (let i = 0; i < questionsCount; i += 1) {
    console.log(`Question: ${gameQuestions[i]}`);

    const answer = readlineSync.question('Your answer: ');

    if (answer === correctAnswers[i]) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswers[i]}'.\nLet's try again, ${gamerName}!`);
      isWinner = false;
      break;
    }
  }

  if (isWinner) {
    console.log(`Congratulations, ${gamerName}!`);
  }
}
