import React from 'react';
import './Menu.css';

export function Menu() {
  return (
    <div className="menu_area">
      <nav className="navbar navbar-default navbar-fixed-top" role="navigation">
        <div className="container">
          <div className="navbar-header">
            {/* FOR MOBILE VIEW COLLAPSED BUTTON */}
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#navbar"
              aria-expanded="false"
              aria-controls="navbar">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>

            {/* LOGO */}

            {/* TEXT BASED LOGO */}
            <a className="navbar-brand" href="#">
              UF <span>IEEE</span>
            </a>
          </div>
          <div id="navbar" className="navbar-collapse collapse">
            <ul id="top-menu" className="nav navbar-nav navbar-right main_nav">
              <li className="active">
                <a href="http://ieee.ece.ufl.edu/#">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#team">Team</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
              <li>
                <a
                  type="_blank"
                  href="https://www.facebook.com/UFIEEE"
                  target="_blank"
                  rel="noopener noreferrer">
                  <i className="fa fa-facebook"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
