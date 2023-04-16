import styled, { css } from "styled-components";
import { ReactComponent as LogoIcon } from "../Heading/logo.svg";

export const HeadingWrapper = styled.div`
  display: none;

  @media (min-height: 709px) {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;

    ${({ mainscreen }) =>
      mainscreen &&
      css`
        flex-direction: row;
        justify-content: space-between;
        gap: 12px;
      `}
  }
`;
export const Title = styled.h1`
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.mainFont};
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  font-weight: 900;
  font-size: 24px;

  ${({ mainscreen }) =>
    mainscreen &&
    css`
      font-size: 18px;
    `}
`;

export const AdditionalTitleContent = styled.span`
  font-size: 32px;

  ${({ mainscreen }) =>
    mainscreen &&
    css`
      font-size: 24px;
    `}
`;

export const Logo = styled(LogoIcon)`
  width: 122px;
  fill: ${({ theme }) => theme.colors.mainFont};

  ${({ mainscreen }) =>
    mainscreen &&
    css`
      width: 50px;
      height: 38px;
    `}
`;
