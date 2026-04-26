 
 import React from 'react';
import CurrencyConverter from './CurrencyConverter.jsx';
 
function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10 space-y-12">
      
      {/* 1. نیا ٹول: Currency Converter */}
      <section className="w-full px-4">
        <CurrencyConverter />
      </section>

      {/* 2. پرانا ٹول: Image Compressor */}
      <section className="w-full max-w-4xl px-4">
        {/* یہاں آپ کے پرانے Image Compressor کا کوڈ آئے گا */}
        <div className="p-10 bg-white shadow-lg rounded-3xl text-center border border-dashed border-gray-300">
          <h2 className="text-xl font-bold text-gray-700">Image Compressor is Active Below</h2>
          <p className="text-gray-400">Your existing tools are safe!</p>
        </div>
      </section>

      {/* 3. Pinterest Banner (32K+) */}
      <div className="w-full max-w-md bg-red-600 text-white p-6 rounded-[2rem] text-center shadow-xl">
        <h3 className="text-2xl font-black">32K+</h3>
        <p className="text-sm opacity-90">Monthly Views on Pinterest</p>
      </div>

    </div>
  );
}

export default App;
