import {
  SearchDropdownInfo,
  SearchDropdownInfoButton,
  SearchDropdownInfoItem,
  SearchDropdownInfoList,
  SearchDropdownWrapper,
  SearchIcon,
  SearchInput,
  SearchInputWrapper,
  SearchWrapper,
} from "./styled";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { getSearchData } from "./getSearchData";
import useDebounce from "./useDebounce";
import { useDispatch, useSelector } from "react-redux";
import {
  selectIsSearchActive,
  setSearch,
  toggleSearchActive,
} from "./searchSlice";

const Search = () => {
  const dispatch = useDispatch();
  const isSearchActive = useSelector(selectIsSearchActive);

  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 500);

  const searchCity = useQuery(["searchCity", debouncedQuery], () => {
    if (!!query) {
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
    dispatch(toggleSearchActive());
  };

  useEffect(() => {
    if (!isSearchActive) {
      setQuery("");
    }
  }, [isSearchActive]);

  return (
    <SearchWrapper>
      <SearchInputWrapper>
        <SearchInput
          visible={isSearchActive}
          onChange={({ target }) => setQuery(target.value)}
          placeholder="Search by city name"
          value={query || ""}
        />
        <SearchIcon onClick={() => dispatch(toggleSearchActive())} />
      </SearchInputWrapper>
      {searchCity.data && (
        <SearchDropdownWrapper visibility={!isSearchActive}>
          <SearchDropdownInfoList>
            {searchCity.data.slice(0, 5).map((autocomplete) => (
              <SearchDropdownInfoItem key={autocomplete.id}>
                <SearchDropdownInfoButton
                  onClick={() => handleOnClick(autocomplete)}
                >
                  <SearchDropdownInfo cityName>
                    {autocomplete.name}, {autocomplete.country}
                  </SearchDropdownInfo>
                  <SearchDropdownInfo>
                    lat: {autocomplete.lat} lon: {autocomplete.lon}
                  </SearchDropdownInfo>
                </SearchDropdownInfoButton>
              </SearchDropdownInfoItem>
            ))}
          </SearchDropdownInfoList>
        </SearchDropdownWrapper>
      )}
    </SearchWrapper>
  );
};

export default Search;
