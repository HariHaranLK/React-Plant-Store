import React from 'react';
import { useDispatch } from 'react-redux';
import './CategoryGallery.css';

const CategoryGallery = ({ plants }) => {
  const dispatch = useDispatch();

  const addToCart = (plant) => {
    dispatch({ type: 'ADD_TO_CART', payload: plant });
  };

  return (
    <div className="category-gallery">
      {Object.keys(plants).map((category) => (
        <div key={category} className="category">
          <h2>{category}</h2>
          <div className="plants-container">
            {plants[category].map((plant) => (
              <div key={plant.id} className="plant-card">
                <img src={plant.thumbnail} alt={plant.name} className="plant-image" />
                <h3>{plant.name}</h3>
                <p>${plant.price}</p>
                <button onClick={() => addToCart(plant)}>Add</button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryGallery;
