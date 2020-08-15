import React from 'react';
import './SliderBubbles.css';
import { EventList as events } from '../Events/EventList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle as dotFill } from '@fortawesome/free-solid-svg-icons';
import { faCircle as dotEmpty } from '@fortawesome/free-regular-svg-icons';

export const SliderBubbles = (props) => {
  return (
    <div className="bubbles-container">
      {events.map((event, index) => {
        if (index === props.activeIndex) {
          return (
            <span className="active-bubble">
              <FontAwesomeIcon
                icon={dotFill}
                onClick={() => props.setActiveIndex(index)}
              />
            </span>
          );
        } else
          return (
            <span className="inactive-bubble">
              <FontAwesomeIcon
                icon={dotEmpty}
                onClick={() => props.setActiveIndex(index)}
              />
            </span>
          );
      })}
    </div>
  );
};
