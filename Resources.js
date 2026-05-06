import React from 'react';

const Resources = () => {
  const tools = [
    {
      id: 1,
      name: "Audible Premium Plus",
      description: "As a Web and Mobile Application Developer, I use Audible to stay updated with technology and business books while I work. It effectively turns coding hours into productive learning sessions.",
      offer: "30-Day FREE Trial + 1 Free Audiobook Credit",
      // آپ کا ایفی لیٹ لنک یہاں شامل ہے
      link: "https://www.amazon.com/hz/audible/mlp/membership/premiumplus?tag=withsadia200d-20",
      category: "Learning & Growth"
    }
  ];

  return (
    <div className="resources-page" style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
      <header style={{ textAlign: 'center', marginBottom: '50px' }}>
        <h1 style={{ color: '#2c3e50' }}>Professional Resources</h1>
        <p style={{ color: '#7f8c8d' }}>Handpicked tools to boost your development and productivity.</p>
      </header>

      <div className="resources-grid" style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
        gap: '30px' 
      }}>
        {tools.map(tool => (
          <div key={tool.id} className="resource-card" style={{
            border: '1px solid #eee',
            borderRadius: '15px',
            padding: '25px',
            boxShadow: '0 10px 20px rgba(0,0,0,0.05)',
            backgroundColor: '#fff'
          }}>
            <small style={{ color: '#3498db', fontWeight: 'bold' }}>{tool.category}</small>
            <h3 style={{ marginTop: '10px', color: '#2c3e50' }}>{tool.name}</h3>
            <p style={{ color: '#555', fontSize: '15px', lineHeight: '1.6' }}>{tool.description}</p>
            
            <div style={{ 
              background: '#fff9eb', 
              borderLeft: '5px solid #ff9900', 
              padding: '12px', 
              margin: '20px 0',
              fontSize: '14px'
            }}>
              <strong>Exclusive Offer:</strong> {tool.offer}
            </div>

            <a 
              href={tool.link} 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                display: 'block',
                textAlign: 'center',
                background: '#ff9900',
                color: 'white',
                padding: '12px',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: 'bold'
              }}
            >
              Claim Your Free Trial
            </a>
          </div>
        ))}
      </div>

      <footer style={{ marginTop: '60px', borderTop: '1px solid #eee', paddingTop: '20px', textAlign: 'center' }}>
        <p style={{ fontSize: '12px', color: '#95a5a6' }}>
          <strong>Affiliate Disclosure:</strong> As an Amazon Associate, I earn from qualifying purchases. 
          This support helps me keep building free tools for the community.
        </p>
        <p style={{ fontWeight: 'bold', color: '#2c3e50' }}>Curated by Shaheera Sadia</p>
      </footer>
    </div>
  );
};

export default Resources;
