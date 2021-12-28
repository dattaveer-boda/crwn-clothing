import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

// below is kind of css mixin
// For, div.option and Link.option
const OptionStyles = css`
  padding: 10px 15px;
  cursor: pointer;
`;

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const LinkOption = styled(Link)`
  ${OptionStyles}
`;

export const DivOption = styled.div`
  ${OptionStyles}
`;

export const H3Option = styled.h3`
  ${OptionStyles}
`;
