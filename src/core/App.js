import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../themes/GlobalStyle";
import { day } from "../themes/theme";
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
      {loadingScreen ? <Loading /> : <RouterProvider router={router} />}
    </ThemeProvider>
  );
}

export default App;
