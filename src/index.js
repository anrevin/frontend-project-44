import readlineSync from 'readline-sync';

export default (rules, round) => {
  const name = readlineSync.question('May I have your name?: ');

  console.log(`Hello, ${name}!`);

  console.log(rules);

  const roundCount = 3;

  for (let i = 0; i < roundCount; i += 1) {
    const startRound = round();

    console.log(`Question: ${startRound[0]}`);

    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === startRound[1]) {
      console.log('Correct!');
    } else {
      return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${startRound[1]}'.\nLet's try again, ${name}!`);
    }
  }

  return console.log(`Congratulations, ${name}!`);
};
