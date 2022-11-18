import React from 'react';

function Greet1({ name, title }) {
  //const { name, title } = props;
  return (
    <div>
      <h1>
        Functional : {name} {title}
      </h1>
    </div>
  );
}

export default Greet1;
