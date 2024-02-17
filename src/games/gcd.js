import getRandomNumber from '../randomNumber.js';
import gameLogic from '../index.js';

const rules = 'Find the greatest common divisor of given numbers.';

const findDivisior = (randomNumber) => {
  const arr = [];
  for (let i = 1; i <= randomNumber; i += 1) {
    if (randomNumber % i === 0) {
      arr.push(i);
    }
  }
  return arr;
};

const round = () => {
  const numberOne = getRandomNumber(1, 10);

  const numberTwo = getRandomNumber(1, 10);

  const question = `${numberOne} ${numberTwo}`;

  const greatestCommonDivisor = () => {
    const divNumberOne = findDivisior(numberOne);
    const divNumberTwo = findDivisior(numberTwo);

    const commonDiv = [];
    for (let i = 0; i < divNumberOne.length; i += 1) {
      for (let j = 0; j < divNumberTwo.length; j += 1) {
        if (divNumberOne[i] === divNumberTwo[j]) {
          commonDiv.push(divNumberOne[i]);
        }
      }
    }
    return commonDiv[commonDiv.length - 1];
  };

  const rightAnswer = greatestCommonDivisor();
  const result = [question, rightAnswer.toString()];

  return result;
};

export default () => gameLogic(rules, round);
