import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";

import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

import "./cart-dropdown.styles.scss";

const CartDropdown = (props) => {
  console.log(props);
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {props.cartItems.length ? (
          props.cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          props.history.push("/checkout");
          props.toggleCart();
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log("cartItems prop in mapStateToProps rendered");
  return {
    cartItems: selectCartItems(state),
  };
};

// if we didn't pass mapDispatchToProps, connect will pass 'dispatch' as prop to component
const mapDispatchToProps = (dispatch) => ({
  toggleCart: () => dispatch(toggleCartHidden()),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CartDropdown)
);
