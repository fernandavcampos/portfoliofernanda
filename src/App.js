// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import './App.css';
import Projects from './components/Projects';
import Contact from './components/Contact'
import ProjectDetails from './components/ProjectDetails';




const App = () => (
  <Router>
   
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre-mim" element={<AboutMe />} />
        <Route path="/projetos" element={<Projects />}/>
        <Route path="/projetos/:id" element={<ProjectDetails />}/>
        <Route path="/contatos" element={<Contact />}/>
      </Routes>
    </div> 
   
  </Router>
);

export default App;
