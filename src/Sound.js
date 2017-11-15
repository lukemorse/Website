import React, {Component} from 'react';
import './Generic_Content.css';
import XSessionsLogo from './images/x-sessions-logo.jpg';
import CapGroupLogo from './images/cap-group-logo.jpg';

export default class Music extends Component {
  render() {
    return (
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
    );
  }
}
