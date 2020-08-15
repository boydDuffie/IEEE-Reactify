import React, { useState } from 'react';
import './Menu.css';

// importing icon and FontAwesomeIcon react component for the facebook link
import { faFacebookF as facebook } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/*
  It would be nice to clean up the organization here. 
  Migrating from bootstrap to Grid, maybe flexbox.
    --Boyd
*/
export function Menu() {
  return (
    <div className="container">
      <div className="text-logo">
        {/* FOR MOBILE VIEW COLLAPSED BUTTON */}
        {/* This mobile part is not working, so for now it is being commented out... */}
        {/* <button
        type="button"
        className="navbar-toggle collapsed"
        data-toggle="collapse"
        data-target="#navbar"
        aria-expanded="false"
        aria-controls="navbar">
        <span>Toggle navigation</span>
        <span></span>
        <span></span>
        <span></span>
      </button> */}

        {/* TEXT BASED LOGO */}
        <a href="#">
          UF <span style={{ color: '#2DA2C8' }}>IEEE</span>
        </a>
      </div>

      {/* empty div to consume a grid cell; see Menu.css (.container --> grid-template-areas --> '.') */}
      <div></div>

      {/* PAGE SECTION LINKS */}
      <div className="links">
        <a className="link-home" href="#">
          Home
        </a>
        <a className="link-about" href="#about">
          About
        </a>
        <a className="link-team" href="#team">
          Team
        </a>
        <a className="link-contact" href="#contact">
          Contact
        </a>
        <a
          className="link-fb"
          type="_blank"
          href="https://www.facebook.com/UFIEEE"
          target="_blank"
          rel="noopener noreferrer">
          <FontAwesomeIcon icon={facebook} />
        </a>
      </div>
    </div>
  );
}
