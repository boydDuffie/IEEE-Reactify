import React from 'react';
import './Event.css';

/*
  This section below is a temporary fix
  Once the slide itself is made into its own component, the image paths will be stored in their own file
*/
//IMG SRCs:
const videoCall = require('../../img/misc/video_call.jpg');

export function Event() {
  return (
    <li>
      <div> {/* put the slider overlay here */}</div>
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
  );
}
