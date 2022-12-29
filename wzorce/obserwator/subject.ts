import { Observer, Subject, Release } from './types';

export class NewspaperPeriodical implements Subject<Observer, Release> {
  private newspaperRelease: Release;
  readonly subscribers: Observer[];
  readonly newspapers: Release[];
  constructor() {
    this.newspaperRelease = null;
    this.subscribers = [];
    this.newspapers = [];
  }

  addSubscriber(subscriber: Observer) {
    this.subscribers.push(subscriber);
    const message = `welcome ${subscriber.name} to our members`;
    return { message };
  }

  removeSubscriber(subscriber: Observer) {
    let index = this.subscribers.findIndex((o) => o === subscriber);
    if (index !== -1) {
      this.subscribers.splice(index, 1);

      const message = `${this.subscribers[index].name} good bye!`;
    }
  }

  getAllSubscribers() {
    return this.subscribers;
  }

  sendNewRelease(release: Release) {
    this.newspaperRelease = release;
    this.newspapers.push(release);
    this.notify();
  }

  getAllNewspapers() {
    return this.newspapers;
  }

  notify() {
    this.subscribers.forEach((subscriber) => {
      subscriber.send(this.newspaperRelease);
    });

    const message = `We have next period of newspaper `;
  }
}
