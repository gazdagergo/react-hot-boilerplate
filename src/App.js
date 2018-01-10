import React, { Component } from 'react';
import Button from './Button';
import counterService from './services/counterService';

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

  componentDidMount(){
    counterService.getCounter()
    .then(data => this.setState({ counter: data.count }))
  }

  componentDidUpdate(){
    counterService.updateCounter(this.state.counter);
  }

  resetCounter() {
    this.setState({ counter: 1 })
  }

  render() {
    return (
      <div>
        <div className="hello">Hello world!</div>
        <Button text="reset" onClick={ this.resetCounter } />
        <Button text={ this.state.counter.toString() } onClick={ this.increaseCounter } />
      </div>
    );
  }
}

export default App;
