import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
 
import Navbar from './Navbar'; // نیوی گیشن بار کا امپورٹ
import Resources from './Resources';
import ShoppingPage from './ShoppingPage'; // کوما (,) ہٹا کر سیمی کولن فکس کر دیا گیا ہے
import ToolkitPro from './ToolkitPro'; 
 

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        {/* نیوی گیشن بار */}
        <Navbar />

        {/* تمام راؤٹس کا مین کنٹینر */}
        <Routes>
          
          {/* 1. ہوم پیج راؤٹ */}
          <Route path="/" element={
            <div className="p-10 bg-white shadow-lg rounded-3xl text-center border border-dashed max-w-4xl mx-auto mt-10 mb-10">
              <h2 className="text-2xl font-bold text-gray-800">Image Compressor is Active Below</h2>
              <div className="mt-8">
                <ToolkitPro />
              </div>
              
              {/* Pinterest Stats Banner */}
              <div className="w-full bg-red-600 text-white p-6 rounded-2xl mt-8">
                <h3 className="text-3xl font-bold">97.5k</h3>
                <p className="text-lg">Monthly Views on Pinterest</p>
              </div>
            </div>
          } />

          {/* 2. شاپنگ پیج راؤٹ */}
          <Route path="/shopping" element={<ShoppingPage />} />

          {/* 3. ریسورسز پیج راؤٹ */}
          <Route path="/resources" element={<Resources />} />

          

        </Routes>
      </div>
    </Router>
  );
}

export default App;



































 
