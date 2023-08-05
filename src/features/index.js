import { useSwipeable } from "react-swipeable";
import { useDispatch, useSelector } from "react-redux";
import { selectIsForecast, setForecastSection } from "./weatherSlice";
import Main from "../components/Main";
import Heading from "../components/Heading";
import Search from "../components/Search";

const WeatherApp = ({ children, current }) => {
  const dispatch = useDispatch();
  const isForecast = useSelector(selectIsForecast);

  const swipeHandlers = useSwipeable({
    onSwipedUp: () => {
      if (isForecast === false) {
        dispatch(setForecastSection());
      }
    },
    onSwipedDown: () => {
      if (isForecast === true) {
        dispatch(setForecastSection());
      }
    },
  });

  return (
    <Main {...swipeHandlers}>
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
