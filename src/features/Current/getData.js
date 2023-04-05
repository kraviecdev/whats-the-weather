import { fetchFromApi } from "../../core/fetchFromApi";

export const getData = (coordinates) =>
  fetchFromApi({
    path: "/forecast.json",
    params: {
      q: coordinates,
      aqi: "no",
      alerts: "no",
    },
  });
