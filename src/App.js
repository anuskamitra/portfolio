
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import {Element } from 'react-scroll';
import Navb from './components/Navbar';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Home from './components/Home';
import  ScrollToTop  from './components/ScrollToTop';
function App() {

  return (
    <div className='App' > 
      <Router>
      <ScrollToTop/>
      <Navb/>
        <Routes>
          <Route path="/" exact element={<Home/>}/>
          <Route path="/education" element={<Education/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/contact" element={<Contact/>}/>
      </Routes>
      {/* <Element name="/">
          <Home/>
        </Element> */}
        <Element name="education">
          <Education />
        </Element>
        <Element name="projects">
          <Projects />
        </Element>
        <Element name="contact">
          <Contact />
        </Element>
      </Router>
      
    </div>
  );
}

export default App;
