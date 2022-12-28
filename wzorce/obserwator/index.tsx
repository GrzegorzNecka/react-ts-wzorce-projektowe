import { NewspaperSubscriber } from './observer';
import { NewspaperPeriodical } from './subject';
import { Observer, Release, Subject } from './types';

const lifeMagazine = new NewspaperPeriodical();

const adam = new NewspaperSubscriber('Adam');
const marek = new NewspaperSubscriber('Marek');
const jurek = new NewspaperSubscriber('Jurek');

lifeMagazine.addSubscriber(adam);
lifeMagazine.addSubscriber(marek);
lifeMagazine.addSubscriber(jurek);

lifeMagazine.removeSubscriber(jurek);

lifeMagazine.sendNewRelease({
  title: 'Are programmers cool',
  num: '#01',
  cost: 175,
});
