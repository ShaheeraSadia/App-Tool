 import React from 'react';

const ShoppingPage = () => {
  const products = [
    { id: 1, title: "Family Sized Airfryer", desc: "Large capacity cooker with 3 layers for family meals.", link: "https://amzn.to/3OCJecN", emoji: "🍟", color: "#43e97b" },
    { id: 2, title: "Rose Spa Basket", desc: "8 Pcs luxury bath set for ultimate relaxation.", link: "https://amzn.to/4t1uK45", emoji: "🛁", color: "#f5576c" },
    { id: 3, title: "Beauty and The Beast Rose", desc: "Magical LED light-up rose in a glass dome.", link: "https://amzn.to/4ujC2Bc", emoji: "🌹", color: "#e94560" },
    { id: 4, title: "Halter Floral Prom Dress", desc: "Wedtrend Women's formal lace bridesmaid dress.", link: "https://amzn.to/4t6tywp", emoji: "👗", color: "#ff758c" },
    { id: 5, title: "CZ Halo Stud Earrings", desc: "18K Gold plated brilliant simulated diamond earrings.", link: "https://amzn.to/4w0r7y5", emoji: "💎", color: "#a1c4fd" },
    { id: 6, title: "Silver Cross Necklace", desc: "Solid 925 sterling silver chain with beveled edge pendant.", link: "https://amzn.to/4cOboec", emoji: "✝️", color: "#c1c1c1" },
    { id: 7, title: "Mom Necklace", desc: "Elegant personalized gift for a special mother.", link: "https://amzn.to/4vXHYSb", emoji: "🤱", color: "#764ba2" },
    { id: 8, title: "Industrial Lamp", desc: "Vintage style lighting for home or office decor.", link: "https://amzn.to/4fWqS7u", emoji: "💡", color: "#4facfe" },
    { id: 9, title: "Floral Maxi Dress", desc: "Elegant summer fashion for an aesthetic look.", link: "https://amzn.to/426S3P3", emoji: "🌸", color: "#ff9a9e" },
    { id: 10, title: "Skin Care Gift Set", desc: "Premium quality skin care essentials kit.", link: "https://amzn.to/4vXwgqF", emoji: "🧴", color: "#667eea" },
    { id: 11, title: "Galaxy Red Rose", desc: "Enchanting crystal rose for home decoration.", link: "https://amzn.to/4cZ27yy", emoji: "✨", color: "#f093fb" },
    { id: 12, title: "Dual Air Fryer", desc: "Double basket for efficient and healthy cooking.", link: "https://amzn.to/4cTUBVP", emoji: "🍗", color: "#fa709a" },
    { id: 13, title: "Honey Almond Gift", desc: "Sweet and nourishing holiday gift set.", link: "https://amzn.to/4tHhPWd", emoji: "🍯", color: "#f6d365" }
  ];

  return (
    <div style={{ backgroundColor: '#0f0c29', minHeight: '100vh', padding: '40px 20px', color: 'white', width: '100%' }}>
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <h1 style={{ color: '#f5576c', fontSize: '2.5rem' }}>Toolkit Pro Recommendations</h1>
        <p style={{ color: '#abb2bf' }}>Handpicked products for your aesthetic lifestyle</p>
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
        gap: '25px', 
        maxWidth: '1200px', 
        margin: '0 auto' 
      }}>
        {products.map((item) => (
          <div key={item.id} style={{ 
            background: '#1a1a2e', 
            padding: '30px', 
            borderRadius: '24px', 
            textAlign: 'center',
            border: '1px solid #16213e',
            boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
            transition: 'transform 0.3s ease'
          }}>
            <div style={{ fontSize: '55px', marginBottom: '15px' }}>{item.emoji}</div>
            <h3 style={{ marginBottom: '12px', fontSize: '1.2rem' }}>{item.title}</h3>
            <p style={{ color: '#abb2bf', fontSize: '0.85rem', marginBottom: '25px', minHeight: '50px', lineHeight: '1.5' }}>{item.desc}</p>
            
            <a 
              href={item.link} 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ 
                display: 'block', 
                background: item.color, 
                color: 'white', 
                padding: '12px', 
                borderRadius: '12px', 
                textDecoration: 'none', 
                fontWeight: 'bold',
                fontSize: '0.9rem'
              }}
            >
              View on Amazon
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShoppingPage;
