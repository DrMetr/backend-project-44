#!/usr/bin/env node

//import readlineSync from "readline-sync";
import startGame from "../../src/index.js";
import generateNumber from "../../src/generateNumber.js";

const isEven = (num) => (num % 2 === 0 ? true : false);

const brainEven = () => {
  const question = generateNumber(100, 0);
  const correctAnswer = isEven(question) ? "yes" : "no";
  return { correct: correctAnswer, question: question };
};

startGame(brainEven, `brainEven`);

export default brainEven;
