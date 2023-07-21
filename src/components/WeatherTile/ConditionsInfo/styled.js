import styled from "styled-components";
import { ReactComponent as Humidify } from "./humidify.svg";
import { ReactComponent as Wind } from "./wind.svg";
import { ReactComponent as Pressure } from "./pressure.svg";

export const HumidityIcon = styled(Humidify)`
  width: 12px;
  height: 12px;
  fill: ${({ theme }) => theme.colors.mainFont};
`;

export const WindIcon = styled(Wind)`
  width: 12px;
  height: 12px;
  fill: ${({ theme }) => theme.colors.mainFont};
`;

export const PressureIcon = styled(Pressure)`
  width: 12px;
  height: 12px;
  fill: ${({ theme }) => theme.colors.mainFont};
`;
