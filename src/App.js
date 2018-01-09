import React, { Component } from 'react';
import Button from './Button';

class App extends Component {

  render() {
    return (
      <div>
        <div className="hello">Hello world!</div>
        <Button text="gombtext" />
      </div>
    );
  }
}

export default App;
