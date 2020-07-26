import React from 'react';
import './EventSlider.css';
import { Event } from '../Event/Event';

export function EventSlider() {
  return (
    <div>
      <div>
        <ul>
          {/* TODO: make a slide component which returns a list item for when there are multiple events on the slider --Boyd */}
          <Event />
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
