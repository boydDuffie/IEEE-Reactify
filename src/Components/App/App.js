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
    <div className="App">
      {/* TODO: make the menu transition from transparent bg to semi-transparent bg */}
      <Menu className="menu" />
      <EventSlider />
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
