import Person from "./person.js";

export default class Student extends Person {
  private _name: string;

  constructor() {
    super();
    this._name = "";
  }

  set name(n: string) {
    this._name = n;
  }

  get name(): string {
    return this._name;
  }
}
