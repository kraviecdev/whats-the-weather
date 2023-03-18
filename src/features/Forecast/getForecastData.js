import { fetchFromApi } from "../../core/fetchFromApi";

export const getForecastData = (coordinates) =>
  fetchFromApi({
    path: "/forecast.json",
    params: {
      q: coordinates,
      day: "1",
      aqi: "no",
      alerts: "no",
    },
  });
