import * as React from 'react';
import { NewspaperSubscriber } from './observer';
import { NewspaperPeriodical } from './subject';
import { Observer, Release } from './types';

const lifeMagazine = new NewspaperPeriodical();

const adam = new NewspaperSubscriber('Adam');
const marek = new NewspaperSubscriber('Marek');
const jurek = new NewspaperSubscriber('Jurek');

lifeMagazine.addSubscriber(adam);
lifeMagazine.addSubscriber(marek);
lifeMagazine.addSubscriber(jurek);

// lifeMagazine.removeSubscriber(jurek);

lifeMagazine.sendNewRelease({
  title: 'magazine title 1',
  num: '#01',
  cost: 175,
});

lifeMagazine.sendNewRelease({
  title: 'magazine title 2',
  num: '#02',
  cost: 173,
});
let counter = 3;
export default function Obserwator() {
  const [inputValue, setInputVal] = React.useState<string>('');
  const [inputMessage, setInputMessage] = React.useState<string>('');
  const [newspapers, setNewspapers] = React.useState<Release[]>(
    lifeMagazine.getAllNewspapers()
  );

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputVal(e.currentTarget.value);
  };
  //
  const handleOnClick = () => {
    const newSubscriber = new NewspaperSubscriber(inputValue);
    const subscribe = lifeMagazine.addSubscriber(newSubscriber);
    setInputMessage(subscribe.message);
    setInputVal('');
  };

  const subscribers = lifeMagazine.getAllSubscribers();
  lifeMagazine.getAllNewspapers();

  const sendNewRelease = (newNewspaper: Release) => {
    setNewspapers([...newspapers, newNewspaper]);
    lifeMagazine.sendNewRelease(newNewspaper);
  };

  return (
    <div>
      <h1>Wzorzec Obserwator</h1>

      <div>
        <h2>działanie po stronie potencjalnego subskrybenta</h2>
        <h3> założ prenumeratę</h3>
        <input
          value={inputValue}
          onChange={handleOnChange}
          type="text"
          placeholder="wpisz swoje imię"
        />
        <button onClick={handleOnClick}>zaprenumeruj </button>
        <p>{inputMessage}</p>

        <h3>lista wydań</h3>
        <ul>
          {subscribers &&
            newspapers.map((elem, i) => {
              return (
                <li
                  key={i}
                >{`lp: ${elem.num}, title: ${elem.title}, cost: ${elem.cost},`}</li>
              );
            })}
        </ul>
      </div>
      <br />
      <hr />
      <div>
        <h2>działanie po stronie gazety wyślij nowy numer</h2>
        <h3>wyślij nowy numer</h3>
        <button
          onClick={() => {
            let c = counter++;
            sendNewRelease({
              title: `magazine title ${c}`,
              num: `#0${c}`,
              cost: 173,
            });
          }}
        >
          wyślij nowy numer
        </button>
      </div>
      <br />
      <div>
        <h3>lista subskrybentów:</h3>
        <ul>
          {subscribers &&
            subscribers.map((elem, i) => {
              return <li key={i}>{elem.name}</li>;
            })}
        </ul>
      </div>
    </div>
  );
}
