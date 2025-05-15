import React from 'react';
import './ComboCard.css'; // style separately

const ComboCard = ({ name, image1, image2 }) => {
  return (
    <div className="combo-card">
      <div className="combo-images">
        <img src={image1} alt="Most Liked" />
        <img src={image2} alt="Hidden Gem" />
      </div>
      <p className="combo-name">{name}</p>
    </div>
  );
};

export default ComboCard;
