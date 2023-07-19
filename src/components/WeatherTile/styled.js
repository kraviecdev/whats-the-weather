import styled, { css } from "styled-components";
import { ReactComponent as Favourite } from "./favourite.svg";
import { ReactComponent as Humidify } from "./humidify.svg";
import { ReactComponent as Wind } from "./wind.svg";
import { ReactComponent as Pressure } from "./pressure.svg";

export const MainWrapper = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: flex-start;
  width: 100%;
  color: ${({ theme }) => theme.colors.mainFont};
`;

export const HeadingWrapper = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 0 12px;
`;
export const Title = styled.h2`
  font-size: 24px;
  font-weight: 900;
  line-height: 30px;
  padding: 8px;
  margin: 0;
  display: inherit;
  align-items: center;
  gap: 12px;
`;

export const FavouriteIcon = styled(Favourite)`
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

export const HumidifyIcon = styled(Humidify)`
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

export const InfoWrapper = styled.section`
  display: grid;
  align-items: center;
  justify-content: center;
  margin: 12px 0;

  ${({ additionalWrapper }) =>
    additionalWrapper &&
    css`
      grid-template-columns: repeat(2, 1fr);
      border-bottom: 1px solid ${({ theme }) => theme.colors.secondaryFont};
      gap: 0;
    `}

  ${({ additionalInfo }) =>
    additionalInfo &&
    css`
      justify-content: space-between;
      gap: 8px;
      border-right: 1px solid ${({ theme }) => theme.colors.secondaryFont};

      &:last-of-type {
        justify-self: right;
        border-right: none;
      }
    `}

  ${({ hourlyWrapper }) =>
    hourlyWrapper &&
    css`
      display: flex;
      justify-content: flex-start;
      overflow-x: auto;
      gap: 0 34px;
      padding: 0 0 12px;
      margin: 12px auto;
      max-width: 99%;
    `}
`;
export const Info = styled.p`
  font-size: 14px;
  font-weight: 400;
  margin: 0;

  ${({ temperature }) =>
    temperature &&
    css`
      text-align: center;
      font-size: 80px;
      font-weight: 700;
    `}

  ${({ hourly }) =>
    hourly &&
    css`
      font-size: 16px;
      font-weight: 600;
    `}

  ${({ first }) =>
    first &&
    css`
      font-weight: 900;
    `}
`;

export const SpecialInfo = styled.span`
  font-size: 32px;
  vertical-align: super;
`;

export const IconInfoWrapper = styled.div`
  display: grid;
  justify-items: center;
  align-content: center;
  gap: 8px;

  ${({ forecast }) =>
    forecast &&
    css`
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0;

      span {
        font-size: 12px;
        font-weight: 700;
        align-self: flex-start;
      }
      p {
        font-size: 24px;
        font-weight: 700;
        padding: 0 0 0 8px;
      }
    `}
`;

export const HourlyWrapper = styled.div`
  min-width: max-content;
  display: grid;
  justify-items: center;
  gap: 8px;
`;
