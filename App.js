 import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import ShoppingPage from './ShoppingPage.jsx';
 import ToolkitPro from './ToolkitPro'; 
function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          {/* ہوم پیج راؤٹ */}
          <Route path="/" element={
            <div className="p-10 bg-white shadow-lg rounded-3xl text-center border border-dashed">
              <h2 className="text-xl font-bold">Image Compressor is Active Below</h2>
              <div className="mt-8">
                <ToolkitPro />
              </div>
              {/* Pinterest Banner */}
              <div className="w-full bg-red-600 text-white p-6 rounded-2xl mt-4">
                <h3>32k+</h3>
                <p>Monthly Views on Pinterest</p>
              </div>
            </div>
          } />

          {/* شاپنگ پیج راؤٹ */}
          <Route path="/shopping" element={<ShoppingPage />} />
        </Routes>
      </div>
    </Router>
  );
}
 


export default App;
