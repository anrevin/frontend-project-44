import getRandomNumber from '../utils.js';
import gameLogic from '../index.js';

const rules = 'Find the greatest common divisor of given numbers.';

const greatestCommonDivisor = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }
  return greatestCommonDivisor(num2, num1 % num2);
};

const round = () => {
  const numberOne = getRandomNumber(1, 10);

  const numberTwo = getRandomNumber(1, 10);

  const question = `${numberOne} ${numberTwo}`;

  const rightAnswer = greatestCommonDivisor(numberOne, numberTwo);

  return [question, rightAnswer.toString()];
};

export default () => gameLogic(rules, round);
