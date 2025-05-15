import React from 'react';
import Header from '../Components/Header/Header';
import Navbar from '../Components/Navbar/Navbar';
import ProductSection from '../Components/ProductSection/ProductSection';
import Footer from '../Components/Footer/Footer';
import images from '../Components/Assets'; // central image import
import earringProducts from '../Products/EarringProducts'; 
import ringProducts from '../Products/RingProducts';
import braceletProducts from '../Products/BraceletProducts';
import necklaceProducts from '../Products/NecklaceProducts';
import ComboCard from '../Components/ComboCard/ComboCard'
// Import ringProducts here
import { useNavigate } from 'react-router-dom';
const Home = () => {
const allProducts = [
  ...ringProducts,
  ...earringProducts,
  ...necklaceProducts,
  ...braceletProducts,
].map(p => ({
  ...p,
  clickCount: parseInt(localStorage.getItem(`clickCount_${p.id}`)) || 0
}));


  // Sort by most recent date
  const newItems = allProducts
    .filter(p => p.dateAdded) // ensure date exists
    .sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded))
    .slice(0, 4); // pick top 4

  const specialPicks = allProducts
  .filter(p => p.clickCount !== undefined)
  .sort((a, b) => b.clickCount - a.clickCount)
  .slice(0, 4);


 

// 🎁 Combo Offer
const mostLiked = allProducts.reduce((max, p) => {
  return p.clickCount > max.clickCount ? p : max;
}, allProducts[0]);

const leastLiked = allProducts
  .filter(p => p.id !== mostLiked.id) // 🛡️ ensure different product
  .reduce((min, p) => {
    return p.clickCount < min.clickCount ? p : min;
  }, allProducts[0]);

  const comboOffers = [
    {
      name: 'Most Loved + Hidden Gem Combo',
      image1: mostLiked?.image || '',
      image2: leastLiked?.image || '',
    },
  ];
console.log("All Products:", allProducts);
console.log("Most Liked:", mostLiked);
console.log("Least Liked:", leastLiked);
  return (
    <>
      <Header />
      <Navbar />
      <ProductSection title="✨ New Items" products={newItems} />
<ProductSection title="🌸 Special Picks " products={specialPicks} />

<section className="product-section">
  <h2>🎁 Combo Offers</h2>
  <div className="products">
    {comboOffers.map((combo, index) => (
      <ComboCard
        key={index}
        name={combo.name}
        image1={combo.image1}
        image2={combo.image2}
      />
    ))}
  </div>
</section>

<Footer />
    </>
  );
};

export default Home;
