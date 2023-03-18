import {
  createHashRouter,
  createRoutesFromElements,
  Navigate,
  Route,
} from "react-router-dom";
import Current from "../features/Current";
import Forecast from "../features/Forecast";

export const toCurrentWeather = "/current";
export const toForecast = "/forecast";

export const router = createHashRouter(
  createRoutesFromElements(
    <>
      <Route path={toCurrentWeather} element={<Current />} />
      <Route path={toForecast} element={<Forecast />} />
      <Route path="/" element={<Navigate to={toCurrentWeather} />} />
    </>
  )
);
