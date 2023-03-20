import styled, { css } from "styled-components";

export const DateComponentWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
`;
export const DateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: max-content;
  gap: 12px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    margin: 0 0 0 10px;
  }
`;

export const DateTitle = styled.h1`
  font-size: 36px;
  font-weight: 900;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    font-size: 24px;
  }
`;

export const DateInfo = styled.p`
  padding: 0;
  margin: 0;
  font-size: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    font-size: 16px;
  }

  ${({ additional }) =>
    additional &&
    css`
      font-size: 16px;

      @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        font-size: 12px;
      }
    `}
`;
