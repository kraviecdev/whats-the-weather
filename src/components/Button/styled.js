import { ReactComponent as VectorUp } from "./up.svg";
import styled, { css } from "styled-components";

export const ButtonLink = styled.button`
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 12px 32px;
  border-radius: 16px;
  text-decoration: none;
  font-weight: 700;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.25);
  color: ${({ theme }) => theme.colors.mainFont};
  background: ${({ theme }) => theme.colors.secondaryColor};
  width: max-content;

  svg {
    display: none;
  }

  ${({ forecast }) =>
    forecast &&
    css`
      font-weight: 400;
      padding: 16px;
      border-radius: 0;
      width: 100vw;
      box-shadow: 0px -4px 20px 0px rgba(0, 0, 0, 0.25);
      background: linear-gradient(
        180deg,
        ${({ theme }) => theme.colors.secondaryColor} 0%,
        ${({ theme }) => theme.colors.mainColor} 100%
      );

      svg {
        display: block;
      }
    `}

  ${({ forecastBack }) =>
    forecastBack &&
    css`
      svg {
        display: block;
        transform: rotate(180deg);
      }
    `}
`;
export const UpIcon = styled(VectorUp)`
  fill: ${({ theme }) => theme.colors.mainFont};
`;
