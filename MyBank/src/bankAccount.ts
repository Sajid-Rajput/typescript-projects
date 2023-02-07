import chalk from "chalk";

interface IBankAccount {
  Debit(amount: number): string;
  Credit(amount: number): string;
}

export default class BankAccount implements IBankAccount {
  public AccountBalance: number;

  constructor() {
    this.AccountBalance = 100;
  }

  set accountbalance(amount: number) {
    this.AccountBalance = amount;
  }

  get accountbalance(): number {
    return this.AccountBalance;
  }

  Debit(amount: number): string {
    let statement: string = chalk.redBright(
      "Sorry! You have insufficient balance!"
    );

    if (this.AccountBalance > 0) {
      statement = chalk.redBright("The amount you entered is wrong!");

      if (this.AccountBalance > amount) {
        this.AccountBalance -= amount;
        statement = `Transaction successfull! New account balance is ${chalk.greenBright(
          this.AccountBalance
        )}`;
      } else {
        statement = chalk.magentaBright(`You don't have enough money to do this transaction`);
      }
    }

    return statement;
  }

  Credit(amount: number): string {
    let statement: string = chalk.redBright("Transaction failed!");
    if (amount > 0) {
      this.AccountBalance += amount;
      if (amount > 100) {
        this.AccountBalance -= 1;
      }

      statement = chalk.greenBright("Your account has been credited successfully!");
    }

    return statement;
  }
}
