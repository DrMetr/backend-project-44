#!/usr/bin/env node

import startGame from "../../src/index.js";
import generateNumber from "../../src/generateNumber.js";

const generateTuple = (gcd) => {
  const num1 = gcd * generateNumber(gcd - 1, 1),
    num2 = gcd * generateNumber(gcd - 1, 1);
  return `${num1} ${num2}`;
};

const brainGCD = () => {
  const gcd = generateNumber(15, 1);
  const question = generateTuple(gcd);
  return { correct: gcd.toString(), question: question };
};

startGame(brainGCD, "brainGCD");

export default brainGCD;
