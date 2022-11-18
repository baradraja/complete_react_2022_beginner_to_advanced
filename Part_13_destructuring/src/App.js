import './App.css';
import React, { Fragment } from 'react';
import Greet from './components/Greet';
import Greet1 from './components/Greet1';

function App() {
  return (
    <Fragment>
      <Greet name={'raja'} title={'barad'} />
      <Greet1 name={'rajaa'} title={'barada'} />
    </Fragment>
  );
}

export default App;
