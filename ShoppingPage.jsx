import React from 'react';

const ShoppingPage = () => {
  const products = [
    { id: 1, title: "Rose Spa Basket", desc: "8 Pcs luxury bath set for relaxation.", link: "/products/rose-spa-basket", emoji: "🛁", color: "#f5576c" },
    { id: 2, title: "Beauty and The Beast Rose", desc: "Magical LED light-up rose in glass dome.", link: "/products/beauty-beast-rose", emoji: "🌹", color: "#e94560" },
    { id: 3, title: "Mom Necklace", desc: "Elegant personalized gift for mother.", link: "/products/mom-necklace", emoji: "💎", color: "#764ba2" },
    { id: 4, title: "Industrial Lamp", desc: "Vintage style lighting for home office.", link: "/products/industrial-lamp", emoji: "💡", color: "#4facfe" },
    { id: 5, title: "Floral Maxi Dress", desc: "Elegant summer fashion for aesthetic look.", link: "/products/floral-maxi-dress", emoji: "👗", color: "#ff9a9e" },
    { id: 6, title: "Skin Care Gift Set", desc: "Premium quality skin care essentials.", link: "/products/skin-care-gift-set", emoji: "🧴", color: "#667eea" },
    { id: 7, title: "Galaxy Red Rose", desc: "Enchanting crystal rose for decor.", link: "/products/galaxy-redrose", emoji: "✨", color: "#f093fb" },
    { id: 8, title: "Family Airfryer", desc: "Healthy cooking for the whole family.", link: "/products/family-airfryer", emoji: "🍟", color: "#43e97b" },
    { id: 9, title: "Dual Air Fryer", desc: "Double basket for efficient cooking.", link: "/products/dual-air-fryer", emoji: "🍗", color: "#fa709a" },
    { id: 10, title: "Honey Almond Gift", desc: "Sweet and nourishing holiday gift set.", link: "/products/honey-almond-gift", emoji: "🍯", color: "#f6d365" }
  ];

  return (
    <div style={{ backgroundColor: '#0f0c29', minHeight: '100vh', padding: '40px 20px', color: 'white', width: '100%' }}>
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <h1 style={{ color: '#f5576c', fontSize: '2.5rem' }}>Our Top Recommendations</h1>
        <p style={{ color: '#abb2bf' }}>Handpicked products just for you</p>
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
        gap: '25px', 
        maxWidth: '1100px', 
        margin: '0 auto' 
      }}>
        {products.map((item) => (
          <div key={item.id} style={{ 
            background: '#1a1a2e', 
            padding: '30px', 
            borderRadius: '20px', 
            textAlign: 'center',
            border: '1px solid #16213e'
          }}>
            <div style={{ fontSize: '50px', marginBottom: '15px' }}>{item.emoji}</div>
            <h3 style={{ marginBottom: '10px' }}>{item.title}</h3>
            <p style={{ color: '#abb2bf', fontSize: '0.9rem', marginBottom: '20px' }}>{item.desc}</p>
            
            <a 
              href={item.link} 
              style={{ 
                display: 'block', 
                background: item.color, 
                color: 'white', 
                padding: '12px', 
                borderRadius: '10px', 
                textDecoration: 'none', 
                fontWeight: 'bold' 
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
