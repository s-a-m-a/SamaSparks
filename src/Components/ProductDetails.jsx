import React from 'react';
import { useParams } from 'react-router-dom';
import ringProducts from '../Products/RingProducts'; // Import ring products
import earringProducts from '../Products/EarringProducts'; // Import earring products
import necklaceProducts from '../Products/NecklaceProducts';
import braceletProducts from '../Products/BraceletProducts';
import './ProductDetails.css';

const ProductDetails = () => {
  const { id } = useParams(); // Get the ID from the URL

  // Merge the two arrays into one
  const allProducts = [...ringProducts, ...earringProducts, ...necklaceProducts, ...braceletProducts,];

  // Find the product in the merged array
  const product = allProducts.find((product) => product.id === parseInt(id));

  // If no product is found
  if (!product) return <h2>Product Not Found</h2>;

  return (
    <div className="product-detail">
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>{product.price}</p>
    </div>
  );
};

export default ProductDetails;
