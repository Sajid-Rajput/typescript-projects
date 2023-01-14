import chalk from "chalk";
import inquirer from "inquirer";
import ATM_Machine from "./atm_machine.js";
import { userArray } from "./createUsers.js";

export default async function login(): Promise<ATM_Machine> {
  let userObject: ATM_Machine | undefined;
  do {
    const loginCredentials = await inquirer
      .prompt([
        {
          type: "input",
          name: "account_number",
          message: "Enter the Bank Account No(8 Digits): ",
          validate(account_no): string | boolean {
            if (isNaN(account_no) || account_no === "") {
              return chalk.redBright("Please, Enter the number!");
            } else if (account_no.length !== 8) {
              return chalk.redBright("Please, Enter the 8 Digit Number!");
            } else {
              return true;
            }
          },
        },
        {
          type: "password",
          name: "account_password",
          message: "Enter the Bank Account Password: ",
          validate(account_no): string | boolean {
            if (isNaN(account_no) || account_no === "") {
              return chalk.redBright("Please, Enter the number!");
            } else {
              return true;
            }
          },
        },
      ])
      .then((answers) => {
        userObject = userArray.find(
          (element) =>
            element.accountNumber === Number(answers.account_number) &&
            element.accountPassword === Number(answers.account_password)
        );

        if (userObject === undefined) {
          console.log(
            chalk.redBright(
              "\nAlert! Invalid (Account Number) or (Account Password)\n"
            )
          );
        }
      });
  } while (userObject === undefined);
  return userObject;
}
