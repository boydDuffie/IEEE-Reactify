import React from 'react';
import './EventSlider.css';

/*
  This section below is a temporary fix
  Once the slide itself is made into its own component, the image paths will be stored in their own file
*/
//IMG SRCs:
const videoCall = require('../../img/misc/video_call.jpg');

export function EventSlider() {
  return (
    <div className="slider_area">
      <div id="slides">
        <ul className="slides-container" id="clubEvents">
          {/* TODO: make a slide component which returns a list item for when there are multiple events on the slider --Boyd */}
          <li>
            <div className="slider_overlay"></div>
            <img src={videoCall} alt="game night july 26th" />
            <div className="slider_caption">
              <h2>
                <a
                  href="https://www.facebook.com/events/1113278472406035/"
                  target="_blank"
                  className="myLink">
                  ECE Student Orgs Virtual Game Night
                </a>
              </h2>
              <p>
                July 26
                <br />
                7:00 pm - 10:00 pm
                <br />
                <a
                  href="https://ufl.zoom.us/j/4480710273"
                  target="_blank"
                  className="myLink">
                  <u>Zoom Link</u>
                </a>
              </p>
            </div>
          </li>
        </ul>
        {/* <script type="text/javascript">getEvents();</script> */}

        <nav className="slides-navigation">
          <a className="prev" href="/item1">
            <span className="icon-wrap"></span>
          </a>
          <h3>
            <strong>Prev</strong>
          </h3>
          <a className="next" href="/item3">
            <span className="icon-wrap"></span>
          </a>
          <h3>
            <strong>Next</strong>
          </h3>
        </nav>
      </div>
    </div>
  );
}
