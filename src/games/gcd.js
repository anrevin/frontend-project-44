import getRandomNumber from '../randomNumber.js';
import gameLogic from '../index.js';

const rules = 'Find the greatest common divisor of given numbers.';

const round = () => {
  const numberOne = getRandomNumber(1, 10);

  const numberTwo = getRandomNumber(1, 10);

  const question = `${numberOne} ${numberTwo}`;

  const gcd = () => {
    const findDivisior = (randomNumber) => {
      const arr = [];
      for (let i = 1; i <= randomNumber; i += 1) {
        if (randomNumber % i === 0) {
          arr.push(i);
        }
      }
      return arr;
    };

    const devNumberOne = findDivisior(numberOne);
    const devNumberTwo = findDivisior(numberTwo);

    const commonDev = [];
    for (let i = 0; i < devNumberOne.length; i += 1) {
      for (let j = 0; j < devNumberTwo.length; j += 1) {
        if (devNumberOne[i] === devNumberTwo[j]) {
          commonDev.push(devNumberOne[i]);
        }
      }
    }
    const greatestCommonDevision = commonDev[commonDev.length - 1];
    return greatestCommonDevision;
  };

  const rightAnswer = gcd();
  const result = [question, rightAnswer.toString()];

  return result;
};

export default () => gameLogic(rules, round);
