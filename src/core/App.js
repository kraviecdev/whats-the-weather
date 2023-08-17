import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../themes/GlobalStyle";
import { day } from "../themes/theme";
import { RouterProvider } from "react-router";
import { router } from "./routes";
import Loading from "../components/StatusInfo/Loading";
import { setGeoAgreement, setGeoCoordinates } from "../features/weatherSlice";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const [loadingScreen, setLoadingScreen] = useState(false);

  useEffect(() => {
    setLoadingScreen(true);

    setTimeout(() => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          dispatch(setGeoAgreement(true));
          dispatch(
            setGeoCoordinates({
              lat: position.coords.latitude,
              lon: position.coords.longitude,
            })
          );
          setLoadingScreen(false);
        },
        () => {
          dispatch(setGeoAgreement(false));
          setLoadingScreen(false);
        }
      );
    }, 1000);
    // eslint-disable-next-line
  }, []);

  return (
    <ThemeProvider theme={day}>
      <GlobalStyle />
      {loadingScreen ? (
        <Loading start="true" />
      ) : (
        <RouterProvider router={router} />
      )}
    </ThemeProvider>
  );
}

export default App;
