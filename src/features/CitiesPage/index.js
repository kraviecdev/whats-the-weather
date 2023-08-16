import WeatherApp from "../index";
import { useQueries } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { selectDoneSearches } from "../../components/Search/searchSlice";
import { getWeatherData } from "../getWeatherData";
import {
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

  const cities = useQueries(
    doneSearches.map((search) => {
      const stringifySearch = `${search.lat.toString()},${search.lon.toString()}`;
      return {
        queryKey: ["city", stringifySearch],
        queryFn: () => getWeatherData(stringifySearch, 2),
      };
    })
  );

  useEffect(() => {
    if (cities.every(({ isSuccess }) => isSuccess === true)) {
      const mappedData = cities.map(({ data }) => {
        const {
          forecast: {
            forecastday: [firstDay, secondDay],
          },
        } = data;

        const hourlyData = [...firstDay.hour, ...secondDay.hour];

        const city = {
          location: data.location,
          current: data.current,
          hourlyWeather: hourlyData,
          isAdditionalContentVisible: false,
        };

        return city;
      });

      dispatch(setCitiesData(mappedData));
      dispatch(setApplicationStatus("success"));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
