import chalk from "chalk";
import inquirer from "inquirer";

export default async function userMenu(): Promise<void> {
  do {
    const PKR_RUPEE_VALUE = await inquirer.prompt([
      {
        type: "input",
        name: "currencyInRupee",
        message: "Enter the Currency in Pakistani Rupee (PKR): ",
        validate(currencyInRupee: any): string | boolean {
          if (isNaN(currencyInRupee) || currencyInRupee === "") {
            return chalk.redBright("Please, Enter the Amount(in Numbers)!");
          } else {
            return true;
          }
        },
      },
      {
        type: "list",
        name: "selectCurrency",
        message:
          "Select the Curruncy in which you want to convert Pakistani Rupee (PKR)",
        choices: [
          "US dollar (USD)",
          "Euro (EUR)",
          "Japanese yen (JPY)",
          "Pound sterling (GBP)",
          "Australian dollar (AUD)",
          "Canadian dollar (CAD)",
          "Swiss franc (CHF)",
          "Chinese Yuan",
        ],
      },
    ]);

    switch (PKR_RUPEE_VALUE.selectCurrency) {
      case "US dollar (USD)":
        console.log(
          chalk.greenBright(
            `\n${PKR_RUPEE_VALUE.currencyInRupee} (PKR) = ${
              (Number(PKR_RUPEE_VALUE.currencyInRupee) *
                100000 *
                (0.004 * 100000)) /
              (100000 * 100000)
            } (USD)`
          )
        );
        break;

      case "Euro (EUR)":
        console.log(
          chalk.greenBright(
            `\n${PKR_RUPEE_VALUE.currencyInRupee} (PKR) = ${
              (Number(PKR_RUPEE_VALUE.currencyInRupee) *
                100000 *
                (0.0037 * 100000)) /
              (100000 * 100000)
            } (EUR)`
          )
        );
        break;

      case "Japanese yen (JPY)":
        console.log(
          chalk.greenBright(
            `\n${PKR_RUPEE_VALUE.currencyInRupee} (PKR) = ${
              (Number(PKR_RUPEE_VALUE.currencyInRupee) *
                100000 *
                (0.52 * 100000)) /
              (100000 * 100000)
            } (JPY)`
          )
        );
        break;

      case "Pound sterling (GBP)":
        console.log(
          chalk.greenBright(
            `\n${PKR_RUPEE_VALUE.currencyInRupee} (PKR) = ${
              (Number(PKR_RUPEE_VALUE.currencyInRupee) *
                100000 *
                (0.0031 * 100000)) /
              (100000 * 100000)
            } (GBP)`
          )
        );
        break;

      case "Australian dollar (AUD)":
        console.log(
          chalk.greenBright(
            `\n${PKR_RUPEE_VALUE.currencyInRupee} (PKR) = ${
              (Number(PKR_RUPEE_VALUE.currencyInRupee) *
                100000 *
                (0.0056 * 100000)) /
              (100000 * 100000)
            } (AUD)`
          )
        );
        break;

      case "Canadian dollar (CAD)":
        console.log(
          chalk.greenBright(
            `\n${PKR_RUPEE_VALUE.currencyInRupee} (PKR) = ${
              (Number(PKR_RUPEE_VALUE.currencyInRupee) *
                100000 *
                (0.0053 * 100000)) /
              (100000 * 100000)
            } (CAD)`
          )
        );
        break;

      case "Swiss franc (CHF)":
        console.log(
          chalk.greenBright(
            `\n${PKR_RUPEE_VALUE.currencyInRupee} (PKR) = ${
              (Number(PKR_RUPEE_VALUE.currencyInRupee) *
                100000 *
                (0.0037 * 100000)) /
              (100000 * 100000)
            } (CHF)`
          )
        );
        break;

      case "Chinese Yuan":
        console.log(
          chalk.greenBright(
            `\n${PKR_RUPEE_VALUE.currencyInRupee} (PKR) = ${
              (Number(PKR_RUPEE_VALUE.currencyInRupee) *
                100000 *
                (0.027 * 100000)) /
              (100000 * 100000)
            } Yuan`
          )
        );
        break;

      default:
        console.log(chalk.redBright(`Something went wrong!!!`));
        break;
    }

    console.log("\n");
    var closeCurrencyConverter = await inquirer.prompt([
      {
        type: "list",
        name: "restart",
        message: "Do you want to perform more operations?",
        choices: ["Yes", "No"],
      },
    ]);
    console.log("\n");
  } while (closeCurrencyConverter.restart === "Yes");
}
