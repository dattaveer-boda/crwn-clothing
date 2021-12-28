import React from "react";

import { StyledCustomButton } from "./custom-button.styles";

const CustomButton = (props) => (
  <StyledCustomButton className="custom-button" {...props}>
    {props.children}
  </StyledCustomButton>
);

export default CustomButton;
