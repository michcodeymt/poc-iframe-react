import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "./home/home";
import {About} from "./about/about";
import {Iframe} from "./iframe/iframe";
import {Profile} from "./profile/profile";

function App() {
  return (
      <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/iframe" element={<Iframe/>}/>
                <Route path="/profile" element={<Profile/>}/>
            </Routes>
      </BrowserRouter>
  );
}

export default App;
