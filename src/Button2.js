import React, { Component } from 'react';

class Button2 extends Component {
  constructor() {
    super();
    this.state = {
      counter: 1,
      color: "green"
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(
      { counter: 2 }
    )
  }

  render() {
    return (
      <button
        style={{ color: this.state.color }}
        onClick={this.handleClick}
        >
        {this.state.counter}
      </button>
    );
  }
}


export default Button2;
