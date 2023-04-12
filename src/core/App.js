import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../themes/GlobalStyle";
import { day } from "../themes/theme";
import Heading from "../components/Heading";
import Main from "../components/Main";
import { RouterProvider } from "react-router";
import { router } from "./routes";
import Loading from "../components/StatusInfo/Loading";

function App() {
  const [loadingScreen, setLoadingScreen] = useState(false);

  useEffect(() => {
    setLoadingScreen(true);
    setTimeout(() => {
      setLoadingScreen(false);
    }, 1000);
  }, []);

  return (
    <ThemeProvider theme={day}>
      <GlobalStyle />
      {loadingScreen ? (
        <Loading />
      ) : (
        <Main>
          <Heading mainScreen="true" />
          <RouterProvider router={router} />
        </Main>
      )}
    </ThemeProvider>
  );
}

export default App;
