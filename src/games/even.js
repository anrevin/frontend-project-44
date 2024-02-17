import getRandomNumber from '../randomNumber.js';
import gameLogic from '../index.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const round = () => {
  const number = getRandomNumber(1, 100);
  const question = number;

  const rightAnswer = (question % 2 === 0) ? 'yes' : 'no';

  const result = [question, rightAnswer];

  return result;
};
export default () => gameLogic(rules, round);
