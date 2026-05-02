 import React from 'react';

const ShoppingPage = () => {
  const products = [
    { id: 1, title: "Beauty and The Beast Rose", desc: "Magical LED light-up rose.", link: "/products/beauty-beast-rose", emoji: "🌹", color: "#e94560" },
    { id: 2, title: "Galaxy Red Rose", desc: "Enchanting gift in glass dome.", link: "/products/galaxy-redrose", emoji: "✨", color: "#f093fb" },
    { id: 3, title: "Floral Maxi Dress", desc: "Elegant summer fashion.", link: "/products/floral-maxi-dress", emoji: "👗", color: "#ff9a9e" }
  ];

  return (
    <div style={{ backgroundColor: '#0f0c29', minHeight: '100vh', padding: '40px 20px', color: 'white', width: '100%' }}>
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <h1 style={{ color: '#f5576c', fontSize: '2.5rem' }}>Our Top Recommendations</h1>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '25px', maxWidth: '1100px', margin: '0 auto' }}>
        {products.map((item) => (
          <div key={item.id} style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '20px', padding: '25px', border: '1px solid rgba(255,255,255,0.1)', textAlign: 'center' }}>
            <div style={{ fontSize: '50px' }}>{item.emoji}</div>
            <h3>{item.title}</h3>
            <p style={{ color: '#abb2bf' }}>{item.desc}</p>
            <a href={item.link} target="_blank" rel="noopener noreferrer" style={{ display: 'block', background: item.color, color: 'white', padding: '10px', borderRadius: '50px', textDecoration: 'none' }}>View on Amazon</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShoppingPage;
