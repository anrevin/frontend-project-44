import readlineSync from 'readline-sync';

export default () => {
  const name = readlineSync.question('May I have your name?: ');
  alert(name);
  return console.log(`Hello, ${name}!`);
};
