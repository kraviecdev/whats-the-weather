import {
  createHashRouter,
  createRoutesFromElements,
  Navigate,
  Route,
} from "react-router-dom";
import WeatherPage from "../features/WeatherPage";
import MainPage from "../features/MainPage";
import CitiesPage from "../features/CitiesPage";

export const toMainPage = "/weather";
const toWeatherPage = "/weather/:city";
const toCitiesPage = "/cities";

export const router = createHashRouter(
  createRoutesFromElements(
    <>
      <Route path={toMainPage} element={<MainPage />} />
      <Route path={toWeatherPage} element={<WeatherPage />} />
      <Route path={toCitiesPage} element={<CitiesPage />} />
      <Route path="/" element={<Navigate to={toMainPage} />} />
    </>
  )
);
