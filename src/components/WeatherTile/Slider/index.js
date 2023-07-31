import {
  LocationIcon,
  SliderButton,
  SliderWrapper,
  StyledLink,
} from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { selectDoneSearches, setSearch } from "../../Search/searchSlice";
import { clearState, selectGeoAgreement } from "../../../features/weatherSlice";
import { toCurrentPositionWeather } from "../../../core/routes";
import { useLocation } from "react-router";

const Slider = () => {
  const doneSearches = useSelector(selectDoneSearches);
  const geoAgreement = useSelector(selectGeoAgreement);
  const dispatch = useDispatch();
  const location = useLocation();

  const handleSearchOnClick = (savedSearch) => {
    dispatch(clearState());
    dispatch(setSearch(savedSearch));
  };

  return (
    <SliderWrapper>
      {geoAgreement && (
        <StyledLink currentlocation="true" to={toCurrentPositionWeather}>
          <LocationIcon
            active={location.pathname === toCurrentPositionWeather}
          />
        </StyledLink>
      )}
      {doneSearches &&
        doneSearches.map((savedSearch) => (
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
