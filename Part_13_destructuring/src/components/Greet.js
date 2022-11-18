import React, { Component } from 'react';

export class Greet extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { name, title } = this.props;
    return (
      <div>
        <h1>
          Class Based: {name} {title}
        </h1>
      </div>
    );
  }
}

export default Greet;
