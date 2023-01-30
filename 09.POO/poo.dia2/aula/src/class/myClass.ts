import MyInterface from "../interfaces/myInterface";

export default class MyClass implements MyInterface {
  constructor(
    public myNumber: number
  ) {}

  public myFunc(myParam: number): string {
    const sum = this.myNumber + myParam
    return JSON.stringify(sum);
  }
}