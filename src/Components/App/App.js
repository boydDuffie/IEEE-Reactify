import React from 'react';
import './App.css';
import { Menu } from '../Menu/Menu';
import { EventSlider } from '../EventSlider/EventSlider';
import { About } from '../About/About';
import { Team } from '../Team/Team';
import { Subscribe } from '../Subscribe/Subscribe';
import { Sponsors } from '../Sponsors/Sponsors';
import { Contact } from '../Contact/Contact';
import { Footer } from '../Footer/Footer';

function App() {
  return (
    <div>
      <div className="top-layer">
        <div></div>
        <Menu className="menu" />
        <div></div>
      </div>
      <div className="App">
        {/* empty divs are to 'fill' empty cells (for Grid) */}
        {/* see this link if you're confused about grid areas: https://css-tricks.com/snippets/css/complete-guide-grid/#prop-grid-template-areas */}
        {/* TODO: make the menu transition from transparent bg to semi-transparent bg */}
        <EventSlider className="slider" />
        {/* <About />
        <Team />
        <Subscribe />
        <Sponsors />
        <Contact />
        <Footer /> */}
      </div>
    </div>
  );
}

export default App;
