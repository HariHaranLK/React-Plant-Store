import React from 'react';
import { useNavigate } from 'react-router-dom';
import Cart from '../components/Cart';
import { useSelector, useDispatch } from 'react-redux';

const CartPage = () => {
  const cartItems = useSelector((state) => state.cartItems);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const updateQuantity = (id, quantity) => {
    dispatch({ type: 'UPDATE_CART_ITEM', payload: { id, quantity } });
  };

  const removeItem = (id) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: id });
  };

  const handleCheckout = () => {
    if (window.confirm('Thanks for shopping with us! Click OK to return to the home page.')) {
      dispatch({ type: 'CLEAR_CART' });
      navigate('/');
    }
  };

  const totalCost = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div>
      <h1>Your Cart</h1>
      <Cart
        items={cartItems}
        updateQuantity={updateQuantity}
        removeItem={removeItem}
        totalCost={totalCost}
        totalItems={totalItems}
      />
      <button onClick={handleCheckout}>Checkout</button>
    </div>
  );
};

export default CartPage;
