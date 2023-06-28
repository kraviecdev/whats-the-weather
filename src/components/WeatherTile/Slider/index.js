import {
  LocationIcon,
  SliderButton,
  SliderWrapper,
  StyledLink,
} from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { selectDoneSearches, setSearch } from "../../Search/searchSlice";
import { toCurrentPositionWeather } from "../../../core/routes";
import { useLocation } from "react-router";
import { selectDisallowed } from "../../../features/CurrentPositionWeather/currentPositionSlice";

const Slider = () => {
  const doneSearches = useSelector(selectDoneSearches);
  const isDisallowed = useSelector(selectDisallowed);
  const dispatch = useDispatch();
  const location = useLocation();

  return (
    <SliderWrapper>
      {!isDisallowed && (
        <StyledLink currentlocation="true" to={toCurrentPositionWeather}>
          <LocationIcon
            active={location.pathname === toCurrentPositionWeather}
          />
        </StyledLink>
      )}
      {doneSearches &&
        doneSearches.map((savedSearch) => (
          <SliderButton
            onClick={() => dispatch(setSearch(savedSearch))}
            to={`/weather/${savedSearch.name}`}
            key={savedSearch.id}
          />
        ))}
    </SliderWrapper>
  );
};

export default Slider;
