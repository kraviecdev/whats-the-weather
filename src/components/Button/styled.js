import { ReactComponent as VectorUp } from "./up.svg";
import styled, { css } from "styled-components";

export const ButtonLink = styled.button`
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 16px;
  border-radius: 0;
  font-weight: 400;
  width: 100vw;
  box-shadow: 0px -4px 20px 0px rgba(0, 0, 0, 0.25);
  color: ${({ theme }) => theme.colors.mainFont};
  background: linear-gradient(
    180deg,
    ${({ theme }) => theme.colors.secondaryColor} 0%,
    ${({ theme }) => theme.colors.mainColor} 100%
  );

  ${({ articleButton }) =>
    articleButton &&
    css`
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      box-shadow: none;
      border-radius: 0 0 16px 16px;
      background: linear-gradient(
        180deg,
        ${({ theme }) => theme.colors.mainColor}7F 0%,
        ${({ theme }) => theme.colors.secondaryColor} 100%
      );

      svg {
        transform: rotate(0);
      }
    `}

  ${({ iconDown }) =>
    iconDown &&
    css`
      svg {
        transform: rotate(180deg);
      }
    `}
`;
export const UpIcon = styled(VectorUp)`
  fill: ${({ theme }) => theme.colors.mainFont};
`;
