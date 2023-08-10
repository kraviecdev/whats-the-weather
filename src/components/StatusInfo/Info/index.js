import {
  StatusHeader,
  StatusInfo,
  StatusInfoWrapper,
  StatusWrapper,
} from "../styled";
import { UpIcon } from "../../Button/styled";
import { useState } from "react";
import { useSwipeable } from "react-swipeable";

const Info = () => {
  const [isClicked, setIsClicked] = useState(false);

  const swipeHandlers = useSwipeable({
    onSwipedUp: () => {
      if (isClicked === false) {
        setIsClicked(true);
      }
    },
    onSwipedDown: () => {
      if (isClicked === true) {
        setIsClicked(false);
      }
    },
  });

  return (
    <StatusWrapper info="true" {...swipeHandlers}>
      <div>
        <StatusHeader>Hello there!</StatusHeader>
        <StatusInfo>
          For the weather forecast, enter the name of the city up there
        </StatusInfo>
      </div>
      <StatusInfoWrapper
        hidden="true"
        isClicked={isClicked}
        onClick={() => setIsClicked(!isClicked)}
      >
        <StatusHeader>
          Geolocation Info <UpIcon />
        </StatusHeader>
        <StatusInfo>
          We respect your privacy, that's why we do not collect any data from
          you and your device.
        </StatusInfo>
        <StatusInfo>
          However, if you want weather forecast for your current position, we
          need your permission for geolocation. You can change it in you browser
          settings.
        </StatusInfo>
      </StatusInfoWrapper>
    </StatusWrapper>
  );
};

export default Info;
