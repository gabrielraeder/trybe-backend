import Logger from "../interfaces/loggerInterface";

export default class ConsoleLogger implements Logger {
  public log(string: string): void {
    console.log(string);
  }
}

export class ConsoleLogger2 implements Logger {
  public log(string: string): void {
    console.log('Logger2: ' + string);
  }
}