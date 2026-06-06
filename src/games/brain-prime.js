#!/usr/bin/env node

import startGame from "../../src/index.js";
import generateNumber from "../../src/generateNumber.js";

const isPrime = (num) => {
  if (num === 2) return true;
  if (num <= 0 || num === 1 || num % 2 === 0) {
    return false;
  }
  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) return false;
  }
  return true;
};

const brainPrime = () => {
  const question = generateNumber(50, 1);
  const correctAnswer = isPrime(question) ? "yes" : "no";
  return { question: question, correct: correctAnswer };
};

startGame(brainPrime, "brainPrime");

export default brainPrime;
