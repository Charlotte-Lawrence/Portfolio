import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import ProjectsInfo from './components/ProjectsInfo';
import Footer from './components/Footer';
import Contact from './components/Contact';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <ProjectsInfo />
      <Contact />
      <Footer />
    </div>
  );
};

export default React.memo(App);
