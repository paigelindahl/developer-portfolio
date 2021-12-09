import './App.css';
import React, { useRef, useEffect } from "react";
import Navigate from './components/Navigate';
import HomePage from './components/HomePage';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';


// const useMountEffect = fun => useEffect(fun, []);

function App() {
  const myRef = useRef(null);
  const executeScroll = () => myRef.current.scrollIntoView();
  // useMountEffect(executeScroll);
  return (
    <div className="App">
      <Navigate executeScroll={executeScroll}></Navigate>
      <HomePage executeScroll={executeScroll}></HomePage>
      <About myRef={myRef} ></About>
      <Projects ></Projects>
      <Contact />

    </div>
  );
}

export default App;
