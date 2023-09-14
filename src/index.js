#!/usr/bin/env node

import readlineSync from 'readline-sync';

const questionsCount = 3;

const app = (description, questionAndAnswer) => {
  let isWinner = true;

  console.log('Welcome to the Brain Games!');

  const gamerName = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${gamerName}!`);

  console.log(description);

  for (let i = 0; i < questionsCount; i += 1) {
    const [gameQuestion, correctAnswer] = questionAndAnswer();

    console.log(`Question: ${gameQuestion}`);

    const answer = readlineSync.question('Your answer: ');

    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${gamerName}!`);
      isWinner = false;
      break;
    }
  }

  if (isWinner) {
    console.log(`Congratulations, ${gamerName}!`);
  }
};

export default app;
