import { Info, WeatherTileWrapper } from "../styled";
import { HumidityIcon, VisibilityIcon, WindIcon } from "./styled";

const ConditionsInfo = ({
  main,
  secondary,
  children,
  feelsLike,
  pressure,
  humidity,
  wind,
  visibility,
}) => {
  const windSpeed = (wind * 0.27778).toFixed(1);

  return (
    <>
      {main && (
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
          {secondary ? <WindIcon /> : "Wind speed:"} <b>{windSpeed} m/s</b>
        </Info>
      </WeatherTileWrapper>
    </>
  );
};

export default ConditionsInfo;
