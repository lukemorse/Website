import React, {Component} from 'react';
import headShot from './images/JLu Head shot.png';
import './Site.css';
import Background from './Background.js';
import Projects from './Projects.js';
import Skills from './Skills.js';
import 'animate.css/animate.min.css';
import Footer from './Footer.js';

class Site extends Component {
  render() {
    return (
      <div>
        <div className="Site">
          <nav className="Menu">
            <img src={headShot} className="Logo" alt="logo" />
            <h3>
              <a href="#">Software</a>
            </h3>
            <h3>
              <a href="#">Music</a>
            </h3>
            <h3>
              <a href="#">Sound</a>
            </h3>
          </nav>
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
        <Background />
        <Skills />
        <Projects />
        <Skills />
        <Footer />
      </div>
    );
  }
}

export default Site;
