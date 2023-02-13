import styled, { css } from "styled-components";

export const StatusWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.secondaryColor};
`;

export const StatusTitle = styled.h3`
  font-weight: 900;
  font-size: 36px;
  margin: 8px 0;
`;

export const StatusParagraph = styled.p`
  font-size: 24px;
  font-weight: 600;
  margin: 24px 0 60px;

  ${({ error }) =>
    error &&
    css`
      margin: 24px 0;
    `}
`;