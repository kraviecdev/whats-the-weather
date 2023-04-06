import {
  createHashRouter,
  createRoutesFromElements,
  Navigate,
  Route,
} from "react-router-dom";
import Current from "../features/Current";

export const toCurrentWeather = "/current";

export const router = createHashRouter(
  createRoutesFromElements(
    <>
      <Route path={toCurrentWeather} element={<Current />} />
      <Route path="/" element={<Navigate to={toCurrentWeather} />} />
    </>
  )
);
