import Header from "../../components/Header";
import DateComponent from "../../components/DateComponent";
import Main from "../../components/Main";
import Section from "../../components/Section";

const Forecast = () => {
  return (
    <>
      <Header />
      <Main>
        <DateComponent />
        <Section></Section>
      </Main>
    </>
  );
};

export default Forecast;
