import styled, { css } from "styled-components";

export const DateWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const DateInfo = styled.p`
  padding: 8px 4px;
  margin: 0;
  font-size: 16px;
  border-top: 1px solid ${({ theme }) => theme.colors.secondaryFont};

  ${({ additional }) =>
    additional &&
    css`
      font-weight: 400;
    `}
`;
