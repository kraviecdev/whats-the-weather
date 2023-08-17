import { createSlice } from "@reduxjs/toolkit";
import { getSearchesFromLocalStorage } from "../../core/saveInLocalStorage";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    searchValues: null,
    doneSearches: getSearchesFromLocalStorage(),
  },
  reducers: {
    setSearch: (state, { payload: cityInfo }) => {
      state.searchValues = cityInfo;
    },
    setDoneSearches: (state, { payload: search }) => {
      state.doneSearches.push(search);
    },
    setLocationSearch: (state, { payload: location }) => {
      state.doneSearches.unshift(location);
    },
    toggleFavourite: (state, { payload: searchId }) => {
      const searchIndex = state.doneSearches.findIndex(
        ({ id }) => id === searchId
      );

      state.doneSearches[searchIndex].favourite =
        !state.doneSearches[searchIndex].favourite;
    },
  },
});

export const {
  setDoneSearches,
  setLocationSearch,
  setSearch,
  toggleFavourite,
} = searchSlice.actions;

export const selectSearchValues = (state) => state.search.searchValues;
export const selectDoneSearches = (state) => state.search.doneSearches;

export default searchSlice.reducer;
