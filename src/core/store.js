import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "../components/Search/searchSlice";
import currentReducer from "../features/Current/currentSlice";

const store = configureStore({
  reducer: {
    search: searchReducer,
    current: currentReducer,
  },
});

export default store;
