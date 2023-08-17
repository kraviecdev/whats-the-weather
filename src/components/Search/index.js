import { useState } from "react";
import { useQuery } from "react-query";
import { getSearchData } from "./getSearchData";
import useDebounce from "./useDebounce";
import { useDispatch, useSelector } from "react-redux";
import { selectDoneSearches, setDoneSearches, setSearch } from "./searchSlice";
import { clearState } from "../../features/weatherSlice";
import {
  SearchDropdownInfo,
  SearchNavigationButton,
  SearchDropdownWrapper,
  SearchIcon,
  SearchInput,
  SearchInputWrapper,
  SearchWrapper,
  TilesIcon,
} from "./styled";
import Section from "../Section";

const Search = () => {
  const dispatch = useDispatch();
  const doneSearches = useSelector(selectDoneSearches);

  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 500);

  const { data } = useQuery(["searchCity", debouncedQuery], () => {
    if (!!query) {
      return getSearchData(debouncedQuery);
    }
  });

  const handleOnClick = (autocomplete) => {
    const search = doneSearches.find(({ id }) => id === autocomplete.id);
    if (!!search) {
      dispatch(clearState());
      dispatch(setSearch(search));
      setQuery("");
    } else {
      const searchValues = {
        id: autocomplete.id,
        name: autocomplete.name,
        lat: autocomplete.lat,
        lon: autocomplete.lon,
        favourite: false,
      };

      dispatch(clearState());
      dispatch(setSearch(searchValues));
      dispatch(setDoneSearches(searchValues));
      setQuery("");
    }
  };

  return (
    <Section searchSection="true">
      <SearchWrapper>
        <SearchInputWrapper visible={!!debouncedQuery}>
          <SearchInput
            pattern="^[A-Za-z\s]+$"
            onChange={({ target }) => setQuery(target.value)}
            placeholder="Search for weather forecast"
            value={query || ""}
          />
          <SearchIcon />
        </SearchInputWrapper>
        {data &&
          (data.length === 0 ? (
            <SearchDropdownWrapper>
              <SearchDropdownInfo invalid>
                Sorry, we can't find city for this value.
              </SearchDropdownInfo>
            </SearchDropdownWrapper>
          ) : (
            <SearchDropdownWrapper>
              {data.slice(0, 5).map((autocomplete) => (
                <SearchNavigationButton
                  to={`/weather/${autocomplete.name}`}
                  key={autocomplete.id}
                  onClick={() => handleOnClick(autocomplete)}
                >
                  <SearchDropdownInfo>
                    {autocomplete.name}, {autocomplete.country}
                  </SearchDropdownInfo>
                </SearchNavigationButton>
              ))}
            </SearchDropdownWrapper>
          ))}
      </SearchWrapper>
      <SearchNavigationButton to={`/cities`} tiles="true">
        <TilesIcon />
      </SearchNavigationButton>
    </Section>
  );
};

export default Search;
