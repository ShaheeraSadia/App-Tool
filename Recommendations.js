import React from 'react';

const Recommendations = () => {
  const products = [
    {
      id: 1,
      title: "Featured Tech Deal 1",
      urduTitle: "بہترین ٹیک ڈیل - 1",
      description: "A highly recommended product for tech enthusiasts and developers.",
      link: "https://amzn.to/4u08jx5", // آپ کا پہلا لنک یہاں ہے
      category: "Tech Gear"
    },
    {
      id: 2,
      title: "Featured Tech Deal 2",
      urduTitle: "بہترین ٹیک ڈیل - 2",
      description: "Boost your productivity with this essential workspace tool.",
      link: "https://amzn.to/4u08jx5", // آپ کا دوسرا لنک یہاں ہے
      category: "Gadgets"
    }
  ];

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '40px', backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
      <header style={{ textAlign: 'center', marginBottom: '50px' }}>
        <h1 style={{ color: '#333', fontSize: '2.5rem' }}>Shaheera’s Recommendations</h1>
        <p style={{ fontSize: '1.2rem', color: '#666' }}>
          وہ پروڈکٹس جو میں نے خاص طور پر آپ کے لیے منتخب کی ہیں
        </p>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px', maxWidth: '1200px', margin: '0 auto' }}>
        {products.map((item) => (
          <div key={item.id} style={{ 
            backgroundColor: '#fff', 
            padding: '25px', 
            borderRadius: '20px', 
            boxShadow: '0 10px 20px rgba(0,0,0,0.05)',
            textAlign: 'center',
            border: '1px solid #eee'
          }}>
            <span style={{ backgroundColor: '#fff0eb', color: '#ff4500', padding: '5px 15px', borderRadius: '15px', fontSize: '0.8rem', fontWeight: 'bold' }}>
              {item.category}
            </span>
            <h2 style={{ fontSize: '1.5rem', margin: '15px 0 5px' }}>{item.title}</h2>
            <h3 style={{ fontSize: '1.1rem', color: '#555', marginBottom: '15px', fontWeight: 'normal' }}>{item.urduTitle}</h3>
            <p style={{ color: '#777', marginBottom: '25px', lineHeight: '1.6' }}>{item.description}</p>
            <a 
              href={item.link} 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ 
                display: 'block', 
                backgroundColor: '#232f3e', // Amazon Theme Color
                color: '#fff', 
                padding: '15px', 
                borderRadius: '10px', 
                textDecoration: 'none',
                fontWeight: 'bold',
                transition: '0.3s'
              }}
            >
              View on Amazon    
            </a>
          </div>
        ))}
      </div>

      <footer style={{ marginTop: '60px', textAlign: 'center', padding: '20px', borderTop: '1px solid #ddd' }}>
        <p style={{ fontSize: '0.8rem', color: '#999' }}>
          * ایفی لیٹ انکشاف: ان لنکس سے ہونے والی آمدنی میرے کام کو سپورٹ کرتی ہے۔
        </p>
      </footer>
    </div>
  );
};

export default Recommendations;
