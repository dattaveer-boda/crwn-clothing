// A library for creating memoized "selector" functions. Commonly used with Redux,
// but usable with any plain JS immutable data as well.

// Selectors can compute derived data, allowing Redux to store the minimal possible state.
// Selectors are efficient. A selector is not recomputed unless one of its arguments changes.
// Selectors are composable. They can be used as input to other selectors.

import { createSelector } from "reselect";

// using 'reselect' library for memorizing the specific state
// because state change in one object causes of other state object prop dependencies to rerender
// even for sign-in, the the cartItems in mapStateToProps re-evaluates and re-renders
const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectIsCartHidden = createSelector(
  [selectCart],
  (cart) => cart.isCartHidden
);

export const selectCartItemCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (totalCount, cartItem) => totalCount + cartItem.quantity,
      0
    )
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (total, cartItem) => total + cartItem.quantity * cartItem.price,
    0
  )
);
