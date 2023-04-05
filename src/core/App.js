import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../themes/GlobalStyle";
import { day } from "../themes/theme";
import Search from "../components/Search";
import Heading from "../components/Heading";
import Main from "../components/Main";
import { RouterProvider } from "react-router";
import { router } from "./routes";

function App() {
  return (
    <ThemeProvider theme={day}>
      <GlobalStyle />
      <Main>
        <Heading mainScreen="true" />
        <Search />
        <RouterProvider router={router} />
      </Main>
    </ThemeProvider>
  );
}

export default App;
