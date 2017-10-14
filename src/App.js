import React, {Component} from 'react';
import faceShot from './JLu Head shot.png';
import './App.css';
import Background from './Background.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={faceShot} className="App-logo" alt="logo" />
          <span className="Menu">
            <h3>
              <a href="#">Development</a>
            </h3>
            <h3>
              <a href="#">Music</a>
            </h3>
            <h3>
              <a href="#">Sound</a>
            </h3>
            <h2>
              Hello! I'm Luke Morse, a well-rounded front-end software engineer, composer, and sound-designer. Send me
              electronic mail:{' '}
              <a class="Email" href="mailto:luke.morse@gmail.com">
                luke.morse@gmail.com
              </a>
            </h2>
          </span>
        </header>
        <Background />
      </div>
    );
  }
}

export default App;
