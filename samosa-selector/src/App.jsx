import './App.css';
import { useState } from 'react';
import Upgrade from './Upgrade.jsx';

const App = () => {
  const [count, setCount] = useState(0);
  const [multiplier, setMultiplier] = useState(1);

  const updateCount = () => {
  setCount(count + multiplier);
  }

  const buyDoubleStuffed = () => {
    if (count >= 10) {
      setCount(count - 10);
      setMultiplier(multiplier * 2);
    }
  }

  const buyPartyPack = () => {
    if (count >= 100) {
      setCount(count - 100);
      setMultiplier(multiplier * 5);
    }
  }

  const buyFullFeast = () => {
    if (count >= 1000) {
      setCount(count - 1000);
      setMultiplier(multiplier * 10);
    }
  }

  return (
    <div className="App">
      <div className='header'>
        <h1>Samosa Selector</h1>
        <h2>Count: {count}</h2>
        <img className='samosa' onClick={updateCount} src='https://png.pngtree.com/png-vector/20230906/ourmid/pngtree-samosa-halal-food-png-image_9998990.png' />
      </div>
      <div className='container'>
        <Upgrade name='Double Stuffed 👯‍♀️' desc='2x per click' cost='10 samosas' buyFunction={buyDoubleStuffed}/>
        <Upgrade  name='Party Pack 🎉' desc='5x per click' cost='100 samosas' buyFunction={buyPartyPack}/>
        <Upgrade name='Full Feast 👩🏽‍🍳	' desc='10x per click' cost='1000 samosas' buyFunction={buyFullFeast}/>
      </div>
    </div>
  );
}

export default App;