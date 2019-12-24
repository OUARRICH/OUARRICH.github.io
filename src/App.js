import React, {useState} from 'react';

import Menu from './menu';
import Experiences from './experiences';

import './App.css';


const App = () => {
  const [open, setOpen] = useState(false);
  const [selectedMenuItem, setSeletctedMenuItem] = useState('EXPERIENCE');

  const toogleSideBar = () => {
    setOpen(!open);
  };

  const onClickMenuItem = (item) => {
    setSeletctedMenuItem(item.value);
  } 

  return (
    <div className="App">
      <Menu onClickMenuItem={onClickMenuItem} open={open} selectedMenuItem={selectedMenuItem} />
      <div>
        <button className="App__barsIcon" onClick={toogleSideBar}>
          <i className="fas fa-bars"></i>
        </button>
        <div className="App__Content">
          <Experiences />
        </div>
      </div>
    </div>
  );
}

export default App;
