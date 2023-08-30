import './App.css';
import Banner from "./Components/Banner/Banner"
import Contact from "./Components/Contact/Contact"
import Header from "./Components/Header/Header"
import Home from "./Components/Home/Home"
import Nav from "./Components/Nav/Nav"
import Works from "./Components/Works/Works"

function App() {
  return (
    <div className="App">
      <Banner />
      <Contact />
      <Header />
      <Home />
      <Nav />
      <Works />
    </div>
  );
}

export default App;
