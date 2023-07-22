import styled, { css } from "styled-components";

export const MainWrapper = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: flex-start;
  width: 100%;
  color: ${({ theme }) => theme.colors.mainFont};

  ${({ additionalArticleWrapper }) =>
    additionalArticleWrapper &&
    css`
      flex-direction: row;
      background: ${({ theme }) => theme.colors.secondaryColor};
      border-radius: 16px;
    `}
`;

export const WeatherTileSection = styled.section`
  display: grid;
  align-items: center;
  justify-content: center;
  margin: 12px 0;

  ${({ borderBottom }) =>
    borderBottom &&
    css`
      border-bottom: 1px solid ${({ theme }) => theme.colors.secondaryFont};
    `}

  ${({ additionalContentSection }) =>
    additionalContentSection &&
    css`
      grid-template-columns: repeat(2, 1fr);
      gap: 0;
    `}

  ${({ hourlyContentSection }) =>
    hourlyContentSection &&
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

export const WeatherTileWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 8px;

  ${({ noGap }) =>
    noGap &&
    css`
      gap: 0;
    `}

  ${({ additionalInfoWrapper }) =>
    additionalInfoWrapper &&
    css`
      margin: 12px 0;
      align-items: flex-start;
      justify-content: space-between;
      border-right: 1px solid ${({ theme }) => theme.colors.secondaryFont};

      &:last-of-type {
        justify-self: right;
        border-right: none;
      }
    `}

  ${({ hourlyInfoWrapper }) =>
    hourlyInfoWrapper &&
    css`
      min-width: max-content;
    `}
  
  ${({ forecastInfoWrapper }) =>
    forecastInfoWrapper &&
    css`
      flex-direction: row-reverse;
    `}
`;

export const Info = styled.p`
  font-size: 14px;
  font-weight: 400;
  margin: 0;

  ${({ bold }) =>
    bold &&
    css`
      font-weight: 900;
    `}

  ${({ larger }) =>
    larger &&
    css`
      font-size: 16px;
      font-weight: 600;
    `}

  ${({ medium }) =>
    medium &&
    css`
      font-size: 24px;
      font-weight: 700;
    `}

  ${({ biggestCenter }) =>
    biggestCenter &&
    css`
      text-align: center;
      font-size: 80px;
      font-weight: 700;
    `}
`;
