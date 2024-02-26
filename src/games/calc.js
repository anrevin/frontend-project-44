import getRandomNumber from '../utils.js';
import gameLogic from '../index.js';

const rules = 'What is the result of the expression?';

const charactersOfExpression = ['+', '-', '*'];

const calculate = (num1, num2, operator) => {
  let result;

  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    default: return console.log('an unknown character has been processed');
  }
  return result;
};

const round = () => {
  const numberOne = getRandomNumber(1, 100);

  const numberTwo = getRandomNumber(1, 100);

  const index = getRandomNumber(0, charactersOfExpression.length);

  const question = `${numberOne} ${charactersOfExpression[index]} ${numberTwo}`;

  const rightAnswer = calculate(numberOne, numberTwo, charactersOfExpression[index]);

  return [question, rightAnswer.toString()];
};

export default () => gameLogic(rules, round);
