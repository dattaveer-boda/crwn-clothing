import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { auth } from "../../firebase/firebase.utils";

import "./header.styles.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { selectIsCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";

const Header = ({ currentUser, isCartHidden }) => (
  <div className="header">
    <Link to="/" className="logo-container">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <h3 className="option">
        {currentUser ? "Hello " + currentUser.displayName + "!" : ""}
      </h3>
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/shop">
        CONTACT
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      )}
      <CartIcon />
    </div>
    {isCartHidden ? null : <CartDropdown />}
  </div>
);

/*
const mapStateToProps = (state) => {
  return {
    currentUser: selectCurrentUser(state), // state.user.currentUser,
    isCartHidden: selectIsCartHidden(state), // state.cart.isCartHidden,
  };
};
*/

// The above and below are similar, instead of passing state for multiple objects
// using createStructuredSelector will do pass state internally for us
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  isCartHidden: selectIsCartHidden,
});

export default connect(mapStateToProps)(Header);
