import { createGlobalStyle } from "styled-components";
import normalize from "styled-normalize";

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  body {
    font-family: 'Inter', sans-serif;
    word-wrap: anywhere;
    box-sizing: border-box;
    color: ${({ theme }) => theme.colors.mainFont};
    background: ${({ theme }) => theme.colors.mainColor};
    overflow: auto;
  }

  *, ::after, ::before {
    box-sizing: inherit;
  }
  
  #root {
    padding: 16px;
    height: 100vh;
  }
`;
