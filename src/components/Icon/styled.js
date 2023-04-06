import styled, { css } from "styled-components";

export const IconWrapper = styled.svg`
  width: 48px;
  height: 48px;

  ${({ hourly }) =>
    hourly &&
    css`
      width: 32px;
      height: 48px;
    `}
`;
