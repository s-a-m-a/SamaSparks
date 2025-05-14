import React from 'react';
import './ProductSection.css';

const ProductSection = ({ title, price, products, onProductClick }) => {
  return (
    <section className="product-section">
      <h2>{title}</h2>
      <p>{price}</p>
      <div className="products">
        {products.map((product, index) => (
          <div 
            key={index} 
            className="product-card"
            onClick={() => onProductClick(product)} // Trigger the click event
          >
            <img src={product.image} alt={product.name} />
            <p>{product.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductSection;
