import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import AboutUs from './routes/about';
import Error404 from './routes/error';
import Home from './routes/home';
import App from './App';



ReactDOM.render(
  <BrowserRouter> 
    <Routes>
      <Route path='/' element={<App/>}> 
        <Route path="*" element={<Error404 />} />
        <Route path="/about" element={<AboutUs />} /> 
        <Route path="/home" element={<Home />} />
      </Route> 
    </Routes>
  </BrowserRouter>
  ,
  document.body
);

