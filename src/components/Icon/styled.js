import styled, { css } from "styled-components";

export const IconWrapper = styled.img`
  width: 48px;
  height: 48px;

  ${({ hourly }) =>
    hourly &&
    css`
      width: 32px;
      height: 32px;
    `}
`;
