// CartDisplay.js
import React from 'react';
import { useSelector } from 'react-redux';

const CartDisplay = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <div>
      <p>Cart Value: {cart.length}</p>
      {/* Display other cart details as needed */}
    </div>
  );
};

export default CartDisplay;
