import React from 'react';
import Header from '../Components/Header/Header';
import Navbar from '../Components/Navbar/Navbar';
import ProductSection from '../Components/ProductSection/ProductSection';
import Footer from '../Components/Footer/Footer';
import ringProducts from '../Products/RingProducts'; // Import ringProducts here
import { useNavigate } from 'react-router-dom';

const Rings = () => {
  const navigate = useNavigate();

  const handleRingClick = (ring) => {
    navigate(`/product/${ring.id}`); // ✅ redirect to product detail page
  };

  return (
    <>
      <Header />
      <Navbar />
      <ProductSection
        title="💍 All Rings"
        products={ringProducts} // Pass the imported data here
        onProductClick={handleRingClick} // ✅ pass the function
      />
      <Footer />
    </>
  );
};

export default Rings;
