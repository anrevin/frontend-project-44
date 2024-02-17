import getRandomNumber from '../randomNumber.js';
import gameLogic from '../index.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const round = () => {
  const number = getRandomNumber(1, 100);
  const question = number;
  let rightAnswer = 'yes';
  for (let i = 1; i < number; i += 1) {
    if (number % i === 0) {
      rightAnswer = 'no';
    }
  }

  const result = [question, rightAnswer];
  return result;
};
export default () => gameLogic(rules, round);
