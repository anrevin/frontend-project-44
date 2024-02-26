import readlineSync from 'readline-sync';

const roundCount = 3;

export default (rules, round) => {
  const name = readlineSync.question('May I have your name?: ');

  console.log(`Hello, ${name}!`);

  console.log(rules);

  for (let i = 0; i < roundCount; i += 1) {
    const [question, rightAnswer] = round();

    console.log(`Question: ${question}`);

    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === rightAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};
