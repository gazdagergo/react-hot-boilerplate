import React, { Component } from 'react';

class Button2 extends Component {
  constructor() {
    super();
    this.state = {
      counter: 1,
      color: "green"
    }
  }

  render() {
    return (
      <button
        style={{ color: this.state.color }}
        >{this.state.counter}</button>
    );
  }
}


export default Button2;
