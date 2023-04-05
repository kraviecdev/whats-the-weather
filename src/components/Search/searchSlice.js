import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    searchValues: null,
    isDropdownVisible: false,
  },
  reducers: {
    setSearch: (state, { payload: cityInfo }) => {
      state.searchValues = cityInfo;
    },
    toggleDropdownVisibility: (state) => {
      state.isDropdownVisible = !state.isDropdownVisible;
    },
  },
});

export const { toggleDropdownVisibility, setSearch } = searchSlice.actions;

export const selectSearchValues = (state) => state.search.searchValues;
export const selectIsDropdownVisible = (state) =>
  state.search.isDropdownVisible;

export default searchSlice.reducer;
