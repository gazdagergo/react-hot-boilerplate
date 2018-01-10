import React, { Component } from 'react';
import Button from './Button';

class App extends Component {
  constructor() {
    super();
    this.state = {
      counter: 1
    }
    this.increaseCounter = this.increaseCounter.bind(this);
    this.resetCounter = this.resetCounter.bind(this);
  }

  increaseCounter() {
    let counter = this.state.counter;
    counter++;
    this.setState(
      { counter }
    )
  }

  resetCounter() {
    this.setState({ counter: 1 })
  }

  render() {
    return (
      <div>
        <div className="hello">Hello world!</div>
        <Button text="reset" onClick={ this.resetCounter } />
        <Button text={ this.state.counter } onClick={ this.increaseCounter } />
      </div>
    );
  }
}

export default App;
