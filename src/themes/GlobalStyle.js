import { createGlobalStyle } from "styled-components";
import normalize from "styled-normalize";

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  body {
    font-family: 'Inter', sans-serif;
    word-wrap: anywhere;
    min-height: 100vh;
    box-sizing: border-box;
    color: ${({ theme }) => theme.colors.mainFont};
    background: ${({ theme }) => theme.colors.mainColor};
    overflow: auto;
  }

  *, ::after, ::before {
    box-sizing: inherit;
  }
  
  #root {
    padding: 20px;

    @media (max-width: ${({ theme }) => theme.breakpoints.laptop}px) {
      padding: 10px;
    }
  }
`;
