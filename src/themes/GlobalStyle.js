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
    height: 100dvh;

    /* ===== Scrollbar CSS ===== */
    /* Firefox */
    * {
      scrollbar-width: thin;
      scrollbar-color: ${({ theme }) => theme.colors.mainFont} 
      ${({ theme }) => theme.colors.mainColor};
    }

    /* Chrome, Edge, and Safari */
    *::-webkit-scrollbar {
      width: 6px;
      height: 6px;
    }

    *::-webkit-scrollbar-track {
      background: transparent;
    }

    *::-webkit-scrollbar-thumb {
      background-clip: padding-box;
      background-color: ${({ theme }) => theme.colors.mainFont};
      border-radius: 10px;
    }
  }
`;
