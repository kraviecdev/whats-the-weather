import { Info, WeatherTileWrapper, WeatherTileSection } from "../styled";
import { HumidityIcon, VisibilityIcon, WindIcon } from "./styled";

const ConditionsInfo = ({
  basic,
  secondary,
  children,
  feelsLike,
  pressure,
  humidity,
  wind,
  visibility,
}) => {
  return (
    <WeatherTileSection additionalContentSection borderBottom={basic}>
      {basic && (
        <WeatherTileWrapper additionalInfoWrapper>
          <Info>
            Feels like: <b>{feelsLike}&#176;C</b>
          </Info>
          <Info>
            Pressure: <b>{pressure} hPa</b>
          </Info>
        </WeatherTileWrapper>
      )}
      {secondary && (
        <WeatherTileWrapper additionalInfoWrapper noMargin={secondary}>
          {children}
        </WeatherTileWrapper>
      )}

      <WeatherTileWrapper additionalInfoWrapper noMargin={secondary}>
        {secondary && (
          <Info>
            <VisibilityIcon /> <b>{visibility} km</b>
          </Info>
        )}
        <Info>
          {secondary ? <HumidityIcon /> : "Humidity:"} <b>{humidity}%</b>
        </Info>
        <Info>
          {secondary ? <WindIcon /> : "Wind speed:"} <b>{wind} km/h</b>
        </Info>
      </WeatherTileWrapper>
    </WeatherTileSection>
  );
};

export default ConditionsInfo;
