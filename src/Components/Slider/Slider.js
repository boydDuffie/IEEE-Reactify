import React from 'react';
import './Slider.css';

export function Slider() {
  return (
    <div className="slider_area">
      <div id="slides">
        <ul class="slides-container" id="clubEvents"></ul>
        {/* <script type="text/javascript">getEvents();</script> */}

        <nav class="slides-navigation">
          <a class="prev" href="/item1">
            <span class="icon-wrap"></span>
          </a>
          <h3>
            <strong>Prev</strong>
          </h3>
          <a class="next" href="/item3">
            <span class="icon-wrap"></span>
          </a>
          <h3>
            <strong>Next</strong>
          </h3>
        </nav>
      </div>
    </div>
  );
}
