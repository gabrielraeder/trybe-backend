import Database from "../interfaces/DatabaseInterface";
import Logger from "../interfaces/loggerInterface";
import ConsoleLogger from "./ConsoleLogger";

export default class ExampleDatabase implements Database {
  constructor(public logger: Logger = new ConsoleLogger()) { }

  public save(key: string, value: string): void {
    this.logger.log(`Salvando o valor ${value} na chave ${key}`);
  }
}