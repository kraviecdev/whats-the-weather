import { fetchFromApi } from "../core/fetchFromApi";

export const getCurrentData = (coordinates, days) =>
  fetchFromApi({
    path: "/forecast.json",
    params: {
      q: coordinates,
      days: days,
    },
  });
