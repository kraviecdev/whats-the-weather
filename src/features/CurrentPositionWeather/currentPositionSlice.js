import { createSlice } from "@reduxjs/toolkit";

const currentPositionSlice = createSlice({
  name: "currenPosition",
  initialState: {
    coordinates: null,
    currentPositionWeather: null,
  },
  reducers: {
    setCurrentPositionCoordinates: (state, { payload: coordinates }) => {
      state.coordinates = coordinates;
    },
    setCurrentPositionWeather: (state, { payload: data }) => {
      state.currentPositionWeather = data;
    },
    setCurrentPositionHourlyWeather: (
      state,
      { payload: { hourly, index } }
    ) => {
      state.hourlyWeather = hourly.slice(index);
    },
  },
});

export const { setCurrentPositionCoordinates, setCurrentPositionWeather } =
  currentPositionSlice.actions;

export const selectCurrentPositionCoordinates = (state) =>
  state.currentPosition.coordinates;
export const selectCurrentPositionWeather = (state) =>
  state.currentPosition.currentPositionWeather;

export default currentPositionSlice.reducer;
