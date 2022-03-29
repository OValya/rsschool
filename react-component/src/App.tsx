import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className='App-nav'>
          <Link className='App-link' to='/about'>About us</Link>
        </nav>
      </header>
      <Outlet/>
    </div>
  );
}

export default App;
