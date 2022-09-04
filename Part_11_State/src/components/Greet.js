import React, { Component } from 'react';

export class Greet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: this.props.message,
    };
  }
  changeMessage() {
    this.setState({ message: 'thanks for clicking me' });
  }
  render() {
    return (
      <div>
        {this.state.message}
        <button onClick={() => this.changeMessage()}>Click me</button>
      </div>
    );
  }
}

export default Greet;
