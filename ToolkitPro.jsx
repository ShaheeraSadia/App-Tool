 import React, { useState, useCallback, useRef } from 'react';

const ToolkitPro = () => {
  // --- States for Image Compressor ---
  const [imageSettings, setImageSettings] = useState({
    originalSize: 0,
    compressedSize: 0,
    quality: 0.7,
    maxWidth: 1200,
    isCompressing: false
  });
  const [previewUrl, setPreviewUrl] = useState(null);
  const fileInputRef = useRef(null);

  // --- States for Color Palette ---
  const [colors, setColors] = useState([]);
  const [isExtracting, setIsExtracting] = useState(false);

  // --- Image Compression Logic ---
  const handleCompress = useCallback(async (file) => {
    if (!file) return;
    
    setImageSettings(prev => ({ ...prev, isCompressing: true, originalSize: file.size }));
    
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        let width = img.width;
        let height = img.height;

        if (width > imageSettings.maxWidth) {
          height = (imageSettings.maxWidth / width) * height;
          width = imageSettings.maxWidth;
        }

        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);

        canvas.toBlob((blob) => {
          setPreviewUrl(URL.createObjectURL(blob));
          setImageSettings(prev => ({ 
            ...prev, 
            compressedSize: blob.size, 
            isCompressing: false 
          }));
        }, 'image/jpeg', imageSettings.quality);
      };
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  }, [imageSettings.maxWidth, imageSettings.quality]);

  // --- Render Function ---
  return (
    <div className="p-6 bg-gray-50 rounded-2xl shadow-inner">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Toolkit Pro Utilities</h2>
      
      {/* Upload Section */}
      <div className="flex flex-col items-center justify-center p-8 border-2 border-dashed border-blue-400 rounded-xl bg-white">
        <input 
          type="file" 
          accept="image/*" 
          className="hidden" 
          ref={fileInputRef}
          onChange={(e) => handleCompress(e.target.files[0])}
        />
        <button 
          onClick={() => fileInputRef.current.click()}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Upload Image to Compress
        </button>

        {imageSettings.originalSize > 0 && (
          <div className="mt-4 text-sm text-gray-600">
            <p>Original: {(imageSettings.originalSize / 1024).toFixed(2)} KB</p>
            {imageSettings.compressedSize > 0 && (
              <p className="text-green-600 font-bold">Compressed: {(imageSettings.compressedSize / 1024).toFixed(2)} KB</p>
            )}
          </div>
        )}
      </div>

      {previewUrl && (
        <div className="mt-8 text-center">
          <img src={previewUrl} alt="Preview" className="max-w-xs mx-auto rounded-lg shadow-md mb-4" />
          <a 
            href={previewUrl} 
            download="compressed-image.jpg"
            className="text-blue-600 underline font-medium"
          >
            Download Compressed Image
          </a>
        </div>
      )}
    </div>
  );
}; // یہاں فنکشن کو صحیح طرح بند کیا گیا ہے

export default ToolkitPro;
