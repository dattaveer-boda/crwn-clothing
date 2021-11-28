import CartActionTypes from "./cart.types";

export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
});

export const addCartItem = (cartItem) => ({
  type: CartActionTypes.ADD_ITEM,
  payload: cartItem,
});

export const removeCartItem = (item) => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload: item,
});

export const changeCartItemQuantity = (item, action) => ({
  type: CartActionTypes.CHANGE_QUANTITY,
  payload: { item, action },
});
