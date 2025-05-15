import React from 'react';
import Header from '../Components/Header/Header';
import Navbar from '../Components/Navbar/Navbar';
import ProductSection from '../Components/ProductSection/ProductSection';
import Footer from '../Components/Footer/Footer';
import earringProducts from '../Products/EarringProducts'; // Import ringProducts here
import { useNavigate } from 'react-router-dom';

const Earrings = () => {
  const navigate = useNavigate();

  const handleRingClick = (earring) => {
    navigate(`/product/${earring.id}`); // ✅ redirect to product detail page
  };

  return (
    <>
      <Header />
      <Navbar />
      <ProductSection
        title="💍 All Earrings"
        products={earringProducts} // Pass the imported data here
        onProductClick={handleRingClick} // ✅ pass the function
      />
      <Footer />
    </>
  );
};

export default Earrings;
