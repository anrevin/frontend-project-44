import getRandomNumber from '../randomNumber.js';
import gameLogic from '../index.js';

const rules = 'Find the greatest common divisor of given numbers.';

const round = () => {
  const numberOne = getRandomNumber(1, 10);

  const numberTwo = getRandomNumber(1, 10);

  const question = `${numberOne} ${numberTwo}`;

  const greatcommondivisor = () => {
    const divNumberOne = [];
    for (let i = 1; i <= numberOne; i += 1) {
      if (numberOne % i === 0) {
        divNumberOne.push(i);
      }
    }

    const divNumberTwo = [];
    for (let i = 1; i <= numberTwo; i += 1) {
      if (numberTwo % i === 0) {
        divNumberTwo.push(i);
      }
    }

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

  const rightAnswer = greatcommondivisor();
  const result = [question, rightAnswer.toString()];

  return result;
};

export default () => gameLogic(rules, round);
