import iconCodes from "./iconCodes.json";
import {
  ClearNightIcon,
  CloudyIcon,
  FreezingFogIcon,
  HeavyRainWithThunderIcon,
  HeavyShowersOfIcePelletsIcon,
  HeavySleetIcon,
  HeavySleetShowerIcon,
  HeavySnowShowerIcon,
  HeavySnowWithThunderIcon,
  IconWrapper,
  LightFreezingRainIcon,
  LightFreezingRainNightIcon,
  LightRainIcon,
  LightRainNightIcon,
  LightRainShowerIcon,
  LightRainWithThunderIcon,
  LightSleetShowerIcon,
  LightSleetShowerNightIcon,
  LightSnowShowerIcon,
  OvercastIcon,
  PartlyCloudyIcon,
  PartlyCloudyNightIcon,
  RainShowerIcon,
  SunnyIcon,
  ThunderyIcon,
} from "./styled";
const Icon = ({ code, isDay, hourly, forecast }) => {
  const iconObject = iconCodes.find((icon) => icon.code === code);
  const icon = isDay === 1 ? iconObject.day : iconObject.night;

  const WeatherIcon = () =>
    ({
      clear_n: <ClearNightIcon />,
      cloudy: <CloudyIcon />,
      freezing_fog: <FreezingFogIcon />,
      heavy_rain_with_thunder: <HeavyRainWithThunderIcon />,
      heavy_showers_of_ice_pellets: <HeavyShowersOfIcePelletsIcon />,
      heavy_sleet: <HeavySleetIcon />,
      heavy_sleet_shower: <HeavySleetShowerIcon />,
      heavy_snow_shower: <HeavySnowShowerIcon />,
      heavy_snow_with_thunder: <HeavySnowWithThunderIcon />,
      light_freezing_rain: <LightFreezingRainIcon />,
      light_freezing_rain_n: <LightFreezingRainNightIcon />,
      light_rain: <LightRainIcon />,
      light_rain_n: <LightRainNightIcon />,
      light_rain_shower: <LightRainShowerIcon />,
      light_rain_with_thunder: <LightRainWithThunderIcon />,
      light_sleet_shower: <LightSleetShowerIcon />,
      light_sleet_shower_n: <LightSleetShowerNightIcon />,
      light_snow_shower: <LightSnowShowerIcon />,
      overcast: <OvercastIcon />,
      partly_cloudy: <PartlyCloudyIcon />,
      partly_cloudy_n: <PartlyCloudyNightIcon />,
      rain_shower: <RainShowerIcon />,
      sunny: <SunnyIcon />,
      thundery: <ThunderyIcon />,
    }[icon]);

  return (
    <IconWrapper hourly={hourly} forecast={forecast}>
      <WeatherIcon />
    </IconWrapper>
  );
};

export default Icon;
