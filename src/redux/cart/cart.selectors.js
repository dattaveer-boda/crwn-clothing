import { createSelector } from "reselect";

// using 'reselect' library for memorizing the specific state
// because state change in one object causes of other state object prop dependencies to rerender
// even for sign in the the cart item count mapStateToProps re renders
const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartItemCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (totalCount, cartItem) => totalCount + cartItem.quantity,
      0
    )
);
