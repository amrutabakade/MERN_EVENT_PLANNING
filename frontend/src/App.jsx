
// eslint-disable-next-line no-unused-vars
import React from 'react'
import "./App.css";
import {BrowserRouter as Router} from "react-router-dom";
import Navbar from './components/Navbar';
import Services from './components/Services';
import { HeroSection } from './components/HeroSection';
import About from './components/About';
import { Footer } from './components/Footer';
import { Contact } from './components/Contact';
import {Toaster} from 'react-hot-toast'
const App = () => {
  return (
    <Router>
      <Navbar/>
      <HeroSection/>
      <Services/>
      <About/>
      <Contact/>
      <Footer/>
      <Toaster/>
    </Router>
  )
}

export default App