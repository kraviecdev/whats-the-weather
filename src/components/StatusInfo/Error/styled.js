import { ReactComponent as Error } from "./sad_cloud.svg";
import styled, { css } from "styled-components";
export const ErrorIcon = styled(Error)`
  fill: ${({ theme }) => theme.colors.secondaryFont};
  stroke: ${({ theme }) => theme.colors.secondaryFont};
  margin: 0 0 167px 0;
`;

export const ErrorInfoWrapper = styled.div`
  position: absolute;
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
  grid-gap: 8px;
`;
export const ErrorInfo = styled.p`
  font-size: 16px;
  text-align: center;
  color: ${({ theme }) => theme.colors.mainFont};

  ${({ contrast }) =>
    contrast &&
    css`
      font-weight: 700;
      color: ${({ theme }) => theme.colors.errorColor};
    `}
`;
