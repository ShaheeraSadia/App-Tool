 import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import ShoppingPage from './ShoppingPage.jsx';
import ToolkitPro from './components/ToolkitPro'; // جہاں آپ نے نیا ٹول سیو کیا ہے

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        
        <Routes>
          {/* ہوم پیج پر آپ کے ٹولز اور بینرز نظر آئیں گے */}
          <Route path="/" element={
            <div className="flex flex-col items-center py-10 space-y-12 w-full">
              
              {/* Image Compressor Section */}
              <section className="w-full max-w-4xl px-4">
                <div className="p-10 bg-white shadow-lg rounded-3xl text-center border border-dashed border-gray-300">
                  <h2 className="text-xl font-bold text-gray-700">Image Compressor is Active Below</h2>
                  <p className="text-gray-400">Your existing tools are safe!</p>
                  
                  {/* یہاں آپ کا اصل ٹول رینڈر ہوگا */}
                  <div className="mt-8">
                    <ToolkitPro />
                  </div>
                </div>
              </section>

              {/* Pinterest Banner */}
              <div className="w-full max-w-md bg-red-600 text-white p-6 rounded-[2rem] text-center shadow-xl">
                <h3 className="text-2xl font-black">32K+</h3>
                <p className="text-sm opacity-90">Monthly Views on Pinterest</p>
              </div>

            </div>
          } />

          {/* Shopping Page Route */}
          <Route path="/shopping" element={<ShoppingPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
