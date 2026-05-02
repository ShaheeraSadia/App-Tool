 import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{
      width: '100%',
      padding: '15px 40px',
      background: '#1a1a2e',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
    }}>
      <Link to="/" style={{ textDecoration: 'none', fontSize: '1.5rem', fontWeight: 'bold', color: '#f5576c' }}>
        Toolkit Pro
      </Link>

      <div style={{ display: 'flex', gap: '25px' }}>
        <Link to="/" style={{ textDecoration: 'none', color: '#ffffff', fontWeight: '500' }}>Home</Link>
        <Link to="/shopping" style={{ textDecoration: 'none', color: '#ffffff', fontWeight: '500' }}>Shop</Link>
      </div>
    </nav>
  );
};

export default Navbar;
