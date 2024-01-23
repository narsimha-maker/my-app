import { createStore } from 'redux';

const initialState = {
  cart: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    // Add more cases for other actions if needed

    default:
      return state;
  }
};

const store = createStore(cartReducer);

export default store;