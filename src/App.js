import React, { Component } from 'react';
import Button3 from './Button3';
import Button2 from './Button2';

class App extends Component {

  render() {
    return (
      <div>
        <div className="hello">Hello world!</div>
        <Button3 text="reset" onClick={ () => console.log('k') } />
        <Button2 />
      </div>
    );
  }
}

export default App;
