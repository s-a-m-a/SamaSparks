// src/Components/Footer/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <h4>About</h4>
          <p><Link to="/about">About Us</Link></p>  {/* Use Link to route */}
        </div>
        <div>
          <h4>Help</h4>
          <p><Link to="/faq">FAQ</Link></p>
        </div>
        <div>
          <h4>Consumer Policy</h4>
          <p><a href="/CancellationNreturns">Cancellation & Returns</a></p>
        </div>
        <div>
          <h4>Mail Us</h4>
          <p>SamaSparks Pvt. Ltd, Bangalore, India</p>
        </div>
        <div>
          <h4>Social</h4>
          <p><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></p>
          <p><a href="https://www.gmail.com">Email</a></p>
          <p><a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
        </div>
      </div>
      <p className="copyright">
        &copy; {new Date().getFullYear()} SamaSparks. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
