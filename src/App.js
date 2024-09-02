import './App.css';
import Banner from "./Components/Banner/Banner"
import Contact from "./Components/Contact/Contact"
import Home from "./Components/Home/Home"
import Nav from "./Components/Nav/Nav"
import Works from "./Components/Works/Works"
import Skills from './Components/Skills/Skills';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <>
    <Nav />
    <div className="App">
      <Banner />
      <Home />
      <Skills />
      <Works />
      <Contact />
    </div>
    <Footer />
    </>
  );
}

export default App;