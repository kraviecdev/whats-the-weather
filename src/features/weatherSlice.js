import { createSlice } from "@reduxjs/toolkit";

const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    applicationStatus: "loading",
    geoAgreement: null,
    geoCoordinates: null,
    weatherData: null,
    hourlyWeather: [],
    isForecastSection: false,
    forecastData: [],
  },
  reducers: {
    setApplicationStatus: (state, { payload: status }) => {
      state.applicationStatus = status;
    },
    clearState: (state) => {
      state.applicationStatus = "loading";
      state.geoCoordinates = null;
      state.weatherData = null;
      state.hourlyWeather = [];
      state.forecastData = [];
    },
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

      state.forecastData = apiData.forecast.forecastday;
    },
    setForecastSection: (state) => {
      state.isForecastSection = !state.isForecastSection;
    },
    addContentHidden: (state) => {
      state.forecastData.forEach((day) => {
        day.isContentHidden = true;
      });
    },
    setContentHidden: (state, { payload: index }) => {
      state.forecastData[index].isContentHidden =
        !state.forecastData[index].isContentHidden;
    },
  },
});

export const {
  setApplicationStatus,
  clearState,
  setGeoAgreement,
  setGeoCoordinates,
  setWeatherData,
  setForecastSection,
  addContentHidden,
  setContentHidden,
} = weatherSlice.actions;

export const selectApplicationStatus = (state) =>
  state.weather.applicationStatus;
export const selectGeoAgreement = (state) => state.weather.geoAgreement;
export const selectGeoCoordinates = (state) => state.weather.geoCoordinates;
export const selectWeatherData = (state) => state.weather.weatherData;
export const selectHourlyWeatherData = (state) => state.weather.hourlyWeather;
export const selectForecastData = (state) => state.weather.forecastData;
export const selectIsForecast = (state) => state.weather.isForecastSection;

export default weatherSlice.reducer;
