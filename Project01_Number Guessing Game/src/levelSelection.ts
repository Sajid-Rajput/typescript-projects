import inquirer from "inquirer";

export default async function level(): Promise<string> {
  const selectLevel = await inquirer.prompt([
    {
      type: "list",
      name: "levelChoice",
      message: "Which type of Player do you are?",
      choices: ["NOOB", "PRO"],
    },
  ]);

  return selectLevel.levelChoice;
}
