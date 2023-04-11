import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    searchValues: null,
    searches: [],
  },
  reducers: {
    setSearch: (state, { payload: cityInfo }) => {
      state.searchValues = cityInfo;
    },
    setSearches: (state, { payload: searches }) => {
      state.searches.push(searches);
    },
  },
});

export const { setSearches, setSearch } = searchSlice.actions;

export const selectSearchValues = (state) => state.search.searchValues;
export const selectSearches = (state) => state.search.searches;

export default searchSlice.reducer;
