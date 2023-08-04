import {
  LocationIcon,
  SliderButton,
  SliderWrapper,
  StyledLink,
} from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { selectDoneSearches, setSearch } from "../../Search/searchSlice";
import { clearState, selectGeoAgreement } from "../../../features/weatherSlice";

const Slider = () => {
  const doneSearches = useSelector(selectDoneSearches);
  const geoAgreement = useSelector(selectGeoAgreement);
  const dispatch = useDispatch();

  const handleSearchOnClick = (savedSearch) => {
    dispatch(clearState());
    dispatch(setSearch(savedSearch));
  };

  const searchesWithLocation =
    geoAgreement === true ? doneSearches.slice(1) : doneSearches;

  return (
    <SliderWrapper>
      {geoAgreement && (
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
