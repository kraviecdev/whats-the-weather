import {
  createHashRouter,
  createRoutesFromElements,
  Navigate,
  Route,
} from "react-router-dom";
import CurrentWeather from "../features/CurrentWeather";
import CurrentPositionWeather from "../features/CurrentPositionWeather";
import TwoWeeksForecast from "../features/TwoWeeksForecast";

export const toCurrentPositionWeather = "/weather";
const toCurrentCityWeather = "/weather/:city";
const toTwoWeeksForecast = "/forecast/:city";

export const router = createHashRouter(
  createRoutesFromElements(
    <>
      <Route path={toCurrentCityWeather} element={<CurrentWeather />} />
      <Route
        path={toCurrentPositionWeather}
        element={<CurrentPositionWeather />}
      />
      <Route path={toTwoWeeksForecast} element={<TwoWeeksForecast />} />
      <Route path="/" element={<Navigate to={toCurrentPositionWeather} />} />
    </>
  )
);
