import { createSlice } from "@reduxjs/toolkit";

const currentSlice = createSlice({
  name: "current",
  initialState: {
    cityWeather: null,
    hourlyWeather: [],
  },
  reducers: {
    setCityWeather: (state, { payload: city }) => {
      state.cityWeather = city;
    },
    setHourlyWeather: (state, { payload: { hourly, index } }) => {
      state.hourlyWeather = hourly.slice(index, index + 5);
    },
  },
});

export const { setCityWeather, setHourlyWeather } = currentSlice.actions;

export const selectCityWeather = (state) => state.current.cityWeather;
export const selectHourlyWeather = (state) => state.current.hourlyWeather;

export default currentSlice.reducer;
