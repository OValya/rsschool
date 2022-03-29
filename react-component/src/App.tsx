import React from 'react';
import {BrowserRouter, Route, Routes, Link, Outlet} from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import AboutUs from './routes/about';
import Error404 from './routes/error';
import Home from './routes/home';


function App() {
  return (
    <div>
      <header className="App-header">
        <NavBar/>
      </header>
      <Outlet />
    </div>
  );
}

export default App;
