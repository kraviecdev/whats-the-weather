import { createSlice } from "@reduxjs/toolkit";

const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    geoAgreement: null,
    geoCoordinates: null,
    weatherData: null,
    hourlyWeather: [],
    forecastData: [],
  },
  reducers: {
    setGeoAgreement: (state, { payload: permission }) => {
      state.geoAgreement = permission;
    },
    setGeoCoordinates: (state, { payload: coordinates }) => {
      state.geoCoordinates = coordinates;
    },
    setWeatherData: (state, { payload: apiData }) => {
      state.weatherData = apiData;

      const {
        forecast: {
          forecastday: [firstDay, secondDay, thirdDay],
        },
      } = apiData;

      const hourlyData = [
        ...firstDay.hour,
        ...secondDay.hour,
        ...thirdDay.hour,
      ];

      state.hourlyWeather = hourlyData;

      apiData.forecast.forecastday.forEach((day) => {
        day.isAdditionalContentClosed = true;
      });

      state.forecastData = apiData.forecast.forecastday;
    },
    setAdditionalContentStatus: (state, { payload: index }) => {
      state.forecastData[index].isAdditionalContentClosed =
        !state.forecastData[index].isAdditionalContentClosed;
    },
  },
});

export const {
  setGeoAgreement,
  setGeoCoordinates,
  setWeatherData,
  setAdditionalContentStatus,
} = weatherSlice.actions;

export const selectGeoAgreement = (state) => state.weather.geoAgreement;
export const selectGeoCoordinates = (state) => state.weather.geoCoordinates;
export const selectWeatherData = (state) => state.weather.weatherData;
export const selectHourlyWeatherData = (state) => state.weather.hourlyWeather;
export const selectForecastData = (state) => state.weather.forecastData;

export default weatherSlice.reducer;
