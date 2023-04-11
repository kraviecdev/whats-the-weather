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
import { selectSearches, setSearch, setSearches } from "./searchSlice";

const Search = () => {
  const dispatch = useDispatch();
  const savedSearches = useSelector(selectSearches);

  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 500);

  const searchCity = useQuery(["searchCity", debouncedQuery], () => {
    if (!!query) {
      return getSearchData(debouncedQuery);
    }
  });

  const handleOnClick = (autocomplete) => {
    if (
      savedSearches.some((savedSearch) => savedSearch.id === autocomplete.id)
    ) {
      alert("You already have this city in yor list");
      setQuery("");
    } else {
      const searchValues = {
        id: autocomplete.id,
        name: autocomplete.name,
        lat: autocomplete.lat,
        lon: autocomplete.lon,
        fav: false,
      };
      dispatch(setSearch(searchValues));
      dispatch(setSearches(searchValues));
      setQuery("");
    }
  };

  return (
    <SearchWrapper>
      <SearchInputWrapper visible={!!query}>
        <SearchInput
          onChange={({ target }) => setQuery(target.value)}
          placeholder="Search"
          value={query || ""}
        />
        <SearchIcon />
      </SearchInputWrapper>
      {searchCity.data && (
        <SearchDropdownWrapper visible={!!query}>
          {searchCity.data.slice(0, 5).map((autocomplete) => (
            <SearchDropdownButton
              to={`/weather/${autocomplete.name}`}
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
