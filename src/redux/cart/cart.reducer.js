import CartActionTypes from "./cart.types";
import { addItemToCart } from "./cart.utils";

const INITIAL_STATE = {
  isCartHidden: true,
  cartItems: [],
};

const CartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        isCartHidden: !state.isCartHidden,
      };
    case CartActionTypes.ADD_ITEM:
      let updatedCartItems = addItemToCart(state.cartItems, action.payload);
      return {
        ...state,
        cartItems: updatedCartItems,
      };
    default:
      return state;
  }
};

export default CartReducer;
