import Notificator from './interfaces/Notificator';

export default class ConsoleNotification implements Notificator {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  sendNotification(message: string): void {
    console.log(`Here we go again! - ${message} from ${this.name}`);
  }
}