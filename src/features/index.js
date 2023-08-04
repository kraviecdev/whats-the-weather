import Heading from "../components/Heading";
import Search from "../components/Search";
import Main from "../components/Main";
import { useLocation } from "react-router";

const WeatherApp = ({ children, current }) => {
  const location = useLocation();

  return (
    <Main forecast={location.pathname.split("/")[1] === "forecast"}>
      {current && (
        <>
          <Heading main="true" />
          <Search />
        </>
      )}
      {children}
    </Main>
  );
};

export default WeatherApp;
