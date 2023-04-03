import styled from "styled-components";
import { ReactComponent as LogoIcon } from "../Heading/logo.svg";

export const HeadingWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
`;
export const Title = styled.h1`
  font-weight: 900;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.secondaryFont};
  font-size: 24px;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    justify-content: center;
  }
`;

export const AdditionalTitleContent = styled.span`
  font-size: 32px;
`;

export const Logo = styled(LogoIcon)`
  width: 80px;
  fill: ${({ theme }) => theme.colors.secondaryFont};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    width: 122px;
  }
`;