import React, { useState, useRef } from 'react';

const ToolkitPro = () => {
  // --- States for Image Compressor ---
  const [compressorData, setCompressorData] = useState({
    originalUrl: null,
    compressedUrl: null,
    originalSize: 0,
    compressedSize: 0,
    reduction: 0,
    isCompressing: false
  });
  const [settings, setSettings] = useState({ quality: 0.7, scale: 1, format: 'original' });
  const fileInputRef = useRef(null);

  // --- States for Color Palette ---
  const [palette, setPalette] = useState([]);
  const [paletteImageUrl, setPaletteImageUrl] = useState(null);
  const paletteInputRef = useRef(null);

  // --- States for Contact Form ---
  const [contact, setContact] = useState({ name: '', email: '', message: '' });
  const [isSending, setIsSending] = useState(false);

  // =============================================
  // 1. IMAGE COMPRESSOR LOGIC
  // =============================================
  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      setCompressorData({
        ...compressorData,
        originalUrl: URL.createObjectURL(file),
        originalSize: (file.size / 1024).toFixed(2),
        compressedUrl: null
      });
    }
  };

  const compressImage = () => {
    if (!compressorData.originalUrl) return;
    setCompressorData(prev => ({ ...prev, isCompressing: true }));

    const img = new Image();
    img.src = compressorData.originalUrl;
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      const width = img.width * settings.scale;
      const height = img.height * settings.scale;
      canvas.width = width;
      canvas.height = height;
      ctx.drawImage(img, 0, 0, width, height);

      const mimeType = settings.format === 'original' ? 'image/jpeg' : `image/${settings.format}`;
      
      canvas.toBlob((blob) => {
        const url = URL.createObjectURL(blob);
        setCompressorData(prev => ({
          ...prev,
          compressedUrl: url,
          compressedSize: (blob.size / 1024).toFixed(2),
          reduction: ((1 - blob.size / (prev.originalSize * 1024)) * 100).toFixed(1),
          isCompressing: false
        }));
      }, mimeType, settings.quality);
    };
  };

  // =============================================
  // 2. COLOR PALETTE LOGIC
  // =============================================
  const extractPalette = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setPaletteImageUrl(url);

    const img = new Image();
    img.src = url;
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      canvas.width = 50; canvas.height = 50; // Downscale for speed
      ctx.drawImage(img, 0, 0, 50, 50);
      const data = ctx.getImageData(0, 0, 50, 50).data;
      
      const colors = {};
      for (let i = 0; i < data.length; i += 20) {
        const rgb = `${data[i]},${data[i+1]},${data[i+2]}`;
        colors[rgb] = (colors[rgb] || 0) + 1;
      }
      const sorted = Object.entries(colors).sort((a,b) => b[1]-a[1]).slice(0, 8);
      setPalette(sorted.map(([rgb]) => {
        const [r,g,b] = rgb.split(',');
        return "#" + [r,g,b].map(x => parseInt(x).toString(16).padStart(2,'0')).join('');
      }));
    };
  };

  // =============================================
  // 3. CONTACT FORM LOGIC
  // =============================================
  const handleContactSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    setTimeout(() => {
      alert("Message Sent Successfully!");
      setContact({ name: '', email: '', message: '' });
      setIsSending(false);
    }, 1500);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Toolkit Pro - Creative Suite</h1>

      {/* Section 1: Image Compressor */}
      <section style={{ marginBottom: '40px', border: '1px solid #ddd', padding: '20px' }}>
        <h2>1. Image Compressor</h2>
        <input type="file" ref={fileInputRef} onChange={handleFileSelect} hidden />
        <button onClick={() => fileInputRef.current.click()}>Select Image</button>
        {compressorData.originalUrl && (
          <div>
             <p>Quality: {Math.round(settings.quality * 100)}%</p>
             <input type="range" min="0.1" max="1" step="0.1" value={settings.quality} 
                    onChange={e => setSettings({...settings, quality: parseFloat(e.target.value)})} />
             <button onClick={compressImage}>{compressorData.isCompressing ? "Processing..." : "Compress"}</button>
          </div>
        )}
        {compressorData.compressedUrl && (
          <div style={{ marginTop: '10px' }}>
            <p>Saved: {compressorData.reduction}%</p>
            <a href={compressorData.compressedUrl} download="toolkit-pro-img.jpg">Download Compressed Image</a>
          </div>
        )}
      </section>

      {/* Section 2: Color Palette */}
      <section style={{ marginBottom: '40px', border: '1px solid #ddd', padding: '20px' }}>
        <h2>2. Color Palette Extractor</h2>
        <input type="file" ref={paletteInputRef} onChange={extractPalette} hidden />
        <button onClick={() => paletteInputRef.current.click()}>Upload for Palette</button>
        <div style={{ display: 'flex', gap: '10px', marginTop: '15px' }}>
          {palette.map(color => (
            <div key={color} style={{ background: color, width: '50px', height: '50px', borderRadius: '5px' }} 
                 title={`Copy ${color}`} onClick={() => navigator.clipboard.writeText(color)}></div>
          ))}
        </div>
      </section>

      {/* Section 3: Contact Form */}
      <section style={{ border: '1px solid #ddd', padding: '20px' }}>
        <h2>3. Contact Us</h2>
        <form onSubmit={handleContactSubmit}>
          <input type="text" placeholder="Name" value={contact.name} required
                 onChange={e => setContact({...contact, name: e.target.value})} style={{ display: 'block', margin: '10px 0' }} />
          <textarea placeholder="Message" value={contact.message} required
                    onChange={e => setContact({...contact, message: e.target.value})} style={{ display: 'block', margin: '10px 0' }} />
          <button type="submit" disabled={isSending}>{isSending ? "Sending..." : "Send Message"}</button>
        </form>
      </section>
    </div>
  );
};

export default ToolkitPro;
