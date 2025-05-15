import React from 'react';

import ProductDetails from './Components/ProductDetails';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Rings from './Pages/Rings';
import Earrings from './Pages/Earrings';
import Necklaces from './Pages/Necklaces';
import Bracelets from './Pages/Bracelets';
import About from './Pages/About';
import Faq from './Pages/Faq';
import CancellationNreturns from './Pages/CancellationNreturns';
import ProductSection from './Components/ProductSection/ProductSection';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Rings" element={<Rings />} />
         <Route path="/Earrings" element={<Earrings />} />
          <Route path="/Necklaces" element={<Necklaces />} />
           <Route path="/Bracelets" element={<Bracelets />} />

           <Route path="/about" element={<About />} />
           <Route path="/faq" element={<Faq />} />
            <Route path="/CancellationNreturns" element={<CancellationNreturns />} />

          <Route path="/product/:id" element={<ProductDetails />} />
           
        {/* Add more routes here */}
      </Routes>
    </Router>
  );
}

export default App;
