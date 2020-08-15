import React, { useState } from 'react';
import './EventSlider.css';
import { Events } from '../Events/Events';

const eventList = require('../Events/EventList');

export function EventSlider() {
  //STATES
  const [activeIndex, setActiveIndex] = useState(0);

  //RENDER
  return <Events activeIndex={activeIndex} />;
}
