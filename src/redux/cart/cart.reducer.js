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
    case CartActionTypes.ADD_ITEM: {
      let updatedCartItems = addItemToCart(state.cartItems, action.payload);
      return {
        ...state,
        cartItems: updatedCartItems,
      };
    }
    case CartActionTypes.REMOVE_ITEM: {
      const updatedCartItems = state.cartItems.filter(
        (cartItem) => cartItem.id !== action.payload.id
      );
      return {
        ...state,
        cartItems: updatedCartItems,
      };
    }
    case CartActionTypes.CHANGE_QUANTITY: {
      let updatedCartItems = [];
      let finalItems = [];
      const itemToModify = JSON.parse(JSON.stringify(action.payload.item));
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === itemToModify.id
      );
      if (action.payload.action === "increment") {
        itemToModify.quantity++;
        updatedCartItems = state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.item.id
        );
        finalItems = [...updatedCartItems];
        finalItems.splice(itemIndex, 0, itemToModify);
      } else if (action.payload.action === "decrement") {
        if (itemToModify.quantity === 1) {
          updatedCartItems = state.cartItems.filter(
            (cartItem) => cartItem.id !== action.payload.item.id
          );
          finalItems = [...updatedCartItems];
        } else {
          itemToModify.quantity--;
          updatedCartItems = state.cartItems.filter(
            (cartItem) => cartItem.id !== action.payload.item.id
          );
          finalItems = [...updatedCartItems];
          finalItems.splice(itemIndex, 0, itemToModify);
        }
      }
      return {
        ...state,
        cartItems: finalItems,
      };
    }
    default:
      return state;
  }
};

export default CartReducer;
