import styled, { css } from "styled-components";
import { ReactComponent as LogoIcon } from "../Heading/logo.svg";

export const HeadingWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;

  ${({ main }) =>
    main &&
    css`
      display: none;

      @media (min-height: 709px) {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        gap: 12px;

        h1 {
          font-size: 18px;
        }

        span {
          font-size: 24px;
        }

        svg {
          width: 50px;
          height: 38px;
        }
      }
    `}
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
`;

export const AdditionalTitleContent = styled.span`
  font-size: 32px;
`;

export const Logo = styled(LogoIcon)`
  width: 122px;
  fill: ${({ theme }) => theme.colors.mainFont};
`;
