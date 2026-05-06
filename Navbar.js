import React from 'react';

const Navbar = () => {
  return (
    <nav style={{ 
      padding: '15px 20px', 
      display: 'flex', 
      gap: '20px', 
      justifyContent: 'center', 
      background: '#fff', 
      borderBottom: '1px solid #eee' 
    }}>
      <a href="/" style={{ textDecoration: 'none', color: '#333' }}>Home</a>
      <a href="/shopping" style={{ textDecoration: 'none', color: '#333' }}>Shopping</a>
      {/* نیا بٹن یہاں ہے */}
      <a href="/resources" style={{ 
        textDecoration: 'none', 
        color: '#ff9900', 
        fontWeight: 'bold' 
      }}>
        Resources
      </a>
    </nav>
  );
};

export default Navbar;
