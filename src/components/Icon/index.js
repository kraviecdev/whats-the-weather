import { IconWrapper } from "./styled";
import iconCodes from "./iconCodes.json";
const Icon = ({ code, isDay, hourly }) => {
  const iconObject = iconCodes.find((icon) => icon.code === code);
  const icon = isDay === 1 ? iconObject.day : iconObject.night;
  const iconUrl = `icons/${icon}`;

  return (
    <IconWrapper hourly={hourly}>
      <use href={iconUrl} />
    </IconWrapper>
  );
};

export default Icon;
