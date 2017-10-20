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
            <a href="https://itunes.apple.com/us/app/ice-cream-explosion/id1205754650?mt=8">
              <img className="IceCream" src={iceCreamExp} alt="Ice Cream Explosion!" />
            </a>
            <h3 className="Explanation">
              <a href="https://itunes.apple.com/us/app/ice-cream-explosion/id1205754650?mt=8">Ice Cream Explosion</a> is
              the first app I released to the App Store. It is an original arcade style game that I created the{' '}
              <a href="https://soundcloud.com/lukemorse/sets/ice-cream-explosion-soundtrack">music</a> and sound FX for.
            </h3>
          </div>
        </div>
      </div>
    );
  }
}
