import chalk from "chalk";
import chalkAnimation, { rainbow } from "chalk-animation";

function sleep() {
  return new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });
}

export default async function welcomeAnimation() {
  let rainbow =
    chalkAnimation.rainbow(`    +-+-+-+-+-+-+-+ +-+-+ +-+-+-+-+-+ +-+-+-+-+-+-+-+-+-+-+
    |W|e|l|c|o|m|e| |t|o| |S|a|j|i|d| |C|a|l|c|u|l|a|t|o|r|
    +-+-+-+-+-+-+-+ +-+-+ +-+-+-+-+-+ +-+-+-+-+-+-+-+-+-+-+`);
  await sleep();
  rainbow.stop();
  console.log(chalk.bold.greenBright`         _____________________
        |  _________________  |
        | | JO           0. | |
        | |_________________| |
        |  ___ ___ ___   ___  |
        | | 7 | 8 | 9 | | + | |
        | |___|___|___| |___| |
        | | 4 | 5 | 6 | | - | |
        | |___|___|___| |___| |
        | | 1 | 2 | 3 | | x | |
        | |___|___|___| |___| |
        | | . | 0 | = | | / | |
        | |___|___|___| |___| |
        |_____________________|\n`);
}
