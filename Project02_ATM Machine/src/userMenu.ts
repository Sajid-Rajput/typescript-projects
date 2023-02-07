import chalk from "chalk";
import login from "./login.js";
import inquirer from "inquirer";
import ATM_Machine from "./atm_machine.js";
import loading from "./loadingAnimation.js";

export default async function userMenu(): Promise<void> {
  const userValidation: ATM_Machine = await login();
  do {
    const menu = await inquirer.prompt([
      {
        type: "list",
        name: "operation",
        message: "Which operation you want to perform?",
        choices: ["WithDraw", "Deposit", "Check Account Balance"],
      },
    ]);

    switch (menu.operation) {
      case "WithDraw":
        await inquirer
          .prompt([
            {
              type: "input",
              name: "withDraw_Amount",
              message: `Enter your amount${chalk.yellowBright(
                "(for WithDraw)"
              )}: `,
              validate(withDraw_Amount) {
                if (isNaN(withDraw_Amount) || withDraw_Amount === "") {
                  return chalk.redBright("Please, Enter a number!");
                } else if (
                  Number(withDraw_Amount) > userValidation.accountBalance
                ) {
                  return chalk.redBright(
                    "***You have unsufficient balance for withdraw this amount***\n"
                  );
                } else {
                  return true;
                }
              },
            },
          ])
          .then(async (given_widthDraw_Amount): Promise<void> => {
            userValidation.withdraw(
              Number(given_widthDraw_Amount.withDraw_Amount)
            );
            console.log("\n");
            await loading("Processing...");
            console.log(`
                    ${chalk.bold.greenBright(
                      `\n***Your WithDraw Request Executed Successfully***\n`
                    )}${chalk.yellowBright(`Please Collect Your Money...`)}
                    `);
          });
        break;

      case "Deposit":
        await inquirer
          .prompt([
            {
              type: "input",
              name: "deposit_Amount",
              message: `Enter your amount${chalk.yellowBright(
                "(for Deposit)"
              )}: `,
              validate(deposit_Amount) {
                if (isNaN(deposit_Amount) || deposit_Amount === "") {
                  return chalk.redBright("Please, Enter a number!");
                } else if (Number(deposit_Amount) === 0) {
                  return chalk.redBright("***Enter the Amount***\n");
                } else {
                  return true;
                }
              },
            },
          ])
          .then(async (given_deposit_Amount): Promise<void> => {
            userValidation.deposit(Number(given_deposit_Amount.deposit_Amount));
            console.log("\n");
            await loading("Processing...");
            console.log(`
                  ${chalk.bold.greenBright(
                    `\n***Your Deposit Request Executed Successfully***\n`
                  )}
                  `);
          });
        break;

      case "Check Account Balance":
        console.log("\n");
        await loading("Processing...");
        console.log(userValidation.accountDetails());
        break;

      default:
        console.log(chalk.bold.italic.red("Something went wrong..."));
        break;
    }

    var restart = await inquirer.prompt([
      {
        type: "list",
        name: "restart",
        message: "Do you want to perform more operations?",
        choices: ["Yes", "No"],
      },
    ]);
  } while (restart.restart === "Yes");
}
