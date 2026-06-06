#!/usr/bin/env node

import startGame from "../index.js";
import generateNumber from "../generateNumber.js";

const generateProgression = (length, firstElement, step) => {
  return new Array(length)
    .fill(firstElement)
    .map((element, index) => element + step * index);
};

const brainProgression = () => {
  const length = generateNumber(10, 5);
  const index = generateNumber(length - 1, 0);
  const step = generateNumber(15, 0);
  const firstElement = generateNumber(30, 0);
  const progression = generateProgression(length, firstElement, step);
  const question = `${progression.with(index, "..").join(" ")}`;
  return { question: question, correct: progression[index].toString() };
};

startGame(brainProgression, "brainProgression");

export default brainProgression;
