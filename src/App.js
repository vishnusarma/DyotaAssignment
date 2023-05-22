import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Signup from './components/Signup';
import Chatbot from "./components/Chatbot";

function App() {
  return <Router>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/services' element={<Services/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/chat' element={<Chatbot/>}></Route>
    </Routes>
  </Router>
}

export default App;
