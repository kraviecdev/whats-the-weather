import Heading from "../components/Heading";
import Search from "../components/Search";
import Section from "../components/Section";
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
      <Section>{children}</Section>
    </Main>
  );
};

export default WeatherApp;
