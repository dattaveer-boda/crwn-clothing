import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = (props) => {
  // because want price to be cents
  const priceForStirps = props.price * 100;
  const publishableKey =
    "pk_test_51K9ogPSDjIi9pJoAzwRaEIDetAskg3q6GpPASHRU4QDhcuccEcsqLqd1E4qBW4Pk8fq6HXXQk1UHphAmtyQiXJXV00OX5IHK5O";

  const onToken = (token) => {
    console.log(token);
    alert("payment successful");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Datta Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/d0m.svg"
      description={`Your total is $${props.price}`}
      amount={priceForStirps}
      panelLabel="Pay Now"
      stripeKey={publishableKey}
      token={onToken}
    />
  );
};

export default StripeCheckoutButton;
