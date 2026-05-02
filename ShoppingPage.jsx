import React from 'react';

const ShoppingPage = () => {
  const products = [
    {
      id: 1,
      title: "Beauty and The Beast Rose",
      desc: "A breathtaking preserved flower gift in a glass dome with magical LED lights.",
      link: "/products/beauty-beast-rose",
      emoji: "🌹",
      color: "#e94560"
    },
    {
      id: 2,
      title: "Galaxy Red Rose",
      desc: "Enchanting light-up rose in a glass dome. The perfect romantic gift.",
      link: "/products/galaxy-redrose",
      emoji: "✨",
      color: "#f093fb"
    },
    {
      id: 3,
      title: "Floral Maxi Dress",
      desc: "Elegant and breathable floral design, perfect for summer aesthetics.",
      link: "/products/floral-maxi-dress",
      emoji: "👗",
      color: "#ff9a9e"
    }
  ];

  return (
    <div style={{ backgroundColor: '#0f0c29', minHeight: '100vh', padding: '40px 20px', color: 'white', width: '100%' }}>
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <h1 style={{ color: '#f5576c', fontSize: '2.5rem' }}>Curated Favorites</h1>
        <p style={{ opacity: '0.6' }}>Handpicked premium products for you</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '25px', maxWidth: '1100px', margin: '0 auto' }}>
        {products.map((item) => (
          <div key={item.id} style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '20px', padding: '25px', border: '1px solid rgba(255,255,255,0.1)', textAlign: 'center' }}>
            <div style={{ fontSize: '50px', marginBottom: '15px' }}>{item.emoji}</div>
            <h3 style={{ marginBottom: '10px' }}>{item.title}</h3>
            <p style={{ fontSize: '0.9rem', color: '#abb2bf', marginBottom: '20px' }}>{item.desc}</p>
            <a href={item.link} target="_blank" rel="noopener noreferrer" 
               style={{ display: 'block', background: item.color, color: 'white', padding: '12px', borderRadius: '50px', textDecoration: 'none', fontWeight: 'bold' }}>
              View on Amazon
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShoppingPage;
