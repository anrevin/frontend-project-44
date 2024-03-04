import getRandomNumber from '../utils.js';
import gameLogic from '../index.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const isPrime = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const round = () => {
  const number = getRandomNumber(1, 100);
  let rightAnswer = 'yes';
  if (!isPrime(number)) {
    rightAnswer = 'no';
  }
  return [number, rightAnswer];
};
export default () => gameLogic(rules, round);
