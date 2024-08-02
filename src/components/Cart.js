import React from 'react';
import './Cart.css';

const Cart = ({ items, updateQuantity, removeItem, totalCost, totalItems }) => {
  return (
    <div className="cart">
      <div className="cart-summary">
        <p>Total Items: {totalItems}</p>
        <p>Total Cost: ${totalCost.toFixed(2)}</p>
      </div>
      <div className="cart-items">
        {items.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.thumbnail} alt={item.name} className="cart-item-image" />
            <div className="cart-item-details">
              <h3>{item.name}</h3>
              <p>${item.price}</p>
              <div className="cart-item-actions">
                <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, Math.max(item.quantity - 1, 1))}>-</button>
                <button onClick={() => removeItem(item.id)}>Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
