import startGame from "../index.js";
import generateNumber from "../generateNumber.js";

const isEven = (num) => num % 2 === 0;

const brainEven = () => {
  const question = generateNumber(100, 0);
  const correctAnswer = isEven(question) ? "yes" : "no";
  return { correct: correctAnswer, question: question };
};

startGame(brainEven, `brainEven`);

export default brainEven;
