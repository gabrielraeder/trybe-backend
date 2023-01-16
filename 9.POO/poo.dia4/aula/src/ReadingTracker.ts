// ReadingTracker.ts

import ConsoleNotification from './ConsoleNotification';
import EmailNotification from './EmailNotification';
import Notificator from './interfaces/Notificator';
import PhoneNotification from './PhoneNotification';

export default class ReadingTracker {
  private readingGoal: number;
  private booksRead: number;
  notificator: Notificator;

  constructor(
    readingGoal: number, notificator: Notificator = new EmailNotification(),
) {
    this.notificator = notificator;
    this.readingGoal = readingGoal;
    this.booksRead = 0;
  }

  trackReadings(readsCount: number): void {
    this.booksRead += readsCount;
    if (this.booksRead >= this.readingGoal) {
      this.notificator.sendNotification(
        'Congratulations! You\'ve reached your reading goal!',
      );
      return;
    }
    this.notificator.sendNotification('There are still some books to go!');
  }
  // Aqui viriam mais métodos, que fogem o escopo deste exercício
}

// const phone = new PhoneNotification(33742666);
const console = new ConsoleNotification('Trybe');
const readTracker = new ReadingTracker(20, console);
readTracker.trackReadings(12);
readTracker.trackReadings(9);
