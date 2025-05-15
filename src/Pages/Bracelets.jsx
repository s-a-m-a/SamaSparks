import React from 'react';
import Header from '../Components/Header/Header';
import Navbar from '../Components/Navbar/Navbar';
import ProductSection from '../Components/ProductSection/ProductSection';
import Footer from '../Components/Footer/Footer';
import braceletProducts from '../Products/BraceletProducts'; // Import ringProducts here
import { useNavigate } from 'react-router-dom';

const Bracelets = () => {
  const navigate = useNavigate();

  const handleRingClick = (bracelet) => {
    navigate(`/product/${bracelet.id}`); // ✅ redirect to product detail page
  };

  return (
    <>
      <Header />
      <Navbar />
      <ProductSection
        title="💍 All Rings"
        products={braceletProducts} // Pass the imported data here
        onProductClick={handleRingClick} // ✅ pass the function
      />
      <Footer />
    </>
  );
};

export default Bracelets;


