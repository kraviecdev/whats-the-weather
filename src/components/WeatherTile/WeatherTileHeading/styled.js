import styled, { css } from "styled-components";
import { ReactComponent as Favourite } from "./favourite.svg";

export const WeatherTileHeadingWrapper = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 0 12px;
`;
export const WeatherTileTitle = styled.h2`
  font-size: 24px;
  font-weight: 900;
  line-height: 30px;
  padding: 8px;
  margin: 0;
  display: inherit;
  align-items: center;
  gap: 12px;
`;

export const WeatherTileFavouriteIcon = styled(Favourite)`
  width: 20px;
  height: 20px;
  stroke: ${({ theme }) => theme.colors.mainFont};
  fill: ${({ theme }) => theme.colors.mainFont}4d;
  cursor: pointer;

  ${({ added }) =>
    added &&
    css`
      fill: #e5b91a;
      stroke: #ffb800;
    `}
`;
