import {
  createHashRouter,
  createRoutesFromElements,
  Navigate,
  Route,
} from "react-router-dom";
import Current from "../features/Current";
import FirstScreen from "../features/FirstScreen";

export const toFirstScreen = "/weather";
const toCurrentCityWeather = "/weather/:city";

export const router = createHashRouter(
  createRoutesFromElements(
    <>
      <Route path={toFirstScreen} element={<FirstScreen />} />
      <Route path={toCurrentCityWeather} element={<Current />} />
      <Route path="/" element={<Navigate to={toFirstScreen} />} />
    </>
  )
);
