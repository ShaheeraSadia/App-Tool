import React from 'react';

const Resources = () => {
  const tools = [
    {
      id: 1,
      name: "Audible Premium Plus",
      description: "As a developer, I use Audible to stay updated with tech and business books while coding. It's a game-changer for lifelong learners.",
      offer: "30-Day FREE Trial + 1 Free Audiobook Credit",
      link: "https://www.amazon.com/hz/audible/mlp/membership/premiumplus?tag=withsadia200d-20",
      category: "Learning"
    }
  ];

  return (
    <div style={{ maxWidth: '1000px', margin: '40px auto', padding: '20px' }}>
      <h1 style={{ textAlign: 'center', color: '#2c3e50' }}>Professional Resources</h1>
      <p style={{ textAlign: 'center', color: '#7f8c8d', marginBottom: '40px' }}>
        Curated tools to help you grow as a developer and professional.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
        {tools.map(tool => (
          <div key={tool.id} style={{
            border: '1px solid #eee', borderRadius: '15px', padding: '25px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', background: '#fff'
          }}>
            <span style={{ color: '#007bff', fontSize: '12px', fontWeight: 'bold' }}>{tool.category}</span>
            <h3 style={{ margin: '10px 0' }}>{tool.name}</h3>
            <p style={{ color: '#555', fontSize: '14px', lineHeight: '1.6' }}>{tool.description}</p>
            <div style={{ background: '#fff9eb', borderLeft: '4px solid #ff9900', padding: '10px', margin: '15px 0', fontSize: '13px' }}>
              <strong>Offer:</strong> {tool.offer}
            </div>
            <a href={tool.link} target="_blank" rel="noopener noreferrer" style={{
              display: 'block', textAlign: 'center', background: '#ff9900', color: '#fff', padding: '12px', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold'
            }}>
              Get Started Free
            </a>
          </div>
        ))}
      </div>

      <footer style={{ marginTop: '50px', textAlign: 'center', borderTop: '1px solid #eee', paddingTop: '20px' }}>
        <p style={{ fontSize: '12px', color: '#999' }}>
          <strong>Affiliate Disclosure:</strong> As an Amazon Associate, I earn from qualifying purchases.
        </p>
        <p style={{ fontWeight: 'bold', color: '#333' }}>Shaheera Sadia – Web & Mobile App Developer</p>
      </footer>
    </div>
  );
};

export default Resources;

 
