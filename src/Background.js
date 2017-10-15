import React, {Component} from 'react';
import './Background.css';

export default class Background extends Component {
  render() {
    return (
      <div className="background">
        <h1 className="section_title">BACKGROUND</h1>
        <div className="section_content">
          <h3>
            I started programming in graduate school, where I wrote sound-synthesis programs using SuperCollider. After
            earning my Master's of Music in Composition, I began studying iOS development. I released my first app, a
            game called Ice Cream Explosion, in the App Store in February, 2017. Since then, I have been working with
            two Chicago startups, Jupiter 69 and Adapted Actualization Labs. <br />
            <br />Coming into front-end development from a background in composition, I enjoy applying ratios of small
            integers to user interfaces and visual design.
          </h3>
        </div>
      </div>
    );
  }
}
