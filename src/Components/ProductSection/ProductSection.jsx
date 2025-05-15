import React from 'react';
import './ProductSection.css';
import { useNavigate } from 'react-router-dom';

const ProductSection = ({ title, products, isCombo = false }) => {
  const navigate = useNavigate();

  const handleClick = (product) => {
    if (product.id) {
      // 🔼 Update clickCount and save to localStorage
      const newCount = (product.clickCount || 0) + 1;
      localStorage.setItem(`clickCount_${product.id}`, newCount);
      product.clickCount = newCount;

      // 🧭 Navigate to product detail
      navigate(`/product/${product.id}`);
    } else {
      alert('Product ID not found');
    }
  };

  return (
    <section className="product-section">
      <h2>{title}</h2>
      <div className="products">
        {isCombo ? (
          products.map((combo, index) => (
            <div key={index} className="product-card combo-card">
              <img src={combo.image1} alt="Most Loved" />
              <img src={combo.image2} alt="Hidden Gem" />
              <p>{combo.name}</p>
            </div>
          ))
        ) : (
          products.map((product, index) => (
            <div
              key={index}
              className="product-card"
              onClick={() => handleClick(product)}
              style={{ cursor: 'pointer' }}
            >
              <img src={product.image} alt={product.name} />
              <p>{product.name}</p>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default ProductSection;
