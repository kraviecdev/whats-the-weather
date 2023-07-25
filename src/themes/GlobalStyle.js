import { createGlobalStyle } from "styled-components";
import normalize from "styled-normalize";

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  body {
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 0.001em;
    word-wrap: anywhere;
    color: ${({ theme }) => theme.colors.mainFont};
    background: ${({ theme }) => theme.colors.mainColor};
    box-sizing: border-box;
    overflow: auto;
  }

  *, ::after, ::before {
    box-sizing: inherit;
  }
  
  #root {
    overflow: hidden;
    height: 100vh;
  }
`;
