import React, {Component} from 'react';
import headShot from './JLu Head shot.png';
import './Site.css';
import Background from './Background.js';
import Skills from './Skills.js';
import ScrollReveal from 'scrollreveal';

class Site extends Component {
  componentDidMount() {
    window.sr = ScrollReveal({duration: 2000});
    window.sr.reveal('.Site');
  }

  render() {
    return (
      <div>
        <div className="Site">
          <header className="Header">
            <img src={headShot} className="Logo" alt="logo" />
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
            </span>
          </header>
          <div className="Intro">
            <h2>
              Hello! I'm Luke Morse, a well-rounded front-end software engineer, composer, and sound-designer. Send me
              electronic mail:{' '}
              <a className="Email" href="mailto:luke.morse@gmail.com">
                luke.morse@gmail.com
              </a>
            </h2>
          </div>
        </div>
        <div>
          <Background />
          <Skills />
        </div>
      </div>
    );
  }
}

export default Site;
