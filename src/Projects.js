import React, {Component} from 'react';
import './Projects.css';
import './Generic_Content.css';
import iceCreamExp from './iTunesArtwork@2x.png';

export default class Projects extends Component {
  render() {
    return (
      <div className="content">
        <h1 className="section_title">SKILLS</h1>
        <div className="section_content">
          <img src={iceCreamExp} className="IceCream" alt="Ice Cream Explosion!" />
          </div>
        </div>
      </div>
    );
  }
}
