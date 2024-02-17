import getRandomNumber from '../randomNumber.js';
import gameLogic from '../index.js';

const rules = 'What is the result of the expression?';

const round = () => {
  const numberOne = getRandomNumber(1, 100);

  const numberTwo = getRandomNumber(1, 100);

  const symbolOfOperation = ['+', '-', '*'];

  const index = getRandomNumber(0, symbolOfOperation.length);

  const question = `${numberOne} ${symbolOfOperation[index]} ${numberTwo}`;

  let rightAnswer;

  switch (symbolOfOperation[index]) {
    case '+':
      rightAnswer = numberOne + numberTwo;
      break;
    case '-':
      rightAnswer = numberOne - numberTwo;
      break;
    case '*':
      rightAnswer = numberOne * numberTwo;
      break;
    default:
  }

  const result = [question, rightAnswer.toString()];

  return result;
};

export default () => gameLogic(rules, round);
