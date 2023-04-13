import {
  createHashRouter,
  createRoutesFromElements,
  Navigate,
  Route,
} from "react-router-dom";
import Current from "../features/Current";
import CurrentPositionWeather from "../features/CurrentPositionWeather";

export const toCurrentPositionWeather = "/weather";
const toCurrentCityWeather = "/weather/:city";

export const router = createHashRouter(
  createRoutesFromElements(
    <>
      <Route path={toCurrentCityWeather} element={<Current />} />
      <Route
        path={toCurrentPositionWeather}
        element={<CurrentPositionWeather />}
      />
      <Route path="/" element={<Navigate to={toCurrentPositionWeather} />} />
    </>
  )
);
