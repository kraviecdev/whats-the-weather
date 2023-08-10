import { fetchFromApi } from "../core/fetchFromApi";

export const getWeatherData = (coordinates, days) =>
  fetchFromApi({
    path: "/forecast.json",
    params: {
      q: coordinates,
      days: days,
    },
  });
