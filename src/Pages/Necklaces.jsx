import React from 'react';
import Header from '../Components/Header/Header';
import Navbar from '../Components/Navbar/Navbar';
import ProductSection from '../Components/ProductSection/ProductSection';
import Footer from '../Components/Footer/Footer';
import images from '../Components/Assets';

const Necklaces = () => {
  const NecklaceProducts = [
    { name: 'Gold Ring 1', image: images.necklaces.necklace1 },
    { name: 'Gold Ring 2', image: images.necklaces.necklace2 },
    { name: 'Gold Ring 3', image: images.necklaces.necklace3 },
    { name: 'Gold Ring 4', image: images.necklaces.necklace4 },
    { name: 'Gold Ring 5', image: images.necklaces.necklace5 },
    { name: 'Gold Ring 6', image: images.necklaces.necklace6 },
  ];

  return (
    <>
      <Header />
      <Navbar />
      <ProductSection title="💍 All Rings" products={NecklaceProducts} />
      <Footer />
    </>
  );
};

export default Necklaces;
