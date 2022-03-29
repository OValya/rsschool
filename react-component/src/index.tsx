import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AboutUs from './routes/about';
import Error404 from './routes/error';
import {BrowserRouter, Routes, Route} from "react-router-dom" 

ReactDOM.render(
  <BrowserRouter>
  <Routes>
    <Route path = '/' element={<App />}>
      <Route path='*' element={<Error404 />} />
      <Route path='about' element={<AboutUs/>}/>
    </Route>
    
  </Routes>
    
  </BrowserRouter>,
  document.body
);

