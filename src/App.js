import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import Toggle from './ToggleRPC';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Toggle>
        {({on, toggle})=>(
          <Fragment>
            { on && <h1>Michael Scott Paper company</h1>}
              <button onClick={toggle}>SHOW/HIDE</button>
          </Fragment>
        )}
        </Toggle>
      </div>
    );
  }
}

export default App;
