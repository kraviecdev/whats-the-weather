import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "../components/Search/searchSlice";
import currentReducer from "../features/Current/currentSlice";
import forecastReducer from "../features/Forecast/forecastSlice";
import themeReducer from "../components/Header/ThemeSwitch/themeSlice";

const store = configureStore({
  reducer: {
    search: searchReducer,
    current: currentReducer,
    forecast: forecastReducer,
    theme: themeReducer,
  },
});

export default store;
