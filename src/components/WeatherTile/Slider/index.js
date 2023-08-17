import {
  LocationIcon,
  SliderButton,
  SliderWrapper,
  StyledLink,
} from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { selectDoneSearches, setSearch } from "../../Search/searchSlice";
import { clearState } from "../../../features/weatherSlice";

const Slider = () => {
  const doneSearches = useSelector(selectDoneSearches);
  const dispatch = useDispatch();

  const handleSearchOnClick = (savedSearch) => {
    dispatch(clearState());
    dispatch(setSearch(savedSearch));
  };

  const isSavedLocation = doneSearches.some(
    ({ location }) => location === true
  );

  const searchAddedToFavourite = doneSearches.filter(
    ({ favourite }) => favourite === true
  );

  const searchesWithLocation = isSavedLocation
    ? searchAddedToFavourite.slice(1)
    : searchAddedToFavourite;

  return (
    <SliderWrapper>
      {isSavedLocation && (
        <StyledLink
          currentlocation="true"
          to={`/weather/${doneSearches[0].name}`}
          onClick={() => handleSearchOnClick(doneSearches[0])}
        >
          <LocationIcon />
        </StyledLink>
      )}
      {searchesWithLocation &&
        searchesWithLocation.map((savedSearch) => (
          <SliderButton
            onClick={() => handleSearchOnClick(savedSearch)}
            to={`/weather/${savedSearch.name}`}
            key={savedSearch.id}
          />
        ))}
    </SliderWrapper>
  );
};

export default Slider;
