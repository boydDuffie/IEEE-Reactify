import React from 'react';
import './App.css';
import { Menu } from '../Menu/Menu';
import { Slider } from '../Slider/Slider';
import { About } from '../About/About';
import { Team } from '../Team/Team';
import { Contact } from '../Contact/Contact';
import { ContactFeature } from '../ContactFeature/ContactFeature';
import { Footer } from '../Footer/Footer';

function App() {
  return (
    <div className="App">
      <Menu />
      <Slider />
      <About />
      <Team />
      <Contact />
      <ContactFeature />
      <Footer />
    </div>
  );
}

export default App;
