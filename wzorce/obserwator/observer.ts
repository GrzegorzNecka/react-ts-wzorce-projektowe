import { Observer } from './types';

export class NewspaperSubscriber implements Observer {
  // readonly name: Observer['name'];
  readonly name: string;
  constructor(name) {
    this.name = name;
  }

  send(release) {
    const message = `${this.name}, new newspaper magazine: ${release.title} cost: ${release.cost} PLN `;
  }
}
