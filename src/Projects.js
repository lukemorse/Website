import React, {Component} from 'react';
import './Projects.css';
import './Generic_Content.css';
import iceCreamExp from './iTunesArtwork@2x.png';
import JellyGhost from './JellyGhost.png';
import XSessionsLogo from './x-sessions-logo.jpg';
import CapGroupLogo from './cap-group-logo.jpg';

export default class Projects extends Component {
  render() {
    return (
      <div>
        <div className="content">
          <h1 className="section_title">PROJECTS</h1>
          <div className="section_content">
            <a href="https://itunes.apple.com/us/app/ice-cream-explosion/id1205754650?mt=8" target="_blank">
              <img className="Project_Picture" src={iceCreamExp} alt="Ice Cream Explosion!" />
            </a>
            <h3 className="Explanation">
              <a href="https://itunes.apple.com/us/app/ice-cream-explosion/id1205754650?mt=8" target="_blank">
                Ice Cream Explosion
              </a>{' '}
              is the first app I released to the App Store. It is an original arcade style game that I created the{' '}
              <a href="https://soundcloud.com/lukemorse/sets/ice-cream-explosion-soundtrack" target="_blank">
                music
              </a>{' '}
              and sound FX for.
            </h3>
          </div>

          <div className="section_content">
            <a href="https://itunes.apple.com/app/id1226528959" target="_blank">
              <img className="Project_Picture" src={JellyGhost} alt="Jelly Ghost" />
            </a>
            <h3 className="Explanation">
              <a href="https://itunes.apple.com/app/id1226528959" target="_blank">
                Jelly Ghost
              </a>{' '}
              is a game that I made for a client.
            </h3>
          </div>

          <div className="section_content">
            <a href="https://tedbattaglia.com/#/xsession/" target="_blank">
              <img className="Project_Picture" src={XSessionsLogo} alt="X Sessions" />
            </a>
            <h3 className="Explanation">
              <a href="https://itunes.apple.com/app/id1226528959" target="_blank">
                X Sessions
              </a>{' '}
              is a motion video/animation that I did sound design for.
            </h3>
          </div>

          <div className="section_content">
            <a href="https://vimeo.com/112253396" target="_blank">
              <img className="Project_Picture" src={CapGroupLogo} alt="IO By The Numbers" />
            </a>
            <h3 className="Explanation">
              <a href="https://itunes.apple.com/app/id1226528959" target="_blank">
                IO By The Numbers
              </a>{' '}
              is a motion video/animation that I did sound design for.
            </h3>
          </div>
        </div>
      </div>
    );
  }
}
