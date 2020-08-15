import React, { useState, useEffect } from 'react';
import './EventSlider.css';
import { Events } from '../Events/Events';
import { EventList as eventList } from '../Events/EventList';
import { SliderBubbles } from '../SliderBubbles/SliderBubbles';

export function EventSlider() {
  console.log(eventList.lenth);
  //STATES
  const [activeIndex, setActiveIndex] = useState(0);

  //EFFECTS & LIFETIME CYCLE STUFF
  useEffect(() => {
    window.setTimeout(() => next(), 4000);
  }, [activeIndex]);

  //HANDLERS
  const next = () => {
    if (activeIndex === eventList.length - 1) {
      setActiveIndex(0);
    } else setActiveIndex(activeIndex + 1);
  };

  const prev = () => {
    if (activeIndex === 0) {
      setActiveIndex(eventList.length - 1);
    } else setActiveIndex(activeIndex - 1);
  };

  //RENDER
  return (
    <div className="slider">
      <Events activeIndex={activeIndex} prev={prev} next={next} />
      <SliderBubbles
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      />
    </div>
  );
}
