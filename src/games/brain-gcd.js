#!/usr/bin/env node

import startGame from "../../src/index.js";
import generateNumber from "../../src/generateNumber.js";

const brainGCD = () => {
  let num1 = generateNumber(50, 1),
    num2 = generateNumber(50, 1);
  const question = `${num1} ${num2}`;
  const correct = findAnswer(num1, num2).toString();
  return { correct: correct, question: question };
};

const findAnswer = (a, b) => {
  while (b !== 0) {
    let copyA = a;
    a = b;
    b = copyA % b;
  }
  return a;
};

startGame(brainGCD, "brainGCD");

export default brainGCD;
