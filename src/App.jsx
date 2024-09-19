import React from 'react';
import Navbar from './Componets/Navbar';
import Banner from './Componets/Banner';
import Skills from './Componets/Skills';
import Projects from './Componets/Projects';
import Contact from './Componets/Contact';
import Footer from './Componets/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from'react-router-dom';
import Contact from './Componets/Contact';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Banner />
        <Skills />
        <Projects />
        <Contact/>
        <Footer />
      </div>
    </Router>
  );
};

export default App;