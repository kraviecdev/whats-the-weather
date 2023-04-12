import { SliderButton, SliderWrapper } from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { selectDoneSearches, setSearch } from "../../Search/searchSlice";

const Slider = () => {
  const doneSearches = useSelector(selectDoneSearches);
  const dispatch = useDispatch();

  return (
    <SliderWrapper multiple={doneSearches.length > 1}>
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
