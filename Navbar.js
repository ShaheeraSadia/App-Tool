 import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ 
      padding: '15px 20px', 
      display: 'flex', 
      gap: '25px', 
      justifyContent: 'center', 
      background: '#ffffff', 
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      position: 'sticky',
      top: 0,
      zIndex: 1000
    }}>
      <Link to="/" style={navLinkStyle}>Home</Link>
      <Link to="/shopping" style={navLinkStyle}>Shopping</Link>
      <Link to="/resources" style={{ ...navLinkStyle, color: '#ff9900', fontWeight: 'bold' }}>Resources</Link>
    </nav>
  );
};

const navLinkStyle = {
  textDecoration: 'none',
  color: '#333',
  fontSize: '16px',
  transition: 'color 0.3s'
};

export default Navbar;
