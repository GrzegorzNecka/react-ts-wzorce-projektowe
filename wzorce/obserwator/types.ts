export type Observer = {
  name: string;
  send(release: Release): void;
};

export type Release = {
  title: string;
  num: string;
  cost: number;
} | null;

export interface Subject<T, U> {
  addSubscriber(subscriber: T): void;
  removeSubscriber(subscriber: T): void;
  sendNewRelease(release: U): void;
  notify(): void;
}
