export default class SuperClass {
  constructor(
    public isSuper: boolean = true
  ) {}

  public sayHello():void {
    console.log('Olá Mundo!');
  }
}