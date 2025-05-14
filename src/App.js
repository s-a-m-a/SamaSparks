import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Rings from './Pages/Rings';
import Earrings from './Pages/Earrings';
import Necklaces from './Pages/Necklaces';
import Bracelets from './Pages/Bracelets';
import About from './Pages/About';
import Faq from './Pages/Faq';
import CancellationNreturns from './Pages/CancellationNreturns';



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

           
        {/* Add more routes here */}
      </Routes>
    </Router>
  );
}

export default App;
