// src/components/Skills.js

import React from 'react';
import {
  faReact,
  faAngular,
  faJs,
  faGithub,
  faCss3,
  faNodeJs,
  faJava,
  faPython
} from "@fortawesome/free-brands-svg-icons";
import { faCode, faDatabase } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Skills.css';

const skills = [
  { name: 'React js/native', icon: faReact, color: '#61DBFB' },
  { name: 'Javascript', icon: faJs, color: '#F7DF1E' },
  { name: 'HTML', icon: faCode, color: '#E34C26' },
  { name: 'Css', icon: faCss3, color: '#264DE4' },
  { name: 'Angular', icon: faAngular, color: '#DD0031' },
  { name: 'Java', icon: faJava, color: '#007396' },
  { name: 'Nodejs', icon: faNodeJs, color: '#68A063' },
  { name: 'Git', icon: faGithub, color: '#181717' },
  { name: 'MongoDB', icon: faDatabase, color: '#4DB33D' },
  { name: 'Python', icon: faPython, color: '#3776AB' }
];

const Skills = () => {
  return (
    <div className="skills-section">
      <h2>Technical Skills</h2>
      <div className="skills-category">
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              <FontAwesomeIcon
                icon={skill.icon}
                style={{ color: skill.color, height: '35px' }}
                className="skills-icon"
              />
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
