import { createSlice } from "@reduxjs/toolkit";

const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    applicationStatus: "loading",
    geoAgreement: null,
    geoCoordinates: null,
    weatherData: null,
    citiesData: [],
  },
  reducers: {
    setApplicationStatus: (state, { payload: status }) => {
      state.applicationStatus = status;
    },
    clearState: (state) => {
      state.applicationStatus = "loading";
      state.geoCoordinates = null;
      state.weatherData = null;
    },
    setGeoAgreement: (state, { payload: permission }) => {
      state.geoAgreement = permission;
    },
    setGeoCoordinates: (state, { payload: coordinates }) => {
      state.geoCoordinates = coordinates;
    },
    setWeatherData: (state, { payload: apiData }) => {
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

      const forecastData = [
        { ...firstDay, isContentHidden: true },
        { ...secondDay, isContentHidden: true },
        { ...thirdDay, isContentHidden: true },
      ];

      state.weatherData = {
        location: apiData.location,
        current: apiData.current,
        hourlyWeather: hourlyData,
        forecastData: forecastData,
        isForecastSection: false,
      };
    },
    setCitiesData: (state, { payload: cityData }) => {
      state.citiesData.push(cityData);
    },
    setForecastSection: (state) => {
      state.weatherData.isForecastSection =
        !state.weatherData.isForecastSection;
    },
    setContentHidden: (state, { payload: index }) => {
      state.weatherData.forecastData[index].isContentHidden =
        !state.weatherData.forecastData[index].isContentHidden;
    },
  },
});

export const {
  setApplicationStatus,
  clearState,
  setGeoAgreement,
  setGeoCoordinates,
  setWeatherData,
  setCitiesData,
  setForecastSection,
  setContentHidden,
} = weatherSlice.actions;

export const selectApplicationStatus = (state) =>
  state.weather.applicationStatus;
export const selectGeoAgreement = (state) => state.weather.geoAgreement;
export const selectGeoCoordinates = (state) => state.weather.geoCoordinates;
export const selectWeatherData = (state) => state.weather.weatherData;
export const selectCitiesData = (state) => state.weather.citiesData;

export default weatherSlice.reducer;
