// import React from 'react';
// import { useDispatch } from 'react-redux';
// import { addToCart } from './actions';

// const AddToCartButton = ({ item }) => {
//   const dispatch = useDispatch();

//   const handleAddToCart = () => {
//     dispatch(addToCart(item));
//   };

//   return (
//     <button onClick={handleAddToCart}>Add to Cart</button>
//   );
// };

// export default AddToCartButton;







import React from 'react';

const AddToCartButton = ({ onAddToCart }) => {
  return (
    <button onClick={onAddToCart}>Add to Cart</button>
  );
};

export default AddToCartButton;








