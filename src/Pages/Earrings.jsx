import React from 'react';
import Header from '../Components/Header/Header';
import Navbar from '../Components/Navbar/Navbar';
import ProductSection from '../Components/ProductSection/ProductSection';
import Footer from '../Components/Footer/Footer';
import images from '../Components/Assets';

const Earrings = () => {
  const EarringProducts = [
    { name: 'Gold Ring 1', image: images.earrings.earring1 },
    { name: 'Gold Ring 2', image: images.earrings.earring2 },
    { name: 'Gold Ring 3', image: images.earrings.earring3 },
    { name: 'Gold Ring 4', image: images.earrings.earring4 },
    { name: 'Gold Ring 5', image: images.earrings.earring5 },
    { name: 'Gold Ring 6', image: images.earrings.earring6 },
  ];

  return (
    <>
      <Header />
      <Navbar />
      <ProductSection title="💍 All Rings" products={EarringProducts} />
      <Footer />
    </>
  );
};

export default Earrings;
