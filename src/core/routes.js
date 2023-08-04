import {
  createHashRouter,
  createRoutesFromElements,
  Navigate,
  Route,
} from "react-router-dom";
import CurrentWeather from "../features/CurrentWeather";
import MainPage from "../features/MainPage";

export const toMainPage = "/weather";
const toCurrentCityWeather = "/weather/:city";

export const router = createHashRouter(
  createRoutesFromElements(
    <>
      <Route path={toMainPage} element={<MainPage />} />
      <Route path={toCurrentCityWeather} element={<CurrentWeather />} />
      <Route path="/" element={<Navigate to={toMainPage} />} />
    </>
  )
);
