import React, { useState } from 'react';
import Header from '../Components/Header/Header';
import Navbar from '../Components/Navbar/Navbar';
import ProductSection from '../Components/ProductSection/ProductSection';
import Footer from '../Components/Footer/Footer';
import images from '../Components/Assets';

const Rings = () => {
  const [selectedRing, setSelectedRing] = useState(null);

  const ringProducts = [
    { 
      name: 'Gold Ring 1', 
      image: images.rings.ring1, 
      price: '$99.99', 
      description: 'A stunning gold ring with intricate design and a smooth finish.' 
    },
    { 
      name: 'Gold Ring 2', 
      image: images.rings.ring2, 
      price: '$120.99', 
      description: 'Elegant gold ring with a modern touch and sleek lines.' 
    },
    { 
      name: 'Gold Ring 3', 
      image: images.rings.ring3, 
      price: '$150.00', 
      description: 'A luxurious gold ring with a bold and statement-making design.' 
    },
    { 
      name: 'Gold Ring 4', 
      image: images.rings.ring4, 
      price: '$85.50', 
      description: 'A simple yet beautiful gold ring for everyday wear.' 
    },
    { 
      name: 'Gold Ring 5', 
      image: images.rings.ring5, 
      price: '$110.00', 
      description: 'Gold ring with a minimalist design perfect for casual wear.' 
    },
    { 
      name: 'Gold Ring 6', 
      image: images.rings.ring6, 
      price: '$135.75', 
      description: 'A timeless gold ring featuring a refined and delicate design.' 
    },
  ];

  // Function to handle click event on a ring card
  const handleRingClick = (ring) => {
    setSelectedRing(ring); // Set the selected ring's details
  };

  return (
    <>
      <Header />
      <Navbar />
      <ProductSection 
        title="💍 All Rings" 
        products={ringProducts} 
        onProductClick={handleRingClick} // Pass the function to ProductSection
      />
      
      {/* Display selected ring's details */}
      {selectedRing && (
        <div className="product-details">
          <h3>{selectedRing.name}</h3>
          <img src={selectedRing.image} alt={selectedRing.name} />
          <p>Price: {selectedRing.price}</p>
          <p>{selectedRing.description}</p>
        </div>
      )}
      
      <Footer />
    </>
  );
};

export default Rings;
