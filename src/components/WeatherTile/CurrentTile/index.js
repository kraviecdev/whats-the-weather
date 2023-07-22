import Slider from "../Slider";
import WeatherTile from "../index";
import TempInfo from "../TempInfo";
import ConditionsInfo from "../ConditionsInfo";
import { WeatherTileSection } from "../WeatherTileSection";
import HourlyInfo from "../HourlyInfo";

const CurrentTile = ({ data, saveInFav, isAddedToFav, hourlyData }) => {
  const localtime = new Date(data.location.localtime).getTime();
  const currentHour = new Date(localtime).getHours();

  return (
    <WeatherTile
      localtime={localtime}
      title={data.location.name}
      favOnClick={saveInFav}
      savedInFav={isAddedToFav}
    >
      <Slider />

      <WeatherTileSection>
        <TempInfo data={data} conditionText="true" main="true" />
      </WeatherTileSection>

      <ConditionsInfo basic="true" data={data} />

      <HourlyInfo hourlyData={hourlyData} currentHour={currentHour} />
    </WeatherTile>
  );
};

export default CurrentTile;
