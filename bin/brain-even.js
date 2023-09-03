#!/usr/bin/env node

import readlineSync from 'readline-sync';

const minNumberOfRange = 1;
const maxNumberOfRange = 100;
const questionsCount = 3;
let isWinner = true;

const getRandomInt = (min, max) => {
  const cMin = Math.ceil(min);
  const fMax = Math.floor(max);
  return Math.floor(Math.random() * (fMax - cMin)) + cMin;
};

const getCorrectAnswer = (number) => (number % 2 === 0 ? 'yes' : 'no');

console.log('Welcome to the Brain Games!');

const gamerName = readlineSync.question('May I have your name? ');

console.log(`Hello, ${gamerName}!`);

console.log('Answer "yes" if the number is even, otherwise answer "no".');

for (let i = 0; i < questionsCount; i += 1) {
  const currentRandomNumber = getRandomInt(minNumberOfRange, maxNumberOfRange);

  console.log(`Question: ${currentRandomNumber}`);

  const answer = readlineSync.question('Your answer: ');

  const correctAnswer = getCorrectAnswer(currentRandomNumber);

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
