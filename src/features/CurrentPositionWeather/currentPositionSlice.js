import { createSlice } from "@reduxjs/toolkit";

const currentPositionSlice = createSlice({
  name: "currenPosition",
  initialState: {
    isDisallowed: false,
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
    setDisallowed: (state) => {
      state.isDisallowed = true;
    },
  },
});

export const {
  setCurrentPositionCoordinates,
  setCurrentPositionWeather,
  setDisallowed,
} = currentPositionSlice.actions;

export const selectCurrentPositionCoordinates = (state) =>
  state.currentPosition.coordinates;
export const selectCurrentPositionWeather = (state) =>
  state.currentPosition.currentPositionWeather;
export const selectDisallowed = (state) => state.currentPosition.isDisallowed;

export default currentPositionSlice.reducer;
