import styled, { css } from "styled-components";

export const TempInfoSpecial = styled.span`
  font-size: 32px;
  vertical-align: super;

  ${({ smallerBold }) =>
    smallerBold &&
    css`
      font-size: 12px;
      font-weight: 700;
    `}
`;
