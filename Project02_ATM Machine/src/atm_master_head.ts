import chalk from "chalk";

export default abstract class ATM_Machine_MASTER_HEAD {
  private _username: string;
  private _accountNumber: number;
  private _accountPassword: number;
  private _accountBalance: number;

  constructor(
    username: string,
    account_Number: number,
    account_Password: number,
    account_Balance: number
  ) {
    this._username = username;
    this._accountNumber = account_Number;
    this._accountPassword = account_Password;
    this._accountBalance = account_Balance;
  }

  get accountNumber(): number {
    return this._accountNumber;
  }

  get accountPassword(): number {
    return this._accountPassword;
  }

  get accountBalance(): number {
    return this._accountBalance;
  }

  deposit(value: number): void {
    this._accountBalance = this._accountBalance + value;
  }

  withdraw(value: number): void {
    this._accountBalance = this._accountBalance - value;
  }

  accountDetails(): string {
    return (
      `
      ${chalk.yellowBright(`Date: ${new Date()}`)}
      
      Account Holder Name: ${chalk.greenBright(this._username)}
      Account Number: ${chalk.greenBright(this._accountNumber)}
      Current Balance: ${chalk.greenBright(this._accountBalance)}
      `
    );
  }
}
