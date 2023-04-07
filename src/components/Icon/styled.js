import styled, { css } from "styled-components";
import { ReactComponent as ClearNight } from "./icons/clear_n.svg";
import { ReactComponent as Cloudy } from "./icons/cloudy.svg";
import { ReactComponent as FreezingFog } from "./icons/freezing_fog.svg";
import { ReactComponent as HeavyRainWithThunder } from "./icons/heavy_rain_with_thunder.svg";
import { ReactComponent as HeavyShowersOfIcePellets } from "./icons/heavy_showers_of_ice_pellets.svg";
import { ReactComponent as HeavySleet } from "./icons/heavy_sleet.svg";
import { ReactComponent as HeavySleetShower } from "./icons/heavy_sleet_shower.svg";
import { ReactComponent as HeavySnowShower } from "./icons/heavy_snow_shower.svg";
import { ReactComponent as HeavySnowWithThunder } from "./icons/heavy_snow_with_thunder.svg";
import { ReactComponent as LightFreezingRain } from "./icons/light_freezing_rain.svg";
import { ReactComponent as LightFreezingRainNight } from "./icons/light_freezing_rain_n.svg";
import { ReactComponent as LightRain } from "./icons/light_rain.svg";
import { ReactComponent as LightRainNight } from "./icons/light_rain_n.svg";
import { ReactComponent as LightRainShower } from "./icons/light_rain_shower.svg";
import { ReactComponent as LightRainWithThunder } from "./icons/light_rain_with_thunder.svg";
import { ReactComponent as LightSleetShower } from "./icons/light_sleet_shower.svg";
import { ReactComponent as LightSleetShowerNight } from "./icons/light_sleet_shower_n.svg";
import { ReactComponent as LightSnowShower } from "./icons/light_snow_shower.svg";
import { ReactComponent as Overcast } from "./icons/overcast.svg";
import { ReactComponent as PartlyCloudy } from "./icons/partly_cloudy.svg";
import { ReactComponent as PartlyCloudyNight } from "./icons/partly_cloudy_n.svg";
import { ReactComponent as RainShower } from "./icons/rain_shower.svg";
import { ReactComponent as Sunny } from "./icons/sunny.svg";
import { ReactComponent as Thundery } from "./icons/thundery.svg";

const shared = css`
  width: 100%;
  height: 100%;
`;

export const IconWrapper = styled.div`
  width: 48px;
  height: 48px;

  ${({ hourly }) =>
    hourly &&
    css`
      width: 32px;
      height: 32px;
    `}
`;
export const ClearNightIcon = styled(ClearNight)`
  ${shared}
`;

export const CloudyIcon = styled(Cloudy)`
  ${shared}
`;

export const FreezingFogIcon = styled(FreezingFog)`
  ${shared}
`;

export const HeavyRainWithThunderIcon = styled(HeavyRainWithThunder)`
  ${shared}
`;

export const HeavyShowersOfIcePelletsIcon = styled(HeavyShowersOfIcePellets)`
  ${shared}
`;

export const HeavySleetIcon = styled(HeavySleet)`
  ${shared}
`;

export const HeavySleetShowerIcon = styled(HeavySleetShower)`
  ${shared}
`;

export const HeavySnowShowerIcon = styled(HeavySnowShower)`
  ${shared}
`;

export const HeavySnowWithThunderIcon = styled(HeavySnowWithThunder)`
  ${shared}
`;

export const LightFreezingRainIcon = styled(LightFreezingRain)`
  ${shared}
`;

export const LightFreezingRainNightIcon = styled(LightFreezingRainNight)`
  ${shared}
`;

export const LightRainIcon = styled(LightRain)`
  ${shared}
`;

export const LightRainNightIcon = styled(LightRainNight)`
  ${shared}
`;

export const LightRainShowerIcon = styled(LightRainShower)`
  ${shared}
`;

export const LightRainWithThunderIcon = styled(LightRainWithThunder)`
  ${shared}
`;

export const LightSleetShowerIcon = styled(LightSleetShower)`
  ${shared}
`;

export const LightSleetShowerNightIcon = styled(LightSleetShowerNight)`
  ${shared}
`;

export const LightSnowShowerIcon = styled(LightSnowShower)`
  ${shared}
`;

export const OvercastIcon = styled(Overcast)`
  ${shared}
`;

export const PartlyCloudyIcon = styled(PartlyCloudy)`
  ${shared}
`;

export const PartlyCloudyNightIcon = styled(PartlyCloudyNight)`
  ${shared}
`;

export const RainShowerIcon = styled(RainShower)`
  ${shared}
`;

export const SunnyIcon = styled(Sunny)`
  ${shared}
`;

export const ThunderyIcon = styled(Thundery)`
  ${shared}
`;
