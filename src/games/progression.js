import getRandomNumber from '../utils.js';
import gameLogic from '../index.js';

const rules = 'What number is missing in the progression?';

const getProgression = (lengthProgression, stepProgression, firstElement) => {
  const progression = [firstElement];

  for (let i = 0; i < lengthProgression - 1; i += 1) {
    const addElement = progression[i] + stepProgression;
    progression.push(addElement);
  }
  return progression;
};

const round = () => {
  const lengthProgression = getRandomNumber(5, 11);

  const firstElement = getRandomNumber(1, 100);

  const stepProgression = getRandomNumber(2, 5);

  const numberHiddenElement = getRandomNumber(0, lengthProgression);

  const progression = getProgression(lengthProgression, stepProgression, firstElement);

  const rightAnswer = progression[numberHiddenElement];

  progression[numberHiddenElement] = '..';

  const question = progression.join(' ');

  return [question, rightAnswer.toString()];
};
export default () => gameLogic(rules, round);
