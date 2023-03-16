import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    isSearchActive: false,
    searchValues: null,
  },
  reducers: {
    toggleSearchActive: (state) => {
      state.isSearchActive = !state.isSearchActive;
    },
    setSearch: (state, { payload: cityInfo }) => {
      state.searchValues = cityInfo;
    },
  },
});

export const { toggleSearchActive, setSearch } = searchSlice.actions;

export const selectSearchValues = (state) => state.search.searchValues;
export const selectIsSearchActive = (state) => state.search.isSearchActive;

export default searchSlice.reducer;
