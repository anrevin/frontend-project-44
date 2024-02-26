import getRandomNumber from '../utils.js';
import gameLogic from '../index.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const round = () => {
  const number = getRandomNumber(1, 100);
  let rightAnswer = 'yes';
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      rightAnswer = 'no';
    }
  }

  return [number, rightAnswer];
};
export default () => gameLogic(rules, round);
