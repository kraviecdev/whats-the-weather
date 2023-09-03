import WeatherApp from "../index";
import { useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { selectDoneSearches } from "../../components/Search/searchSlice";
import { getWeatherData } from "../getWeatherData";
import {
  clearState,
  selectApplicationStatus,
  selectCitiesData,
  setApplicationStatus,
  setCitiesData,
} from "../weatherSlice";
import CitiesListTiles from "../../components/WeatherTile/CitiesListTiles";
import { useEffect } from "react";
import Loading from "../../components/StatusInfo/Loading";
import Error from "../../components/StatusInfo/Error";

const CitiesPage = () => {
  const dispatch = useDispatch();
  const applicationStatus = useSelector(selectApplicationStatus);
  const doneSearches = useSelector(selectDoneSearches);
  const citiesData = useSelector(selectCitiesData);
  const fetchMultipleQueries = async (doneSearches) => {
    const results = [];

    for (const search of doneSearches) {
      const stringifySearch = `${search.lat.toString()},${search.lon.toString()}`;

      const data = await getWeatherData(stringifySearch, 2);

      const {
        forecast: {
          forecastday: [firstDay, secondDay],
        },
      } = data;

      const hourlyData = [...firstDay.hour, ...secondDay.hour];

      const cityObject = {
        id: search.id,
        current: data.current,
        location: data.location,
        forecast: hourlyData,
        isContentHidden: true,
      };

      results.push(cityObject);
    }

    return results;
  };

  const { data, isError } = useQuery("cities", () =>
    fetchMultipleQueries(doneSearches)
  );

  useEffect(() => {
    dispatch(clearState());

    if (!!isError) {
      dispatch(setApplicationStatus("error"));
    }

    if (!!data) {
      dispatch(setCitiesData(data));

      setTimeout(() => {
        dispatch(setApplicationStatus("success"));
      }, 500);
    }
  }, [data]);

  const Status = () =>
    ({
      loading: <Loading />,
      success: <CitiesListTiles cities={citiesData} />,
      error: <Error />,
    }[applicationStatus]);

  return (
    <WeatherApp>
      <Status />
    </WeatherApp>
  );
};

export default CitiesPage;
