import React from 'react';

// function Greet() {
//   return <div>Hi Raja</div>;
// }

// es6 syntax

const Greet = (props) => {
  props.name = 'barad';
  return <div>Hi {props.name}</div>;
};

export default Greet;
