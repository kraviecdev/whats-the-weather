import { useSwipeable } from "react-swipeable";
import { useDispatch, useSelector } from "react-redux";
import { selectWeatherData, setForecastSection } from "./weatherSlice";
import Main from "../components/Main";
import Heading from "../components/Heading";
import Search from "../components/Search";

const WeatherApp = ({ children }) => {
  const dispatch = useDispatch();
  const weatherData = useSelector(selectWeatherData);

  const swipeHandlers = useSwipeable({
    onSwipedUp: () => {
      if (weatherData.isForecastSection === false) {
        dispatch(setForecastSection());
      }
    },
    onSwipedDown: () => {
      if (weatherData.isForecastSection === true) {
        dispatch(setForecastSection());
      }
    },
  });

  return (
    <Main {...swipeHandlers}>
      <Heading main="true" />
      <Search />
      {children}
    </Main>
  );
};

export default WeatherApp;
