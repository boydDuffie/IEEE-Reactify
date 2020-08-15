import React, { useState } from 'react';
import './Events.css';
import { EventList as events } from './EventList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft as leftArr,
  faChevronRight as rightArr,
} from '@fortawesome/free-solid-svg-icons';

export const Events = (props) => {
  return (
    <section className="events-container">
      {events.map((event, index) => (
        <div
          className={props.activeIndex === index ? 'active' : 'inactive'}
          style={{
            backgroundImage: `url('${event.img.src}')`,
          }}>
          <div className="left-arrow">
            {events.length > 1 ? (
              <FontAwesomeIcon icon={leftArr} onClick={props.prev} />
            ) : (
              <div style={{ display: 'none' }}></div>
            )}
          </div>
          <div className="slider-caption">
            <h2>
              <a href={event.signUp} target="_blank" className="event-title">
                {event.title.toUpperCase()}
              </a>
            </h2>
            <p>
              {`${event.date.month} ${event.date.day}`}
              <br />
              {`${event.date.startTime} - ${event.date.endTime}`}
              <br />
              {event.virtual ? (
                <a href={event.meetingLink} target="_blank">
                  <u className="meeting-link">Meeting Link</u>
                </a>
              ) : (
                <div>{`${event.location.address} ${event.location.building}-${event.location.room}`}</div>
              )}
            </p>
          </div>
          <div className="right-arrow">
            {events.length > 1 ? (
              <FontAwesomeIcon icon={rightArr} onClick={props.next} />
            ) : (
              <div style={{ display: 'none' }}></div>
            )}
          </div>
        </div>
      ))}
    </section>
  );
};
