import Heading from "../components/Heading";
import Search from "../components/Search";
import Main from "../components/Main";
import { useLocation } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  selectGeoCoordinates,
  selectIsForecast,
  setForecastSection,
} from "./weatherSlice";
import { useEffect, useState } from "react";
import {
  selectDoneSearches,
  setSearch,
} from "../components/Search/searchSlice";

const WeatherApp = ({ children, current }) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const isForecastSectionOpen = useSelector(selectIsForecast);
  const geoCoordinates = useSelector(selectGeoCoordinates);
  const doneSearches = useSelector(selectDoneSearches);

  const [touchStartY, setTouchStartY] = useState(0);
  const [touchEndY, setTouchEndY] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);

  const onTouchStart = (event) => {
    setTouchStartY(event.touches[0].clientY);
    setTouchStartX(event.touches[0].clientX);
  };

  const onTouchEnd = (event) => {
    setTouchEndY(event.changedTouches[0].clientY);
    setTouchEndX(event.changedTouches[0].clientX);
  };

  const horizontalMoveHandler = () => {
    const slideUp = touchStartY - touchEndY;
    const slideDown = touchEndY - touchStartY;

    if (slideUp >= 120 && isForecastSectionOpen === false) {
      dispatch(setForecastSection(true));
      setTouchEndY(0);
      setTouchStartY(0);
    }

    if (slideDown >= 120 && isForecastSectionOpen === true) {
      dispatch(setForecastSection(false));
      setTouchEndY(0);
      setTouchStartY(0);
    }
  };

  const verticalMoveHandler = () => {
    const swipeToLeft = touchStartX - touchEndX;
    const swipeToRight = touchEndX - touchStartX;

    if (swipeToRight >= 120) {
      if (!!geoCoordinates) {
        alert("Can't swipe");
      }
    }

    if (swipeToLeft >= 120) {
      if (!!geoCoordinates) {
        dispatch(setSearch(doneSearches[0]));
      }
    }
  };

  useEffect(() => {
    if (touchStartY > 0 && touchEndY > 0) {
      horizontalMoveHandler();
    }

    if (touchStartX > 0 && touchEndX > 0) {
      verticalMoveHandler();
    }
  }, [touchStartY, touchEndY, touchStartX, touchEndX]);

  return (
    <Main
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      forecast={location.pathname.split("/")[1] === "forecast"}
    >
      {current && (
        <>
          <Heading main="true" />
          <Search />
        </>
      )}
      {children}
    </Main>
  );
};

export default WeatherApp;
