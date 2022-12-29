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
  addSubscriber(subscriber: T): { message: string };
  removeSubscriber(subscriber: T): void;
  sendNewRelease(release: U): void;
  notify(): void;
  getAllSubscribers(): Observer[];
  getAllNewspapers(): Release[];
}
