import styled from "styled-components";

export const StatusWrapper = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  color: ${({ theme }) => theme.colors.secondaryFont};
`;
