import React, { Component } from 'react';
import Button from './Button';
import Button2 from './Button2';

class App extends Component {

  render() {
    return (
      <div>
        <div className="hello">Hello world!</div>
        <Button text="gombtext" />
        <Button2 />
      </div>
    );
  }
}

export default App;
