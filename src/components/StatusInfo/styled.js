import styled, { css } from "styled-components";

export const StatusWrapper = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  color: ${({ theme }) => theme.colors.secondaryFont};
`;

export const StatusHeader = styled.h3`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 6px 0;
  gap: 8px;
  color: ${({ theme }) => theme.colors.mainFont};
`;
export const StatusInfoWrapper = styled.div`
  cursor: pointer;
  position: fixed;
  bottom: 0;
  max-width: 1024px;
  width: 100%;
  padding: 16px;
  border-radius: 16px 16px;
  background: linear-gradient(
    180deg,
    ${({ theme }) => theme.colors.secondaryColor} 0%,
    ${({ theme }) => theme.colors.mainColor} 100%
  );
  display: grid;
  justify-items: center;
  grid-gap: 12px;
  transition: 0.7s ease-in-out;

  ${({ hidden }) =>
    hidden &&
    css`
      transform: translateY(calc(100% - 60px));

      ${({ isClicked }) =>
        isClicked &&
        css`
          transform: translateY(0);
          svg {
            transform: rotate(180deg);
          }
        `}
    `}
`;
export const StatusInfo = styled.p`
  font-size: 16px;
  margin: 0;
  line-height: normal;
  text-align: center;
  color: ${({ theme }) => theme.colors.mainFont};

  ${({ contrast }) =>
    contrast &&
    css`
      font-weight: 700;
      color: ${({ theme }) => theme.colors.errorColor};
    `}
`;
