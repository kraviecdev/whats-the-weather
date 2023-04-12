import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";

export const SliderWrapper = styled.div`
  visibility: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 24px 0 6px;
  gap: 8px;

  ${({ multiple }) =>
    multiple &&
    css`
      visibility: visible;
    `}
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
