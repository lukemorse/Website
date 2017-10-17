import React, {Component} from 'react';
import './Skills.css';
import './Generic_Content.css';

export default class Skills extends Component {
  render() {
    return (
      <div className="content">
        <h1 className="section_title">SKILLS</h1>
        <div className="section_content">
          <div className="skills_category">
            <div className="skills_category_title">LANGUAGES</div>
            <ul>
              <li>Swift</li>
              <li>Objective-C</li>
              <li>JavaScript</li>
              <li>HTML5/CSS3</li>
              <li>C++</li>
            </ul>
            <div className="skills_category_title">FRAMEWORKS</div>
            <ul>
              <li>React</li>
              <li>UIKit</li>
              <li>XCTest</li>
              <li>SpriteKit</li>
              <li>Core Data</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
