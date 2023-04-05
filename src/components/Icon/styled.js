import styled, { css } from "styled-components";

export const Icon = styled()`
  width: 48px;

  ${({ hourly }) =>
    hourly &&
    css`
      width: 32px;
    `}
`;
