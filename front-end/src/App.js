import './App.css';
import React from "react";
import Navigate from './components/Navigate';
import HomePage from './components/HomePage';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';



function App() {



  return (
    <div className="App">
      <Navigate></Navigate>
      <HomePage></HomePage>
      <About ></About>
      <Projects ></Projects>
      <Contact></Contact>

    </div>
  );
}

export default App;
