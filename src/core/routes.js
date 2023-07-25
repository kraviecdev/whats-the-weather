import {
  createHashRouter,
  createRoutesFromElements,
  Navigate,
  Route,
} from "react-router-dom";
import CurrentWeather from "../features/CurrentWeather";
import CurrentPositionWeather from "../features/CurrentPositionWeather";

export const toCurrentPositionWeather = "/location";
const toCurrentCityWeather = "/weather/:city";

export const router = createHashRouter(
  createRoutesFromElements(
    <>
      <Route path={toCurrentCityWeather} element={<CurrentWeather />} />
      <Route
        path={toCurrentPositionWeather}
        element={<CurrentPositionWeather />}
      />
      <Route path="/" element={<Navigate to={toCurrentPositionWeather} />} />
    </>
  )
);
