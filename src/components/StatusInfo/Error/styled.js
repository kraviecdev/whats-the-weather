import { ReactComponent as Error } from "./sad_cloud.svg";
import styled, { css } from "styled-components";
export const ErrorIcon = styled(Error)`
  fill: ${({ theme }) => theme.colors.secondaryFont};
  stroke: ${({ theme }) => theme.colors.secondaryFont};
`;

export const ErrorInfoWrapper = styled.div`
  display: grid;
  justify-items: center;
  grid-gap: 24px;
`;
export const ErrorInfo = styled.p`
  font-size: 16px;
  text-align: center;
  margin: 0;
  color: ${({ theme }) => theme.colors.mainFont};

  ${({ contrast }) =>
    contrast &&
    css`
      font-weight: 700;
      color: ${({ theme }) => theme.colors.errorColor};
    `}
`;
