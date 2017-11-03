import React, {Component} from 'react';
import headShot from './images/JLu Head shot.png';
import './Site.css';
import Background from './Background.js';
import Projects from './Projects.js';
import Skills from './Skills.js';
import 'animate.css/animate.min.css';
import Footer from './Footer.js';
import ScrollableAnchor from 'react-scrollable-anchor';
import {configureAnchors} from 'react-scrollable-anchor';

class Site extends Component {
  render() {
    configureAnchors({offset: 0, scrollDuration: 300, keepLastAnchorHash: false});
    return (
      <div>
        <div className="Site">
          <nav className="Menu">
            <a href="#top" id="Logo">
              <img src={headShot} className="Logo" alt="logo" />
            </a>
            <h3>
              <a href="#background">Background</a>
            </h3>
            <h3>
              <a href="#skills">Skills</a>
            </h3>
            <h3>
              <a href="#games">Games</a>
            </h3>
            <h3>
              <a href="#sound">Sound</a>
            </h3>
            <h3>
              <a href="#music">Music</a>
            </h3>
          </nav>
          <div className="Intro">
            <ScrollableAnchor id={'top'}>
              <h2>
                Hello! I'm Luke Morse, a well-rounded front-end software engineer, composer, and sound-designer. Send me
                electronic mail:{' '}
                <a className="Email" href="mailto:luke.morse@gmail.com">
                  luke.morse@gmail.com
                </a>
              </h2>
            </ScrollableAnchor>
          </div>
        </div>
        <div class="spacer" />
        <ScrollableAnchor id={'background'}>
          <Background />
        </ScrollableAnchor>
        <div class="spacer" />
        <ScrollableAnchor id={'skills'}>
          <Skills />
        </ScrollableAnchor>
        <div class="spacer" />
        <ScrollableAnchor id={'games'}>
          <Projects />
        </ScrollableAnchor>
      </div>
    );
  }
}

export default Site;
