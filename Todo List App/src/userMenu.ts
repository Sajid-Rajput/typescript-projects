import chalk from "chalk";
import inquirer from "inquirer";

export default async function userMenu(): Promise<void> {
  let todoListArray: (string | number)[] = [];
  let closeApp: boolean = false;
  do {
    const menu = await inquirer.prompt([
      {
        type: "list",
        name: "operation",
        message: "Which todo list operation you want to perform?",
        choices: [
          "Add Task",
          "Remove Task",
          "Display list of tasks",
          "Close TODO App",
        ],
      },
    ]);

    switch (menu.operation) {
      case "Add Task":
        await inquirer
          .prompt([
            {
              type: "input",
              name: "addTask",
              message: "Enter the task: ",
              validate(addTask): string | boolean {
                if (addTask === "") {
                  return chalk.redBright("Please, Enter a task!");
                } else {
                  return true;
                }
              },
            },
          ])
          .then((task) => {
            todoListArray.push(task.addTask);
          });
        break;

      case "Remove Task":
        if (todoListArray.length === 0) {
          console.log(chalk.yellowBright("Todo List is empty..."));
        } else {
          await inquirer
            .prompt([
              {
                type: "input",
                name: "removeTask",
                message: "Enter the task number that you want to remove: ",
                validate(removeTask): string | boolean {
                  if (isNaN(removeTask) || removeTask === "") {
                    return chalk.redBright("Please, Enter a number!");
                  } else if (removeTask > todoListArray.length) {
                    return chalk.redBright("Please, Enter a valid number!");
                  } else {
                    return true;
                  }
                },
              },
            ])
            .then((task) => {
              todoListArray.splice(task.removeTask - 1, 1);
            });
        }
        break;

      case "Display list of tasks":
        if (todoListArray.length === 0) {
          console.log(chalk.yellowBright(`No task is added yet...`));
        } else {
          for (let index = 1; index <= todoListArray.length; index++) {
            console.log(`${index}) ${todoListArray[index - 1]}`);
          }
        }
        break;

      case "Close TODO App":
        closeApp = true;
        break;

      default:
        console.log(chalk.bold.italic.red("Something went wrong..."));
        break;
    }
    console.log("\n");
  } while (closeApp !== true);
}
