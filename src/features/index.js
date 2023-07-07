import Heading from "../components/Heading";
import Search from "../components/Search";
import Section from "../components/Section";
import Main from "../components/Main";

const WeatherApp = ({ children, current }) => {
  return (
    <Main>
      {current && (
        <>
          <Heading main={true} />
          <Search />
        </>
      )}
      <Section>{children}</Section>
    </Main>
  );
};

export default WeatherApp;
