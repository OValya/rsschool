import React from 'react';
import { Link } from 'react-router-dom';


 export default function NavBar() {
  return (
    <nav>
      <Link className="App-link" to="/home">
        Home
      </Link>{' '}
      |{' '}
      <Link className="App-link" to="/about">
        About Us
      </Link>
    </nav>
  );
}

 
