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

const Slider = () => {
  const doneSearches = useSelector(selectDoneSearches);
  const dispatch = useDispatch();
  const location = useLocation();

  return (
    <SliderWrapper>
      <StyledLink currentLocation="true" to={toCurrentPositionWeather}>
        <LocationIcon
          activeLocation={location.pathname === toCurrentPositionWeather}
        />
      </StyledLink>
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
