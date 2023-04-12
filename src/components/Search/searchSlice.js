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
    toggleSearchToFavourite: (state, { payload: searchId }) => {
      const savedSearchIndex = state.doneSearches.findIndex(
        ({ id }) => id === searchId
      );
      state.doneSearches[savedSearchIndex].fav =
        !state.doneSearches[savedSearchIndex].fav;
    },
  },
});

export const { setDoneSearches, setSearch, toggleSearchToFavourite } =
  searchSlice.actions;

export const selectSearchValues = (state) => state.search.searchValues;
export const selectDoneSearches = (state) => state.search.doneSearches;
export const selectFavouriteSearches = (state) =>
  state.search.favouriteSearches;

export default searchSlice.reducer;
