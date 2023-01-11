import Logger from "./loggerInterface";

export default interface Database {
  logger: Logger;
  save(key: string, value: string): void;
}