import logo from './logo.svg';
import './App.css';
import React from 'react';
import userEvent from '@testing-library/user-event';
import Funtional from './components/Funtional';
import ClassBased from './components/ClassBased';

function App() {
  return (
    <div>
      <Funtional />
      <ClassBased />
    </div>
  );
}

export default App;
