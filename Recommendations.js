// پہلی لائن (import React...) کو ڈیلیٹ کر دیں
const Recommendations = () => {
    const products = [
        {
            id: 1,
            title: "Featured Tech Deal 1",
            urduTitle: "1 - بہترین ٹیک ڈیل",
            description: "A highly recommended product for tech enthusiasts and developers.",
            link: "https://amzn.to/4u08jx5",
            category: "Tech Gear"
        },
        {
            id: 2,
            title: "Featured Tech Deal 2",
            urduTitle: "2 - بہترین ٹیک ڈیل",
            description: "Boost your productivity with this essential workspace tool.",
            link: "https://amzn.to/4u08jx5",
            category: "Gadgets"
        }
    ];

    return (
        <div style={{ fontFamily: 'Arial, sans-serif', padding: '40px', backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
            <header style={{ textAlign: 'center', marginBottom: '50px' }}>
                <h1 style={{ color: '#333', fontSize: '2.5rem' }}>Shaheera's Recommendations</h1>
                <p style={{ fontSize: '1.2rem', color: '#666' }}>
                    وہ پروڈکٹس جو میں نے خاص طور پر آپ کے لیے منتخب کی ہیں۔
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
                        <h3 style={{ margin: '15px 0 5px' }}>{item.title}</h3>
                        <h4 style={{ color: '#ff4500', margin: '0 0 15px' }}>{item.urduTitle}</h4>
                        <p style={{ color: '#666', fontSize: '0.9rem', marginBottom: '20px' }}>{item.description}</p>
                        <a href={item.link} target="_blank" rel="noopener noreferrer" style={{
                            display: 'block',
                            backgroundColor: '#232f3e',
                            color: '#fff',
                            padding: '15px',
                            borderRadius: '10px',
                            textDecoration: 'none',
                            fontWeight: 'bold'
                        }}>
                            View on Amazon
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};
// آخری لائن (export default...) کو بھی ڈیلیٹ کر دیں 
