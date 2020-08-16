import React, { useState, useEffect } from 'react';
import './EventSlider.css';
import { Events } from '../Events/Events';
import { EventList as eventList } from '../Events/EventList';

export function EventSlider() {
  //STATES
  const [activeIndex, setActiveIndex] = useState(0);

  //EFFECTS & LIFETIME CYCLE STUFF
  useEffect(() => {
    const id = setTimeout(() => next(), 4000);
    return () => clearTimeout(id);
  }, [activeIndex]);

  const next = () => {
    setActiveIndex((activeIndex + 1) % eventList.length);
  };

  const prev = () => {
    setActiveIndex((activeIndex + eventList.length - 1) % eventList.length);
  };

  //RENDER
  return (
    <div className="slider">
      <Events
        activeIndex={activeIndex}
        prev={prev}
        next={next}
        setActiveIndex={setActiveIndex}
      />
    </div>
  );
}
