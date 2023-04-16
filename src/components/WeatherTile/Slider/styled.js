import styled, { css } from "styled-components";
import { ReactComponent as Location } from "./location.svg";
import { Link, NavLink } from "react-router-dom";

export const SliderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export const SliderButton = styled(NavLink)`
  width: 8px;
  height: 8px;
  background: ${({ theme }) => theme.colors.secondaryFont};
  border-radius: 50%;

  &.active {
    background: ${({ theme }) => theme.colors.mainFont};
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const LocationIcon = styled(Location)`
  width: 18px;
  stroke: ${({ theme }) => theme.colors.secondaryFont};

  ${({ activelocation }) =>
    activelocation &&
    css`
      stroke: ${({ theme }) => theme.colors.mainFont};
    `}
`;
