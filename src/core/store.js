import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "../components/Search/searchSlice";
import currentReducer from "../features/Current/currentSlice";
import currentPositionReducer from "../features/CurrentPositionWeather/currentPositionSlice";

const store = configureStore({
  reducer: {
    search: searchReducer,
    current: currentReducer,
    currentPosition: currentPositionReducer,
  },
});

export default store;
