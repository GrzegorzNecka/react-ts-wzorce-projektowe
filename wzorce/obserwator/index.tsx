import * as React from 'react';
import { NewspaperSubscriber } from './observer';
import { NewspaperPeriodical } from './subject';

const lifeMagazine = new NewspaperPeriodical();

const adam = new NewspaperSubscriber('Adam');
const marek = new NewspaperSubscriber('Marek');
const jurek = new NewspaperSubscriber('Jurek');

lifeMagazine.addSubscriber(adam);
lifeMagazine.addSubscriber(marek);
lifeMagazine.addSubscriber(jurek);

// lifeMagazine.removeSubscriber(jurek);

lifeMagazine.sendNewRelease({
  title: 'Are programmers cool',
  num: '#01',
  cost: 175,
});

export default function Obserwator() {
  return (
    <div>
      <h1>Wzorzec Obserwator</h1>

      <div>
        <h2>założ prenumeratę</h2>
        <h3>działanie po stronie potencjalnego subskrybenta</h3>
        <input type="text" placeholder="wpisz swoje imię" />
        <button>zaprenumeruj </button>
      </div>

      <div>
        <h2>wyślij nowy numer</h2>
        <h3>działanie po stronie gazety</h3>
        <button>wyślij nowy numer</button>
      </div>
    </div>
  );
}
