import {
  SearchDropdownInfo,
  SearchDropdownButton,
  SearchDropdownWrapper,
  SearchIcon,
  SearchInput,
  SearchInputWrapper,
  SearchWrapper,
} from "./styled";
import { useState } from "react";
import { useQuery } from "react-query";
import { getSearchData } from "./getSearchData";
import useDebounce from "./useDebounce";
import { useDispatch, useSelector } from "react-redux";
import {
  selectIsDropdownVisible,
  setSearch,
  toggleDropdownVisibility,
} from "./searchSlice";

const Search = () => {
  const dispatch = useDispatch();
  const isDropdownVisible = useSelector(selectIsDropdownVisible);

  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 500);

  const searchCity = useQuery(["searchCity", debouncedQuery], () => {
    if (!!query) {
      dispatch(toggleDropdownVisibility());
      return getSearchData(debouncedQuery);
    }
  });

  const handleOnClick = (autocomplete) => {
    const searchValues = {
      id: autocomplete.id,
      lat: autocomplete.lat,
      lon: autocomplete.lon,
    };
    dispatch(setSearch(searchValues));
    setQuery("");
    dispatch(toggleDropdownVisibility());
  };

  return (
    <SearchWrapper>
      <SearchInputWrapper>
        <SearchInput
          onChange={({ target }) => setQuery(target.value)}
          placeholder="Search"
          value={query || ""}
        />
        <SearchIcon />
      </SearchInputWrapper>
      {searchCity.data && (
        <SearchDropdownWrapper visible={isDropdownVisible}>
          {searchCity.data.slice(0, 5).map((autocomplete) => (
            <SearchDropdownButton
              key={autocomplete.id}
              onClick={() => handleOnClick(autocomplete)}
            >
              <SearchDropdownInfo>
                {autocomplete.name}, {autocomplete.country}
              </SearchDropdownInfo>
            </SearchDropdownButton>
          ))}
        </SearchDropdownWrapper>
      )}
    </SearchWrapper>
  );
};

export default Search;
