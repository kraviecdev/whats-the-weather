import { WeatherTileSection } from "../WeatherTileSection";
import { WeatherTileWrapper } from "../WeatherTileWrapper";
import { Info } from "../styled";
import { HumidityIcon, PressureIcon, WindIcon } from "./styled";

const ConditionsInfo = ({ basic, secondary, children, data }) => {
  {
    return (
      <>
        {basic && (
          <WeatherTileSection additionalContentSection borderBottom>
            <WeatherTileWrapper additionalInfoWrapper>
              <Info>
                Feels like: <b>{data.current.feelslike_c.toFixed(0)}&#176;C</b>
              </Info>
              <Info>
                Pressure: <b>{data.current.pressure_mb} hPA</b>
              </Info>
            </WeatherTileWrapper>

            <WeatherTileWrapper additionalInfoWrapper>
              <Info>
                Humidity: <b>{data.current.humidity}%</b>
              </Info>
              <Info>
                Wind speed: <b>{data.current.gust_kph} km/h</b>
              </Info>
            </WeatherTileWrapper>
          </WeatherTileSection>
        )}
        {secondary && (
          <WeatherTileSection additionalContentSection>
            <WeatherTileWrapper additionalInfoWrapper>
              {children}
            </WeatherTileWrapper>

            <WeatherTileWrapper additionalInfoWrapper>
              <Info>
                <PressureIcon /> {data.current.pressure_mb} hPA
              </Info>
              <Info>
                <HumidityIcon /> {data.current.humidity}%
              </Info>
              <Info>
                <WindIcon /> {data.current.gust_kph} km/h
              </Info>
            </WeatherTileWrapper>
          </WeatherTileSection>
        )}
      </>
    );
  }
};

export default ConditionsInfo;
