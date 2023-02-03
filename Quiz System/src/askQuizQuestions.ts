import chalk from "chalk";
import inquirer from "inquirer";

export default async function quizMasterHead(): Promise<void> {
  const answers: string[] = [
    "Decentralization",
    "All of the above",
    "False",
    "All of the above",
    "False",
    "Has trust problems",
    "Auditability",
    "Resilience",
    "Address a skills gap",
    "Both B and C",
  ];

  do {
    let answersIterator = 0;
    let correctAnswer = 0;
    const quiz = await inquirer.prompt([
      {
        type: "checkbox",
        name: "question1",
        message:
          "The five elements of blockchain are distribution, encryption, immutability, tokenization and:",
        choices: [
          "Transparency",
          "Authorization",
          "Efficiency",
          "Decentralization",
        ],
        validate(question1: string[]): boolean | string {
          if (question1.length === 0 || question1.length > 1) {
            return chalk.redBright("Please! Select single option");
          } else {
            return true;
          }
        },
      },
      {
        type: "checkbox",
        name: "question2",
        message: "What can an IT leader use enterprise blockchain for?",
        choices: [
          "Streamline supply chains",
          "Improve financial transactions",
          "Provide identity management",
          "All of the above",
        ],
        validate(question2: string[]): boolean | string {
          if (question2.length === 0 || question2.length > 1) {
            return chalk.redBright("Please! Select single option");
          } else {
            return true;
          }
        },
      },
      {
        type: "checkbox",
        name: "question3",
        message:
          "True or false: Smart contracts are legally binding contracts.",
        choices: ["True", "False"],
        validate(question3: string[]): boolean | string {
          if (question3.length === 0 || question3.length > 1) {
            return chalk.redBright("Please! Select single option");
          } else {
            return true;
          }
        },
      },
      {
        type: "checkbox",
        name: "question4",
        message:
          "What are some of the advantages of implementing enterprise blockchain?",
        choices: [
          "Reduce IT costs",
          "Expand business-to-business and business-to-consumer networks",
          "Enable new products",
          "All of the above",
        ],
        validate(question4: string[]): boolean | string {
          if (question4.length === 0 || question4.length > 1) {
            return chalk.redBright("Please! Select single option");
          } else {
            return true;
          }
        },
      },
      {
        type: "checkbox",
        name: "question5",
        message: "True or false: A user can alter data on a blockchain.",
        choices: ["True", "False"],
        validate(question5: string[]): boolean | string {
          if (question5.length === 0 || question5.length > 1) {
            return chalk.redBright("Please! Select single option");
          } else {
            return true;
          }
        },
      },
      {
        type: "checkbox",
        name: "question6",
        message: "What feature about enterprise blockchain is accurate?",
        choices: [
          "Lowers transactional settlement times",
          "Has trust problems",
          "Requires no change management",
          "Is energy efficient",
        ],
        validate(question6: string[]): boolean | string {
          if (question6.length === 0 || question6.length > 1) {
            return chalk.redBright("Please! Select single option");
          } else {
            return true;
          }
        },
      },
      {
        type: "checkbox",
        name: "question7",
        message:
          "What is one of the challenges of permissioned, also known as private or enterprise, blockchain?",
        choices: ["Speed", "Auditability", "Security", "Access control"],
        validate(question7: string[]): boolean | string {
          if (question7.length === 0 || question7.length > 1) {
            return chalk.redBright("Please! Select single option");
          } else {
            return true;
          }
        },
      },
      {
        type: "checkbox",
        name: "question8",
        message:
          "What areas of cybersecurity does blockchain have the potential to improve?",
        choices: [
          "Building security",
          "Payment history",
          "Password complexity",
          "Resilience",
        ],
        validate(question8: string[]): boolean | string {
          if (question8.length === 0 || question8.length > 1) {
            return chalk.redBright("Please! Select single option");
          } else {
            return true;
          }
        },
      },
      {
        type: "checkbox",
        name: "question9",
        message:
          "Blockchain has the potential to support the following enterprise goals except:",
        choices: [
          "Uncover insights using data",
          "Address a skills gap",
          "Promote traceability",
          "Boost personal communication between suppliers and producers",
        ],
        validate(question9: string[]): boolean | string {
          if (question9.length === 0 || question9.length > 1) {
            return chalk.redBright("Please! Select single option");
          } else {
            return true;
          }
        },
      },
      {
        type: "checkbox",
        name: "question10",
        message:
          "What are essential skills a blockchain developer should have?",
        choices: [
          "Official asset registry, voting facilitation, back-office functions",
          "Familiarity of blockchain architecture, foundation in cryptography, proficiency in common programming languages",
          "Foundation in data structures, web development, understanding of smart contracts",
          "Both B and C",
        ],
        validate(question10: string[]): boolean | string {
          if (question10.length === 0 || question10.length > 1) {
            return chalk.redBright("Please! Select single option");
          } else {
            return true;
          }
        },
      },
    ]);

    console.log(`\n\n${chalk.bold.bgMagenta("Quiz Result: ")}`);
    for (const key in quiz) {
      if (quiz[key][0] === answers[answersIterator]) {
        console.log(`
          Question${answersIterator + 1}:
          Your Answer: ${chalk.cyanBright(quiz[key])}
          ${chalk.greenBright("Correct!")}`);
        ++correctAnswer;
      } else {
        console.log(`
          Question${answersIterator + 1}:
          Your Answer: ${chalk.cyanBright(quiz[key])}
          ${chalk.redBright("Incorrect!")}`);
      }
      ++answersIterator;
    }

    console.log(
      `\n\n\t${chalk.bold.magenta(`Score:`)} ${chalk.yellowBright(
        correctAnswer
      )} / 10`
    );
    console.log(
      `\t${chalk.bold.magenta(`Percentage:`)} You secured ${chalk.yellowBright(
        `${(correctAnswer / 10) * 100}%`
      )} in quiz.`
    );

    var quizRestart = await inquirer.prompt([
      {
        type: "list",
        name: "restart",
        message: "Do you want a quiz retake?",
        choices: ["Yes", "No"],
      },
    ]);
    console.log("\n");
  } while (quizRestart.restart === "Yes");
}
