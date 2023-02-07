import chalk from "chalk";
import BankAccount from "./bankAccount.js";

export default class Customer {
  public Firstname: string;
  public Lastname: string;
  public Gender: "Male" | "Female" | "Other";
  public Age: number;
  public MobileNumber: string;
  public bankAccount: BankAccount = new BankAccount();

  constructor() {
    this.Firstname = "";
    this.Lastname = "";
    (this.Gender = "Male"), (this.Age = 0), (this.MobileNumber = "");
  }

  set firstname(f_name: string) {
    this.Firstname = f_name;
  }

  get firstname(): string {
    return this.Firstname;
  }

  set lastname(l_name: string) {
    this.Lastname = l_name;
  }

  get lastname(): string {
    return this.Lastname;
  }

  set gender(getGender: "Male" | "Female" | "Other") {
    this.Gender = getGender;
  }

  get gender(): "Male" | "Female" | "Other" {
    return this.Gender;
  }

  set age(getAge: number) {
    this.Age = getAge;
  }

  get age(): number {
    return this.Age;
  }

  set mobileNumber(m_number: string) {
    this.MobileNumber = m_number;
  }

  get mobileNumber(): string {
    return this.MobileNumber;
  }

  set bankAccountBalance(amount: number) {
    this.bankAccount.accountbalance = amount;
  }

  get bankAccountBalance(): number {
    return this.bankAccount.accountbalance;
  }

  customerInfo(): string {
    return `
            ${chalk.yellowBright(`Date: ${new Date()}`)}
            
            Account Holder Name: ${chalk.greenBright(
              `${this.Firstname} ${this.Lastname}`
            )}
            Gender: ${chalk.greenBright(this.Gender)}
            Age: ${chalk.greenBright(this.Age)}
            Mobile No: ${chalk.greenBright(this.MobileNumber)}
            Bank Balance: ${chalk.greenBright(this.bankAccount.accountbalance)}
            `;
  }
}
