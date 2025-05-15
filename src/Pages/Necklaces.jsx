import React from 'react';
import Header from '../Components/Header/Header';
import Navbar from '../Components/Navbar/Navbar';
import ProductSection from '../Components/ProductSection/ProductSection';
import Footer from '../Components/Footer/Footer';
import necklaceProducts from '../Products/NecklaceProducts'; // Import ringProducts here
import { useNavigate } from 'react-router-dom';

const Necklaces = () => {
  const navigate = useNavigate();

  const handleRingClick = (necklace) => {
    navigate(`/product/${necklace.id}`); // ✅ redirect to product detail page
  };

  return (
    <>
      <Header />
      <Navbar />
      <ProductSection
        title="💍 All Rings"
        products={necklaceProducts} // Pass the imported data here
        onProductClick={handleRingClick} // ✅ pass the function
      />
      <Footer />
    </>
  );
};

export default Necklaces;


