import React from 'react';
import './AboutSection.css';
import { aboutSections } from './AboutSectionContent';

export const AboutSection = (props) => {
  return (
    <div>
      {aboutSections.map((section) => (
        <div
          className="about-section"
          onClick={() => props.setOpenSection(section.title)}>
          <h3>{section.title}</h3>
          <p>{section.blurb}</p>
        </div>
      ))}
    </div>
  );
};
