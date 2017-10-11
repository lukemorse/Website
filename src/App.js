import React, {Component} from 'react';
import faceShot from './JLu Head shot.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={faceShot} className="App-logo" alt="logo" />
          <h1 className="App-title">Luke Morse</h1>
          <span className="Links">
            <h2>
              <a href="#">Development</a>
            </h2>
            <h2>
              <a href="#">Music</a>
            </h2>
            <h2>
              <a href="#">Sound</a>
            </h2>
          </span>
        </header>
      </div>
    );
  }
}

export default App;
