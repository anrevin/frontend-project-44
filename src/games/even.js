import getRandomNumber from '../utils.js';
import gameLogic from '../index.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => (number % 2 === 0);

const round = () => {
  const number = getRandomNumber(1, 100);

  let rightAnswer = 'yes';
  if (!isEven(number)) {
    rightAnswer = 'no';
  }
  return [number, rightAnswer];
};
export default () => gameLogic(rules, round);
