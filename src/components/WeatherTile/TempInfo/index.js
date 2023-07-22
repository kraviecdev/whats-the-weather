import { Info, WeatherTileWrapper } from "../styled";
import { TempInfoSpecial } from "./styled";
import Icon from "../Icon";

const TempInfo = ({
  main,
  secondary,
  conditionText,
  temp,
  iconCode,
  isDay,
}) => {
  return (
    <WeatherTileWrapper noGap={main} forecastInfoWrapper={secondary}>
      <Info biggestCenter={main} medium={secondary}>
        {temp}
        {""}
        <TempInfoSpecial smallerBold={secondary}>&#176;C</TempInfoSpecial>
      </Info>
      <WeatherTileWrapper>
        <Icon code={iconCode} isDay={isDay} forecast={secondary} />
        {conditionText && <Info>{conditionText}</Info>}
      </WeatherTileWrapper>
    </WeatherTileWrapper>
  );
};

export default TempInfo;
