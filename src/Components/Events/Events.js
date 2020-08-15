import React, { useState } from 'react';
import './Events.css';
import { EventList as events } from './EventList';

export const Events = (props) => {
  return (
    <section className="events-container">
      {events.map((event, index) => (
        <div
          className={props.activeIndex === index ? 'active' : 'inactive'}
          style={{
            backgroundImage: `url('${event.img.src}')`,
          }}>
          <div>
            <img src={require(event.img.src)} alt={event.img.alt} />
          </div>
          <div className="slider-caption">
            <h2>
              <a href={event.signUp} target="_blank" className="myLink">
                {event.title}
              </a>
            </h2>
            <p>
              {`${event.date.month} ${event.date.day}`}
              <br />
              {`${event.date.startTime} - ${event.date.endTime}`}
              <br />
              {event.virtual ? (
                <a href={event.meetingLink} target="_blank" className="myLink">
                  <u>Meeting Link</u>
                </a>
              ) : (
                <div>{`${event.location.address} ${event.location.building}-${event.location.room}`}</div>
              )}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
};
