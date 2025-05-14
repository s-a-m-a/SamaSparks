import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Rings">Rings</Link></li>
        <li><Link to="/Earrings">Earrings</Link></li>
        <li><Link to="/Necklaces">Necklaces</Link></li>
        <li><Link to="/Bracelets">Bracelets</Link></li>
        
     
      
      
    </nav>
  );
};

export default Navbar;
