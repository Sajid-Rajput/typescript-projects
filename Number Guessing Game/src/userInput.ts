import inquirer from "inquirer";

export default async function user_guess_number(): Promise<string> {
  const user_given_number = await inquirer.prompt([
    {
      type: "input",
      name: "guessed_number",
      message: "Enter your guess(number): ",
      validate(guessed_number): string | boolean {
        if (isNaN(guessed_number) || guessed_number === "") {
          return "Please, Enter a number!";
        } else if (guessed_number > 10 || guessed_number < 0) {
          return "Please, Enter number between range(0-10) !";
        } else {
          return true;
        }
      },
    },
  ]);
  return user_given_number.guessed_number;
}