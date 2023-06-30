import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "../components/Search/searchSlice";
import weatherReducer from "../features/weatherSlice";

const store = configureStore({
  reducer: {
    search: searchReducer,
    weather: weatherReducer,
  },
});

export default store;
