import { Info, WeatherTileWrapper } from "../../styled";
import Icon from "../../Icon";

const IconInfo = ({ iconCode, isDay, secondary, conditionText }) => {
  return (
    <WeatherTileWrapper>
      <Icon code={iconCode} isDay={isDay} forecast={secondary} />
      {conditionText && <Info>{conditionText}</Info>}
    </WeatherTileWrapper>
  );
};

export default IconInfo;
