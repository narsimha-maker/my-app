import React from 'react';

const CartCounter = ({ cartCount }) => {
  return (
    <p>Items in Cart: {cartCount}</p>
  );
};

export default CartCounter;