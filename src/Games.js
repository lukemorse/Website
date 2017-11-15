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
              is the first app I released to the App Store. It is an original arcade style game that I created the{' '}
              <a
                href="https://soundcloud.com/lukemorse/sets/ice-cream-explosion-soundtrack"
                target="_blank"
                rel="noopener noreferrer">
                music
              </a>{' '}
              and sound FX for.
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
              is a game that I made for a client, Ahmed Mohamoud.
            </h3>
          </div>
        </div>

        <div className="spacer" />
        <div className="content">
          <h1 className="section_title">SOUND</h1>
          <div className="section_content">
            <a href="https://tedbattaglia.com/#/xsession/" className="image" target="_blank" rel="noopener noreferrer">
              <img className="Project_Picture" src={XSessionsLogo} alt="X Sessions" />
            </a>
            <h3 className="Explanation">
              <a href="https://tedbattaglia.com/#/xsession/" target="_blank" rel="noopener noreferrer">
                X Sessions
              </a>{' '}
              is a motion video/animation by{' '}
              <a href="https://tedbattaglia.com/" target="_blank" rel="noopener noreferrer">
                Theodore Battaglia
              </a>{' '}
              that I did sound design for.
            </h3>
          </div>

          <div className="section_content">
            <a href="https://vimeo.com/112253396" className="image" target="_blank" rel="noopener noreferrer">
              <img className="Project_Picture" src={CapGroupLogo} alt="IO By The Numbers" />
            </a>
            <h3 className="Explanation">
              <a href="https://vimeo.com/112253396" target="_blank" rel="noopener noreferrer">
                IO By The Numbers
              </a>{' '}
              is another collaboration I did with visual artist,{' '}
              <a href="https://tedbattaglia.com/" target="_blank" rel="noopener noreferrer">
                Ted Battaglia
              </a>.
            </h3>
          </div>
        </div>
      </div>
    );
  }
}
