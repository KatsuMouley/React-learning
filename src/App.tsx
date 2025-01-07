import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Home/Navbar';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/About' element={<About/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
