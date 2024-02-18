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

const greatestCommonDivisor = (arr1, arr2) => {
  const commonDiv = [];
  for (let i = 0; i < arr1.length; i += 1) {
    for (let j = 0; j < arr2.length; j += 1) {
      if (arr1[i] === arr2[j]) {
        commonDiv.push(arr1[i]);
      }
    }
  }
  return commonDiv[commonDiv.length - 1];
};

const round = () => {
  const numberOne = getRandomNumber(1, 10);

  const numberTwo = getRandomNumber(1, 10);

  const question = `${numberOne} ${numberTwo}`;

  const divNumberOne = findDivisior(numberOne);
  const divNumberTwo = findDivisior(numberTwo);

  const rightAnswer = greatestCommonDivisor(divNumberOne, divNumberTwo);
  const result = [question, rightAnswer.toString()];

  return result;
};

export default () => gameLogic(rules, round);
