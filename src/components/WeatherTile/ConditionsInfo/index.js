import { WeatherTileSection } from "../WeatherTileSection";
import { WeatherTileWrapper } from "../WeatherTileWrapper";
import { Info } from "../styled";
import { HumidityIcon, PressureIcon, WindIcon } from "./styled";

const ConditionsInfo = ({
  basic,
  secondary,
  children,
  feelslike,
  pressure,
  humidity,
  wind,
}) => {
  {
    return (
      <>
        {basic && (
          <WeatherTileSection additionalContentSection borderBottom>
            <WeatherTileWrapper additionalInfoWrapper>
              <Info>
                Feels like: <b>{feelslike}&#176;C</b>
              </Info>
              <Info>
                Pressure: <b>{pressure} hPA</b>
              </Info>
            </WeatherTileWrapper>

            <WeatherTileWrapper additionalInfoWrapper>
              <Info>
                Humidity: <b>{humidity}%</b>
              </Info>
              <Info>
                Wind speed: <b>{wind} km/h</b>
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
                <PressureIcon /> {pressure} hPA
              </Info>
              <Info>
                <HumidityIcon /> {humidity}%
              </Info>
              <Info>
                <WindIcon /> {wind} km/h
              </Info>
            </WeatherTileWrapper>
          </WeatherTileSection>
        )}
      </>
    );
  }
};

export default ConditionsInfo;
