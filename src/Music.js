import React, {Component} from 'react';
import './Generic_Content.css';
import YayConPic from './images/yayconpic.jpg';
import SpringMusicPic from './images/springmusic.jpg';

export default class Music extends Component {
  render() {
    return (
      <div className="content">
        <h1 className="section_title">MUSIC</h1>
        <div className="section_content">
          <a href="https://lukemorse.bandcamp.com/releases" className="image" target="_blank" rel="noopener noreferrer">
            <img className="Project_Picture" src={SpringMusicPic} alt="Spring Music" />
          </a>
          <h3 className="Explanation">
            <a href="https://lukemorse.bandcamp.com/releases" target="_blank" rel="noopener noreferrer">
              Spring Music
            </a>{' '}
            utilizes a program I wrote to reassemble the sounds made by compression springs, according to spectral
            readings at percussive onsets.
          </h3>
        </div>

        <div className="section_content">
          <a
            href="https://yayconifers.bandcamp.com/album/mt-pilchuck"
            className="image"
            target="_blank"
            rel="noopener noreferrer">
            <img className="Project_Picture" src={YayConPic} alt="Yay Conifers!" />
          </a>
          <h3 className="Explanation">
            <a href="https://yayconifers.bandcamp.com/album/mt-pilchuck" target="_blank" rel="noopener noreferrer">
              Yay Conifers!
            </a>{' '}
            was a collaboration with violinist and vocalist{' '}
            <a href="https://soundcloud.com/mirandarae/tracks" target="_blank" rel="noopener noreferrer">
              Miranda Rae.
            </a>{' '}
          </h3>
        </div>
      </div>
    );
  }
}
