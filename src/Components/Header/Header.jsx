import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">SamaSparks</div>
      <input type="text" placeholder="Search for jewelry..." className="search-bar" />
      <div className="header-links">
        <a href="#">Login</a> | <a href="#">Signup</a> | <a href="#">My Account</a> | 
        <a href="#">Favourites</a> | <a href="#">Orders</a> | <a href="#">Cart</a> | 
        <a href="#">☰ Support</a>
      </div>
    </header>
  );
};

export default Header;
