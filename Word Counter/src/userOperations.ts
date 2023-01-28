import chalk from "chalk";
import inquirer from "inquirer";

export default async function userOperations(): Promise<void> {
  do {
    await inquirer
      .prompt([
        {
          type: "input",
          name: "phrase",
          message: "Enter the Paragraph: ",
          validate(phrase: string): string | boolean {
            if (phrase === "" || phrase.trim().length === 0) {
              return chalk.redBright("Please, Enter a Paragraph!!!");
            } else {
              return true;
            }
          },
        },
      ])
      .then((paragraph) => {
        let wordCounter: number = 1;
        let characterCounter: number = 0;
        let originalParagraph: string = paragraph.phrase;
        originalParagraph = originalParagraph.replace(/\s+/g, " ").trim();

        for (let index = 0; index < originalParagraph.length; index++) {
          if (originalParagraph.charAt(index) === " ") {
            ++wordCounter;
            continue;
          }
          ++characterCounter;
        }

        console.log(
          chalk.bold.greenBright(
            `\nNumber of Words: ${wordCounter}   Number of Characters: ${characterCounter}`
          )
        );
      });

    console.log("\n");
    var wordCounter = await inquirer.prompt([
      {
        type: "list",
        name: "restart",
        message: "Do you want to perform more operations?",
        choices: ["Yes", "No"],
      },
    ]);
    console.log("\n");
  } while (wordCounter.restart === "Yes");
}
