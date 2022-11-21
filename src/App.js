import React from 'react';
import Navbar from './components/Navbar';
import './App.css';

import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import bgImage from './videos/video-1.mp4';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <video autoPlay loop muted>
        <source src={bgImage} type="video/mp4"/>
        </video>
        <Routes>
          <Route path='/' exact element= {< Home/> } />
          <Route path='/services' element={< Services/> } />
          <Route path='/products' element={< Products/> } />
          <Route path='/sign-up' element={< SignUp/> } />
        </Routes>
      </Router>
    </>
  );
}

export default App;
