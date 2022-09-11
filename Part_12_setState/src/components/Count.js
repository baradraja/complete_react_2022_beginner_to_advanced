import React, { Component } from 'react';

export class Count extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }
  increaseOne() {
    //this.state.counter = this.state.counter + 1;
    //this.setState({ counter: this.state.counter + 1 });
    // this.setState({ counter: this.state.counter + 1 }, () => {
    //   console.log(`Synchronously increased:  ${this.state.counter}`);
    // });
    this.setState((prevState) => ({ counter: prevState.counter + 1 }));
    console.log(this.state.counter);
  }
  increaseThree() {
    this.increaseOne();
    this.increaseOne();
    this.increaseOne();
  }
  render() {
    return (
      <div>
        <p>Count: {this.state.counter}</p>
        <button onClick={() => this.increaseThree()}>Click</button>
      </div>
    );
  }
}

export default Count;
