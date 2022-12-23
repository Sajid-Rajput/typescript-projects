#!/usr/bin/env node

import welcomeAnimation from "./WelcomeAnimation.js";
import { thankYou } from "./EndAnimation.js";
import inquirer from "inquirer";
import chalk from "chalk";

async function askQuestion(): Promise<void> {
  const answers = await inquirer.prompt([
    {
      type: "input",
      name: "number1",
      message: "Enter number 1: ",
      validate(number1): string | boolean {
        if (isNaN(number1) || number1 === "") {
          return chalk.redBright("Please, Enter a number!");
        } else {
          return true;
        }
      },
    },
    {
      type: "list",
      name: "operator",
      message: "Which operation you want to perform?",
      choices: [
        "Addition",
        "Subtraction",
        "Multiplication",
        "Division",
        "Modulus",
        "Power",
      ],
    },
    {
      type: "input",
      name: "number2",
      message: "Enter number 2: ",
      validate(number2): string | boolean {
        if (isNaN(number2) || number2 === "") {
          return chalk.redBright("Please, Enter a number!");
        } else {
          return true;
        }
      },
    },
  ]);

  switch (answers.operator) {
    case "Addition":
      console.log(
        chalk.magenta(
          `Your Answer is: ${answers.number1} + ${answers.number2} = ${
            (Number(answers.number1) * 10000000 +
              Number(answers.number2) * 10000000) /
            10000000
          }\n`
        )
      );
      break;
    case "Subtraction":
      console.log(
        chalk.magenta(
          `Your Answer is: ${answers.number1} - ${answers.number2} = ${
            Number(answers.number1) - Number(answers.number2)
          }\n`
        )
      );
      break;
    case "Multiplication":
      console.log(
        chalk.magenta(
          `Your Answer is: ${answers.number1} X ${answers.number2} = ${
            (Number(answers.number1) *
              10000000 *
              (Number(answers.number2) * 10000000)) /
            (10000000 * 10000000)
          }\n`
        )
      );
      break;
    case "Division":
      console.log(
        chalk.magenta(
          `Your Answer is: ${answers.number1} / ${answers.number2} = ${
            Number(answers.number1) / Number(answers.number2)
          }\n`
        )
      );
      break;
    case "Modulus":
      console.log(
        chalk.magenta(
          `Your Answer is: ${answers.number1} Mod ${answers.number2} = ${
            Number(answers.number1) % Number(answers.number2)
          }\n`
        )
      );
      break;
    case "Power":
      console.log(
        chalk.magenta(
          `Your Answer is: ${answers.number1} power(${answers.number2}) = ${
            Number(answers.number1) ** Number(answers.number2)
          }\n`
        )
      );
      break;

    default:
      console.log(`Something went wrong!!!`);
      break;
  }
}

async function mainCalculator() {
  await welcomeAnimation();
  do {
    await askQuestion();
    var restart = await inquirer.prompt([
      {
        type: "list",
        name: "restart",
        message: "Do you want to restart the calculator?",
        choices: ["Yes", "No"],
      },
    ]);
  } while (restart.restart === "Yes");

  console.log(thankYou);
}

mainCalculator();
