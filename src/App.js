import React, {useState, useEffect} from 'react'
import Navbar from './Navbar'
import {Route, Routes} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import NotFound from './NotFound'
import PortfolioContainer from './PortfolioContainer'
import Footer from './Footer'

const API = "http://localhost:3000/projects"


function App() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch(API)
    .then(res => res.json())
    .then(data => setProjects(data));
  }, []);
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/about" element={<About/>}/>
        <Route path="/portfolio" element= {<PortfolioContainer projects={projects}/>}/> 
        <Route path="/contact" element={<Contact/>}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;