import SuperClass from "./superclass";

export default class SubClass extends SuperClass {
  // public sayHello2():void {
  //   this.sayHello();
  // }
  constructor() {
    super(false);
  }
}