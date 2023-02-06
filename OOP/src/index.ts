#!/usr/bin/env node

import chalk from "chalk";
import inquirer from "inquirer";
import Person from "./person.js";
import Student from "./student.js";

async function oop_project(): Promise<void> {
  const userPersonality = await inquirer.prompt([
    {
      type: "input",
      name: "input",
      message:
        "Type 1 if you like to talk to others and type 2 if you would rather keep to yourself? ",
      validate(input: any): string | boolean {
        if (isNaN(input) || input.trim().length === 0) {
          return chalk.redBright("Please, Enter a number!!!");
        } else {
          return true;
        }
      },
    },
  ]);

  const myPerson: Person = new Person();
  myPerson.askQuestion(Number(userPersonality.input));
  console.log(`You are ${myPerson.getPersonality()}`);

  const userName = await inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is your name? ",
      validate(name: any): string | boolean {
        if (!isNaN(name) || name.trim().length === 0) {
          return chalk.redBright("Please, Enter valid name!!!");
        } else {
          return true;
        }
      },
    },
  ]);

  const myStudent: Student = new Student();
  myStudent.name = userName.name;
  console.log(
    `Your name is ${
      myStudent.name
    } and your personality type is ${myStudent.getPersonality()}.`
  );
}

oop_project();
