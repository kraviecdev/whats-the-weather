import styled, { css } from "styled-components";

const Main = styled.main`
  max-width: 1024px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px 16px 0;

  ${({ forecast }) =>
    forecast &&
    css`
      padding: 0 16px;
    `}
`;

export default Main;
