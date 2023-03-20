import styled from "styled-components";

const Main = styled.main`
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0.05em;
  max-width: 1024px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    padding: 10px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    padding: 10px 0;
  }
`;

export default Main;
