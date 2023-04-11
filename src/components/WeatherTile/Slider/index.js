import { SliderButton, SliderWrapper } from "./styled";
import { useSelector } from "react-redux";
import { selectSearches } from "../../Search/searchSlice";

const Slider = () => {
  const savedSearches = useSelector(selectSearches);

  return (
    <SliderWrapper multiple={savedSearches.length > 1}>
      {savedSearches &&
        savedSearches.map((savedSearch) => (
          <SliderButton
            to={`/weather/${savedSearch.name}`}
            key={savedSearch.id}
          />
        ))}
    </SliderWrapper>
  );
};

export default Slider;
