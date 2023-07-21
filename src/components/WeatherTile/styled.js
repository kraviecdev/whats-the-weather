import styled, { css } from "styled-components";

export const MainWrapper = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: flex-start;
  width: 100%;
  color: ${({ theme }) => theme.colors.mainFont};
`;
export const Info = styled.p`
  font-size: 14px;
  font-weight: 400;
  margin: 0;

  ${({ bold }) =>
    bold &&
    css`
      font-weight: 900;
    `}

  ${({ larger }) =>
    larger &&
    css`
      font-size: 16px;
      font-weight: 600;
    `}

  ${({ medium }) =>
    medium &&
    css`
      font-size: 24px;
      font-weight: 700;
    `}

  ${({ biggestCenter }) =>
    biggestCenter &&
    css`
      text-align: center;
      font-size: 80px;
      font-weight: 700;
    `}
`;
