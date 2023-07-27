import { Info, WeatherTileWrapper } from "../styled";
import { TempInfoSpecial } from "./styled";
import IconInfo from "./IconInfo";

const TempInfo = ({
  main,
  secondary,
  conditionText,
  temp,
  iconCode,
  isDay,
  children,
}) => {
  return (
    <WeatherTileWrapper noGap={main} forecastInfoWrapper={secondary}>
      <Info biggestCenter={main} medium={secondary}>
        {temp}
        {""}
        <TempInfoSpecial smallerBold={secondary}>&#176;C</TempInfoSpecial>
      </Info>
      {main && (
        <IconInfo
          conditionText={conditionText}
          iconCode={iconCode}
          secondary={secondary}
          isDay={isDay}
        />
      )}
      {secondary && (
        <IconInfo iconCode={1000} secondary={secondary} isDay={isDay} />
      )}
    </WeatherTileWrapper>
  );
};

export default TempInfo;
