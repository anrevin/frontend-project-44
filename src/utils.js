// минимальное число включается, максимальное не включается
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);

export default getRandomNumber;
