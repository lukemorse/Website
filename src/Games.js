import React, {Component} from 'react';
import './Generic_Content.css';
import iceCreamExp from './images/icecreampic.png';
import JellyGhost from './images/JellyGhost.png';
import XSessionsLogo from './images/x-sessions-logo.jpg';
import CapGroupLogo from './images/cap-group-logo.jpg';

export default class Games extends Component {
  render() {
    return (
      <div>
        <div className="content">
          <h1 className="section_title">GAMES</h1>
          <div className="section_content">
            <a
              href="https://itunes.apple.com/us/app/ice-cream-explosion/id1205754650?mt=8"
              className="image"
              target="_blank"
              rel="noopener noreferrer">
              <img className="Project_Picture" src={iceCreamExp} alt="Ice Cream Explosion!" />
            </a>
            <h3 className="Explanation">
              <a
                href="https://itunes.apple.com/us/app/ice-cream-explosion/id1205754650?mt=8"
                target="_blank"
                rel="noopener noreferrer">
                Ice Cream Explosion
              </a>{' '}
              was released to the App Store in 2016, and has over 3,000 downloads to date. The soundtrack can be found {' '}
              <a
                href="https://soundcloud.com/lukemorse/sets/ice-cream-explosion-soundtrack"
                target="_blank"
                rel="noopener noreferrer">
                here.
              </a>{' '}
            </h3>
          </div>

          <div className="section_content">
            <a
              href="https://itunes.apple.com/app/id1226528959"
              className="image"
              target="_blank"
              rel="noopener noreferrer">
              <img className="Project_Picture" src={JellyGhost} alt="Jelly Ghost" />
            </a>
            <h3 className="Explanation">
              <a href="https://itunes.apple.com/app/id1226528959" target="_blank" rel="noopener noreferrer">
                Jelly Ghost
              </a>{' '}
              is a familiar arcade game made for a client, Ahmed Mohamoud.
            </h3>
          </div>
        </div>

        <div className="spacer" />
      </div>
    );
  }
}
