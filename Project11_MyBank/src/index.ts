#!/usr/bin/env node

import title from "./title.js";
import Customer from "./customer.js";
import { thankYou } from "./endgraphic.js";

async function myBank(): Promise<void> {
  await title();
  const customer1: Customer = new Customer();

  customer1.firstname = "Sajid";
  customer1.lastname = "Rajput";
  customer1.gender = "Male";
  customer1.age = 24;
  customer1.mobileNumber = "03004356781";
  customer1.bankAccountBalance = 4000;

  console.log(customer1.customerInfo());
  console.log(customer1.bankAccount.Debit(10000));
  console.log(customer1.bankAccount.Debit(2000));
  console.log(customer1.bankAccount.Credit(10000));
  console.log(customer1.customerInfo());

  console.log(thankYou);
}

myBank();
