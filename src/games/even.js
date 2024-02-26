import getRandomNumber from '../utils.js';
import gameLogic from '../index.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const round = () => {
  const number = getRandomNumber(1, 100);

  const rightAnswer = (number % 2 === 0) ? 'yes' : 'no';

  return [number, rightAnswer];
};
export default () => gameLogic(rules, round);
