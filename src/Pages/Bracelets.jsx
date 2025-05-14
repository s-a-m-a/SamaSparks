import React from 'react';
import Header from '../Components/Header/Header';
import Navbar from '../Components/Navbar/Navbar';
import ProductSection from '../Components/ProductSection/ProductSection';
import Footer from '../Components/Footer/Footer';
import images from '../Components/Assets';

const Bracelets = () => {
  const BraceletProducts = [
    { name: 'Gold Ring 1', image: images.bracelets.bracelet1 },
    { name: 'Gold Ring 2', image: images.bracelets.bracelet2 },
    { name: 'Gold Ring 3', image: images.bracelets.bracelet3 },
    { name: 'Gold Ring 4', image: images.bracelets.bracelet4 },
    { name: 'Gold Ring 5', image: images.bracelets.bracelet5 },
    { name: 'Gold Ring 6', image: images.bracelets.bracelet6 },
  ];

  return (
    <>
      <Header />
      <Navbar />
      <ProductSection title="💍 All Rings" products={BraceletProducts} />
      <Footer />
    </>
  );
};

export default Bracelets;
