#!/usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import title from "./title.js";
import level from "./levelSelection.js";
import user_guess_number from "./userInput.js";
import { thankYou } from "./endgraphic.js";

async function number_guessing_game(): Promise<void> {
  let lives: number;
  await title();
  const player_level: string = await level();
  do {
    if (player_level === "PRO") {
      lives = 3;
    } else {
      lives = 5;
    }
    const guessingValue: number = Math.floor(Math.random() * (10 - 0 + 1) + 0);
    do {
      console.log(chalk.bold.yellowBright(`\nNo. of lives: ${lives}`));
      var user_number: string = await user_guess_number();

      if (Number(user_number) > guessingValue) {
        console.log(
          chalk.redBright(
            `Your number ${user_number} is greater than the guess number.\n`
          )
        );
        --lives;
      } else if (Number(user_number) < guessingValue) {
        console.log(
          chalk.redBright(
            `Your number ${user_number} is less than the guess number.\n`
          )
        );
        --lives;
      } else if (Number(user_number) === guessingValue) {
        console.log(
          chalk.greenBright(`Congratulation! You guessed the right number.\n`)
        );
      }
    } while (Number(user_number) !== guessingValue && lives > 0);

    var ask_for_restart = await inquirer.prompt([
      {
        type: "list",
        name: "restart",
        message: "Do you want to restart the game?",
        choices: ["Yes", "No"],
      },
    ]);
  } while (ask_for_restart.restart === "Yes");
  console.log(thankYou);
}

number_guessing_game();
