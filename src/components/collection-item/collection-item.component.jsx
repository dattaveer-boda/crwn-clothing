import React from "react";
import { connect } from "react-redux";

import "./collection-item.styles.scss";
import CustomButton from "../custom-button/custom-button.component";
import { addCartItem } from "../../redux/cart/cart.actions";

const CollectionItem = ({ item, addItemToCart }) => {
  const { name, price, imageUrl } = item;
  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton inverted onClick={() => addItemToCart(item)}>
        Add to cart
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addItemToCart: (itemToAdd) => dispatch(addCartItem(itemToAdd)),
  };
};

export default connect(null, mapDispatchToProps)(CollectionItem);
