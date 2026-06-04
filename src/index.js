import readlineSync from "readline-sync";

const askForName = () => {
  console.log(`Welcome to the Brain Games!`);
  const userName = readlineSync.question("May I have your name? ");
  console.log(`Hello, ${userName}`);
  return userName;
};
const explainRules = (gameTitle) => {
  const rulesList = {
    brainEven: `Answer "yes" if the number is even, otherwise answer "no".`,
    brainCalc: `What is the result of the expression?`,
    brainGCD: `Find the greatest common divisor of given numbers.`,
    brainProgression: `What number is missing in the progression?`,
    brainPrime: `Answer "yes" if given number is prime. Otherwise answer "no".`,
  };

  console.log(rulesList[gameTitle]);
};

const startGame = (game, gameTitle) => {
  const userName = askForName();
  explainRules(gameTitle);
  let i = 3;
  while (i > 0) {
    const { correct: correctAnswer, question } = game(userName);
    const input = readlineSync.question(`Question: ${question} `);
    console.log(`Your answer: ${input}`);
    if (input === correctAnswer) {
      console.log(`Correct!`);
    } else {
      console.log(`Let's try again, ${userName}`);
      break;
    }
    i -= 1;
  }

  if (i === 0) {
    console.log(`Congratulations, ${userName}!`);
  }
};

export default startGame;
