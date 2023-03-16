import React, { useEffect } from "react";
import { useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/Header";
import Main from "../../components/Main";
import Section from "../../components/Section";
import DateComponent from "../../components/DateComponent";
import Search from "../../components/Search";
import InfoTile from "../../components/InfoTile";
import {
  ButtonIcon,
  RealTimeAddButton,
  RealTimeInfo,
  RealTimeWrapper,
} from "./styled";
import { getCurrentData } from "./getCurrentData";
import {
  removeCityFromCityList,
  selectCityList,
  setCityList,
  updateCityDataInCityList,
} from "./currentSlice";
import {
  selectSearchValues,
  setSearch,
  toggleSearchActive,
} from "../../components/Search/searchSlice";

const Current = () => {
  const dispatch = useDispatch();
  const searchValues = useSelector(selectSearchValues);
  const cityList = useSelector(selectCityList);

  const currentData = useQuery(["currentData", { searchValues }], () => {
    if (!!searchValues) {
      const stringifyCoordinates = `${searchValues.lat.toString()},${searchValues.lon.toString()}`;
      return getCurrentData(stringifyCoordinates);
    }
  });

  useEffect(() => {
    if (!!currentData.data) {
      if (cityList.some((city) => city.id === searchValues.id)) {
        const city = cityList.find((city) => city.id === searchValues.id);

        const updatedCity = {
          id: city.id,
          coordinates: {
            lat: searchValues.lat,
            lon: searchValues.lon,
          },
          weatherData: currentData.data,
        };

        dispatch(
          updateCityDataInCityList({
            cityId: city.id,
            updatedWeatherData: updatedCity,
          })
        );
        dispatch(setSearch(null));
      } else {
        dispatch(
          setCityList({
            id: searchValues.id,
            coordinates: {
              lat: currentData.data.location.lat,
              lon: currentData.data.location.lon,
            },
            weatherData: currentData.data,
          })
        );
        dispatch(setSearch(null));
      }
    }
  }, [currentData.data, dispatch, searchValues, cityList]);

  return (
    <>
      <Header />
      <Main>
        <DateComponent />
        <Section>
          {cityList.map((city) => (
            <RealTimeWrapper key={city.id}>
              <InfoTile
                deleteTile={() => dispatch(removeCityFromCityList(city.id))}
                refreshData={() =>
                  dispatch(
                    setSearch({
                      id: city.id,
                      lat: city.coordinates.lat,
                      lon: city.coordinates.lon,
                    })
                  )
                }
                icon={city.weatherData.current.condition.icon}
                city={city.weatherData.location.name}
                country={city.weatherData.location.country}
                localT={city.weatherData.current.last_updated}
                degrees={city.weatherData.current.temp_c}
                weather={city.weatherData.current.condition.text}
                realTemp={city.weatherData.current.feelslike_c}
                humidify={city.weatherData.current.humidity}
                visibility={city.weatherData.current.vis_km}
                pressure={city.weatherData.current.pressure_mb}
              />
            </RealTimeWrapper>
          ))}
          <RealTimeWrapper>
            <RealTimeAddButton onClick={() => dispatch(toggleSearchActive())}>
              <ButtonIcon />
              <RealTimeInfo>Click + to search</RealTimeInfo>
            </RealTimeAddButton>
            <Search />
          </RealTimeWrapper>
        </Section>
      </Main>
    </>
  );
};

export default Current;
