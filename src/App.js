import './App.css';
import Banner from "./Components/Banner/Banner"
import Contact from "./Components/Contact/Contact"
import Home from "./Components/Home/Home"
import Nav from "./Components/Nav/Nav"
import Works from "./Components/Works/Works"
import Skills from './Components/Skills/Skills';
import Footer from './Components/Footer/Footer';
import { useEffect, useState } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode !== null) {
      setDarkMode(savedMode === 'true');
    }
  }, []);

  useEffect(() => {
    document.body.className = darkMode ? 'dark-mode' : 'light-mode';
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(prev => !prev);

  return (
    <div className={`AppCont ${darkMode ? "dark-mode" : "light-mode"}`}>
      <div id="Inicio" className="AppCont">
        <Nav darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <div className="App">
          <section className="fullScreenSection1"><Banner /></section>
          <section className="fullScreenSection"><Home /></section>
          <section className="fullScreenSection3"><Skills /></section>
          <section className="fullScreenSection"><Works /></section>
          <section className="fullScreenSection5"><Contact /></section>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
