#!/usr/bin/env node

import startGame from "../../src/index.js";
import generateNumber from "../../src/generateNumber.js";

const generateEquation = () => {
  const num1 = generateNumber(50, 0),
    num2 = generateNumber(50, 0);
  const operation = ["+", "-", "*"][Math.floor(Math.random() * 3)];
  return `${num1} ${operation} ${num2}`;
};

const getCorrectAnswer = (equation) => {
  let [num1, operation, num2] = equation.split(" ");
  ((num1 = parseInt(num1)), (num2 = parseInt(num2)));
  let answer;
  switch (operation) {
    case "-":
      answer = num1 - num2;
      break;
    case "*":
      answer = num1 * num2;
      break;
    default:
      answer = num1 + num2;
  }
  return answer;
};

const brainCalc = () => {
  const question = generateEquation();
  const correctAnswer = getCorrectAnswer(question).toString();
  return { correct: correctAnswer, question: question };
};

startGame(brainCalc, "brainCalc");

export default brainCalc;
