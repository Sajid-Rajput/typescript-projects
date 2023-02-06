export default class Person {
  private _personality: string;

  constructor() {
    this._personality = "Mystery";
  }

  askQuestion(answer: number): void {
    if (answer === 1) {
      this._personality = "Extrovert";
    } else if (answer === 2) {
      this._personality = "Introvert";
    } else {
      this._personality = "still a Mystery!";
    }
  }

  getPersonality(): string {
    return this._personality;
  }
}
