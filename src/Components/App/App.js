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
    <div className="App" style={{ backgroundColor: '#000000' }}>
      {/* empty divs are to 'fill' empty cells (for Grid) */}
      {/* see this link if you're confused about grid areas: https://css-tricks.com/snippets/css/complete-guide-grid/#prop-grid-template-areas */}
      <div></div>
      <Menu className="nav" />
      <div></div>
      <div></div>
      <EventSlider />
      <div></div>
      {/* <About />
      <Team />
      <Subscribe />
      <Sponsors />
      <Contact />
      <Footer /> */}
    </div>
  );
}

export default App;
