import {ADD_TO_CART} from '../actions/cart';
import CartItem from '../../models/cart';

const initialState = {
  items: [],
  sumTotal: 0,
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case ADD_TO_CART:
      const addedProduct = payload;
      const prodPrice = addedProduct.price;
      const prodTitle = addedProduct.title;

      if (state.items[addedProduct.id]) {
        const updatedCartItem = new CartItem(
          prodTitle,
          state.items[addedProduct.id].quantity + 1,
          prodPrice,
          state.items[addedProduct.id].sum + prodPrice
        );
        return {
          ...state,
          items: {...state.items, [addedProduct.id]: updatedCartItem},
          sumTotal: state.sumTotal + prodPrice,
        };
      } else {
        const newCartItem = new CartItem(prodTitle, 1, prodPrice, prodPrice);
        return {
          ...state,
          items: {...state.items, [addedProduct.id]: newCartItem},
          sumTotal: state.sumTotal + prodPrice,
        };
      }

    default:
      return state;
  }
};
