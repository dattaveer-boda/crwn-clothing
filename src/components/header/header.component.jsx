import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { auth } from "../../firebase/firebase.utils";

import {
  HeaderContainer,
  OptionsContainer,
  LogoContainer,
  DivOption,
  LinkOption,
  H3Option,
} from "./header.styles";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { selectIsCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";

const Header = ({ currentUser, isCartHidden, history }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo className="logo" />
    </LogoContainer>
    <OptionsContainer>
      <H3Option>
        {currentUser ? "Hello " + currentUser.displayName + "!" : ""}
      </H3Option>
      <LinkOption to="/shop">SHOP</LinkOption>
      <LinkOption to="/shop">CONTACT</LinkOption>
      {currentUser ? (
        <DivOption onClick={() => auth.signOut()}>SIGN OUT</DivOption>
      ) : (
        <LinkOption to="/signin">SIGN IN</LinkOption>
      )}
      <CartIcon />
    </OptionsContainer>
    {isCartHidden ? null : <CartDropdown />}
  </HeaderContainer>
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

export default withRouter(connect(mapStateToProps)(Header));
