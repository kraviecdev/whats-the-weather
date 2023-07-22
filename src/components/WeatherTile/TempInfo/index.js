import { Info, WeatherTileWrapper } from "../styled";
import { TempInfoSpecial } from "./styled";
import Icon from "../Icon";

const TempInfo = ({ main, secondary, conditionText, data }) => {
  return (
    <WeatherTileWrapper noGap={main} forecastInfoWrapper={secondary}>
      <Info biggestCenter={main} medium={secondary}>
        {data.current.temp_c.toFixed(0)}
        {""}
        <TempInfoSpecial smallerBold={secondary}>&#176;C</TempInfoSpecial>
      </Info>
      <WeatherTileWrapper>
        <Icon
          code={data.current.condition.code}
          isDay={data.current.is_day}
          forecast={secondary}
        />
        {conditionText && <Info>{data.current.condition.text}</Info>}
      </WeatherTileWrapper>
    </WeatherTileWrapper>
  );
};

export default TempInfo;
