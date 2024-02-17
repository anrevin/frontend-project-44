import getRandomNumber from '../randomNumber.js';
import gameLogic from '../index.js';

const rules = 'What number is missing in the progression?';

const round = () => {
  const lengthProgression = getRandomNumber(8, 11);

  const firstElement = getRandomNumber(1, 100);

  const stepProgression = getRandomNumber(2, 5);

  const numberHiddenElement = getRandomNumber(0, lengthProgression);

  const progression = [firstElement];

  for (let i = 0; i < lengthProgression - 1; i += 1) {
    const addElement = progression[i] + stepProgression;
    progression.push(addElement);
  }

  const rightAnswer = progression[numberHiddenElement];

  progression[numberHiddenElement] = '..';

  const question = progression;

  const result = [question, rightAnswer.toString()];

  return result;
};
export default () => gameLogic(rules, round);
