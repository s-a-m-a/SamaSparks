import React from 'react';
import Header from '../Components/Header/Header';
import Navbar from '../Components/Navbar/Navbar';
import ProductSection from '../Components/ProductSection/ProductSection';
import Footer from '../Components/Footer/Footer';
import images from '../Components/Assets'; // central image import

const Home = () => {
  const newItems = [
    { name: 'Diamond Ring', image: images.rings.ring1 },
    { name: 'Diamond Earrings', image: images.earrings.earring1 },
    { name: 'Gold Necklace', image: images.necklaces.necklace1 },
    { name: 'Elegant ring', image: images.rings.ring2 },
  ];

  const specialPicks = [
    { name: 'Royal Ring', image: images.rings.ring3 },
    { name: 'Diamond Necklace', image: images.necklaces.necklace2 },
    { name: 'Diamond Earrings', image: images.earrings.earring2 },
    { name: 'Gold Ring', image: images.rings.ring4 },
  ];

  const comboOffers = [
    { name: 'Necklace + Earrings', image: images.rings.ring4 },
    { name: 'Ring Set', image: images.rings.ring4 },
    { name: 'Bracelet Pack', image: images.rings.ring4 },
    { name: 'Gold Combo', image: images.rings.ring4 },
  ];

  return (
    <>
      <Header />
      <Navbar />
      <ProductSection title="✨ New Items" products={newItems} />
      <ProductSection title="🌸 Special Picks " products={specialPicks} />
      <ProductSection title="🎁 Combo Offers" products={comboOffers} />
      <Footer />
    </>
  );
};

export default Home;
