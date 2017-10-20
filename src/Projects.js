import React, {Component} from 'react';
import './Projects.css';
import './Generic_Content.css';
import iceCreamExp from './iTunesArtwork@2x.png';

export default class Projects extends Component {
  render() {
    return (
      <div>
        <div className="content">
          <h1 className="section_title">PROJECTS</h1>
          <div className="section_content">
            <img src={iceCreamExp} className="IceCream" alt="Ice Cream Explosion!" />
            <h3 className="Explanation">
              Ice Cream Explosion is the first app I released to the App Store. It is an original arcade style game that
              I created the music and sound FX for.
            </h3>
          </div>
        </div>
      </div>
    );
  }
}
