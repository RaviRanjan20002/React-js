
import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <>
    <nav> 
     <h1>TECHSTAR</h1>
     <main>
     <Link to="/"> Home </Link>
     <Link to="/"> About </Link>
     <Link to="/"> contact </Link>
     <Link to="/"> service </Link>
     </main>
     
    </nav>
    </>  
  );
}

export default Header
