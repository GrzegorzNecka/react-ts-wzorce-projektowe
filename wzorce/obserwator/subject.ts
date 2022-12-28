import { Observer, Subject, Release } from './types';

export class NewspaperPeriodical implements Subject<Observer, Release> {
  private newspaperRelease: Release;
  private readonly subscribers: Observer[];

  constructor() {
    this.newspaperRelease = null;
    this.subscribers = [];
  }

  addSubscriber(subscriber: Observer) {
    this.subscribers.push(subscriber);

    const message = `welcome to our members`;
  }

  removeSubscriber(subscriber: Observer) {
    let index = this.subscribers.findIndex((o) => o === subscriber);
    if (index !== -1) {
      this.subscribers.splice(index, 1);

      const message = `${this.subscribers[index].name} good bye!`;
    }
  }

  sendNewRelease(release: Release) {
    this.newspaperRelease = release;
    this.notify();
  }

  notify() {
    this.subscribers.forEach((subscriber) => {
      subscriber.send(this.newspaperRelease);
    });

    const message = `We have next period of newspaper `;
  }
}
