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
import { selectDoneSearches, setDoneSearches, setSearch } from "./searchSlice";
import { Navigate } from "react-router-dom";

const Search = () => {
  const dispatch = useDispatch();
  const doneSearches = useSelector(selectDoneSearches);

  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 500);

  const searchCity = useQuery(["searchCity", debouncedQuery], () => {
    if (!!query) {
      return getSearchData(debouncedQuery);
    }
  });

  const handleOnClick = (autocomplete) => {
    if (
      doneSearches.some((savedSearch) => savedSearch.id === autocomplete.id)
    ) {
      const search = doneSearches.find(
        (savedSearch) => savedSearch.id === autocomplete.id
      );
      dispatch(setSearch(search));
      setQuery("");
      return <Navigate to={`/weather/${autocomplete.name}`} />;
    } else {
      const searchValues = {
        id: autocomplete.id,
        name: autocomplete.name,
        lat: autocomplete.lat,
        lon: autocomplete.lon,
        fav: false,
      };
      dispatch(setSearch(searchValues));
      dispatch(setDoneSearches(searchValues));
      setQuery("");
    }
  };

  return (
    <SearchWrapper>
      <SearchInputWrapper visible={!!searchCity.data}>
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
