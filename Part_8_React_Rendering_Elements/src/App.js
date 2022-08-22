import logo from './logo.svg';
import './App.css';
import React from 'react';
import userEvent from '@testing-library/user-event';

function App() {
  function intro(user) {
    return 'Hello, ' + user.name + '. Your Email is: ' + user.email;
  }
  // const element = <h1 className='welcome'>This a demo</h1>;
  //const user = {
  // name: 'Raja',
  //   email:'rajas@gmail.com',
  // }
  const element = React.createElement(
    'h1',
    { className: 'welcome' },
    'This a demo without JSX'
  );
  return <div>{element}</div>;
  //return <div>{user.name}</div>;
}

export default App;
