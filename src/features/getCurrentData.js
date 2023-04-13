import { fetchFromApi } from "../core/fetchFromApi";

export const getCurrentData = (coordinates) =>
  fetchFromApi({
    path: "/forecast.json",
    params: {
      q: coordinates,
      aqi: "no",
      alerts: "no",
      days: 2,
    },
  });
