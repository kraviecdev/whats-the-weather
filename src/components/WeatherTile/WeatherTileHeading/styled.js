import styled, { css } from "styled-components";
import { ReactComponent as Favourite } from "./favourite.svg";

export const WeatherTileHeadingWrapper = styled.header`
  display: grid;
  align-self: center;
  align-items: center;
  justify-items: center;
  margin: 0 0 12px;
  grid-template-areas: "title icon" "info info";

  div,
  p {
    grid-area: info;
  }

  ${({ secondary }) =>
    secondary &&
    css`
      grid-template-areas: "icon title" "icon info";
      grid-column-gap: 16px;
      justify-items: start;

      h2 {
        padding: 8px 0;
      }
    `}
`;
export const WeatherTileTitle = styled.h2`
  grid-area: title;
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
  grid-area: icon;
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
