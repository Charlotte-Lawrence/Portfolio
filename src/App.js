import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import ProjectsInfo from './components/ProjectsInfo';
import Footer from './components/Footer';
import Contact from './components/Contact'

class App extends Component {
  render(){
    return (
      <div className="App">
        <Navbar></Navbar>
        <Header></Header>
        <About></About>
        <ProjectsInfo></ProjectsInfo>
        <Contact></Contact>
        <Footer></Footer>
      </div>
    )
  }
}

export default App;
