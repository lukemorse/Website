import React, {Component} from 'react';
import Sequencer from 'sequencer';
import headShot from './images/JLu Head shot.png';
import './Site.css';
import Background from './Background.js';
import Games from './Games.js';
import Music from './Music.js';
import Sound from './Sound.js';
import Skills from './Skills.js';
import 'animate.css/animate.min.css';
import Footer from './Footer.js';
import ScrollableAnchor from 'react-scrollable-anchor';
import {configureAnchors} from 'react-scrollable-anchor';

class Site extends Component {
  render() {
    configureAnchors({offset: -150, scrollDuration: 300, keepLastAnchorHash: false});
    return (
      <div className="Site">
        <nav className="Menu">
          <h3>
            <a href="#games">GAMES</a>
          </h3>
          <h3>
            <a href="#music">MUSIC</a>
          </h3>
          <a href="#top" id="Logo">
            <img src={headShot} className="Logo" alt="logo" />
          </a>
          <h3>
            <a href="#sound">SOUND</a>
          </h3>
          <h3>
            <a href="#contact">CONTACT</a>
          </h3>
        </nav>
        <Sequencer />
        <div class="spacer" />
        <ScrollableAnchor id={'games'}>
          <Games />
        </ScrollableAnchor>
        <ScrollableAnchor id={'music'}>
          <Music />
        </ScrollableAnchor>
        <ScrollableAnchor id={'sound'}>
          <Sound />
        </ScrollableAnchor>
        <ScrollableAnchor id={'contact'}>
          <div className="Email">
            <a href="mailto:luke.morse@gmail.com">luke.morse@gmail.com</a>
          </div>
        </ScrollableAnchor>
      </div>
    );
  }
}

export default Site;
