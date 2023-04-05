import styled, { css } from "styled-components";
import { ReactComponent as Favourite } from "./favourite.svg";

export const MainWrapper = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  color: ${({ theme }) => theme.colors.mainFont};
`;

export const HeadingWrapper = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
  stroke: ${({ theme }) => theme.colors.mainFont};
  fill: #1e293d4d;

  ${({ added }) =>
    added &&
    css`
      fill: #e5b91a;
      stroke: #ffb800;
    `}
`;

export const InfoWrapper = styled.section`
  display: grid;
  align-items: center;
  justify-content: center;
  margin: 12px 0;
  gap: 18px;

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
      gap: 8px;

      &:last-of-type {
        border-left: 1px solid ${({ theme }) => theme.colors.secondaryFont};
      }
    `}

  ${({ hourlyWrapper }) =>
    hourlyWrapper &&
    css`
      display: flex;
      gap: 0 16px;
    `}
`;
export const Info = styled.p`
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
  margin: 0;

  ${({ temperature }) =>
    temperature &&
    css`
      font-size: 80px;
      line-height: 96px;
      font-weight: 700;
    `}

  ${({ hourly }) =>
    hourly &&
    css`
      font-size: 12px;
      font-weight: 700;
    `}
`;

export const SpecialInfo = styled.span`
  font-size: 32px;
  vertical-align: super;
`;

export const IconInfoWrapper = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  gap: 8px;
`;

export const HourlyWrapper = styled.div`
  max-width: max-content;
  display: grid;
  justify-items: center;
  gap: 8px;
`;
