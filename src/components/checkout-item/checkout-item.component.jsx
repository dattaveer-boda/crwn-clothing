import React from "react";
import { connect } from "react-redux";

import {
  changeCartItemQuantity,
  removeCartItem,
} from "../../redux/cart/cart.actions";
import "./checkout-item.styles.scss";

const CheckoutItem = (props) => (
  <div className="checkout-item">
    <div className="image-container">
      <img src={props.item.imageUrl} alt="item" />
    </div>
    <span className="name">{props.item.name}</span>
    <span className="quantity">
      <div
        className="arrow"
        onClick={() => props.changeItemQuantity(props.item, "decrement")}
      >
        &#10094;
      </div>
      <span className="value">{props.item.quantity}</span>
      <div
        className="arrow"
        onClick={() => props.changeItemQuantity(props.item, "increment")}
      >
        &#10095;
      </div>
    </span>
    <span className="price">{props.item.price}</span>
    <span
      className="remove-button"
      onClick={() => props.removeCartItem(props.item)}
    >
      &#10007;
    </span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  changeItemQuantity: (item, action) =>
    dispatch(changeCartItemQuantity(item, action)),
  removeCartItem: (item) => dispatch(removeCartItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
