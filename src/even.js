import readlineSync from 'readline-sync';
import randomNumber from './randomNumber.js';

// eslint-disable-next-line consistent-return
export default () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const roundCount = 3;
  for (let i = 0; i < roundCount; i += 1) {
    const number = randomNumber(1, 100);
    const answer = (number % 2 === 0) ? 'yes' : 'no';
    const round = readlineSync.question(`Question: ${number} \n`);
    if (round === answer) {
      console.log('Correct!');
    } else {
      return console.log(`'${round}' is wrong answer ;(. Correct answer was '${answer}'.\nLet's try again, ${name}!`);
    }
  }
  return console.log(`Congratulations, ${name}!`);
};
