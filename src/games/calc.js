import getRandomNumber from '../utils.js';
import gameLogic from '../index.js';

const rules = 'What is the result of the expression?';

const charactersOfExpression = ['+', '-', '*'];

const calculate = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default: throw new Error('an unknown character has been processed');
  }
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
