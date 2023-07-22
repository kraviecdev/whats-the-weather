import { Info, WeatherTileWrapper, WeatherTileSection } from "../styled";
import { HumidityIcon, PressureIcon, WindIcon } from "./styled";

const ConditionsInfo = ({
  basic,
  secondary,
  children,
  feelsLike,
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
                Feels like: <b>{feelsLike}&#176;C</b>
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
                Wind speed: <b>{} km/h</b>
              </Info>
            </WeatherTileWrapper>
          </WeatherTileSection>
        )}
        {secondary && (
          <WeatherTileSection additionalContentSection>
            <WeatherTileWrapper additionalInfoWrapper noMargin>
              {children}
            </WeatherTileWrapper>

            <WeatherTileWrapper additionalInfoWrapper noMargin>
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
