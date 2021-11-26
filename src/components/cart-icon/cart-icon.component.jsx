import React from "react";
import { connect } from "react-redux";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemCount } from "../../redux/cart/cart.selectors";

import "./cart-icon.styles.scss";

const CartIcon = (props) => (
  <div className="cart-icon" onClick={() => props.toggleCartHidden()}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{props.cartItemsCount}</span>
  </div>
);

const mapStatetoProps = (state) => ({
  cartItemsCount: selectCartItemCount(state),
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(mapStatetoProps, mapDispatchToProps)(CartIcon);
