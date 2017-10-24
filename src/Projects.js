import React, {Component} from 'react';
import './Projects.css';
import './Generic_Content.css';
import iceCreamExp from './images/icecreampic.png';
import JellyGhost from './images/JellyGhost.png';
import XSessionsLogo from './images/x-sessions-logo.jpg';
import CapGroupLogo from './images/cap-group-logo.jpg';
import YayConPic from './images/yayconpic.jpg';
import SpringMusicPic from './images/springmusic.jpg';

export default class Projects extends Component {
  render() {
    return (
      <div>
        <div className="content">
          <h1 className="section_title">PROJECTS</h1>
          <div className="section_content">
            <a
              href="https://itunes.apple.com/us/app/ice-cream-explosion/id1205754650?mt=8"
              className="image"
              target="_blank">
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
            <a href="https://itunes.apple.com/app/id1226528959" className="image" target="_blank">
              <img className="Project_Picture" src={JellyGhost} alt="Jelly Ghost" />
            </a>
            <h3 className="Explanation">
              <a href="https://itunes.apple.com/app/id1226528959" target="_blank">
                Jelly Ghost
              </a>{' '}
              is a game that I made for a client.
            </h3>
          </div>
        </div>

        <div className="content">
          <h1 className="section_title">SOUND DESIGN</h1>
          <div className="section_content">
            <a href="https://tedbattaglia.com/#/xsession/" className="image" target="_blank">
              <img className="Project_Picture" src={XSessionsLogo} alt="X Sessions" />
            </a>
            <h3 className="Explanation">
              <a href="https://tedbattaglia.com/#/xsession/" target="_blank">
                X Sessions
              </a>{' '}
              is a motion video/animation by{' '}
              <a href="https://tedbattaglia.com/" target="_blank">
                Theodore Battaglia
              </a>{' '}
              that I did sound design for.
            </h3>
          </div>

          <div className="section_content">
            <a href="https://vimeo.com/112253396" className="image" target="_blank">
              <img className="Project_Picture" src={CapGroupLogo} alt="IO By The Numbers" />
            </a>
            <h3 className="Explanation">
              <a href="https://vimeo.com/112253396" target="_blank">
                IO By The Numbers
              </a>{' '}
              is another collaboration I did with visual artist,{' '}
              <a href="https://tedbattaglia.com/" target="_blank">
                Ted Battaglia
              </a>.
            </h3>
          </div>
        </div>

        <div className="content">
          <h1 className="section_title">MUSIC</h1>
          <div className="section_content">
            <a href="https://lukemorse.bandcamp.com/releases" className="image" target="_blank">
              <img className="Project_Picture" src={SpringMusicPic} alt="Spring Music" />
            </a>
            <h3 className="Explanation">
              <a href="https://lukemorse.bandcamp.com/releases" target="_blank">
                Spring Music
              </a>{' '}
              was my Master's thesis. I wrote a program to reassemble the sounds according to spectral readings at
              percussive onsets.
            </h3>
          </div>

          <div className="section_content">
            <a href="https://yayconifers.bandcamp.com/album/mt-pilchuck" className="image" target="_blank">
              <img className="Project_Picture" src={YayConPic} alt="Yay Conifers!" />
            </a>
            <h3 className="Explanation">
              <a href="https://yayconifers.bandcamp.com/album/mt-pilchuck" target="_blank">
                Yay Conifers!
              </a>{' '}
              was a collaboration with{' '}
              <a href="https://soundcloud.com/mirandarae/tracks" target="_blank">
                Miranda Rae
              </a>{' '}
              that I produced and perfomed in Seattle with.
            </h3>
          </div>
        </div>
      </div>
    );
  }
}
