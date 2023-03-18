import { createSlice } from "@reduxjs/toolkit";

const forecastSlice = createSlice({
  name: "forecast",
  initialState: {
    city: {},
  },
  reducers: {
    setCity: (state, { payload: searchResult }) => {
      state.city = searchResult;
    },
  },
});

export const { setCity } = forecastSlice.actions;

export const selectCity = (state) => state.forecast.city;

export default forecastSlice.reducer;
