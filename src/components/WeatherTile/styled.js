import styled, { css } from "styled-components";

export const ArticleWrapper = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-start;
  width: 100%;
  color: ${({ theme }) => theme.colors.mainFont};

  ${({ forecastArticleWrapper }) =>
    forecastArticleWrapper &&
    css`
      height: 100%;
      overflow-y: hidden;
    `}

  ${({ tileView }) =>
    tileView &&
    css`
      max-width: 1024px;
      margin: 0 auto;
      overflow-y: scroll;
      padding: 16px;
      gap: 8px;
    `}

  ${({ tileArticle }) =>
    tileArticle &&
    css`
      position: relative;
      padding: 16px 16px 32px;
      background: ${({ theme }) => theme.colors.secondaryColor};
      border-radius: 16px;

      @media (min-width: 768px) {
        align-self: center;
        max-width: 50%;
      }
    `}

  ${({ internalArticleWrapper }) =>
    internalArticleWrapper &&
    css`
      margin: 0 auto;
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-start;
    `}
`;

export const WeatherTileSection = styled.section`
  display: grid;
  align-items: center;
  justify-content: center;
  margin: 12px 0;
  transition: 0.7s ease-in-out;

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
      justify-content: start;
      grid-auto-flow: column;
      grid-auto-rows: max-content;
      grid-column-gap: 34px;
      overflow-x: auto;
      padding: 0 0 12px;
      height: 114px;
    `}
  
  ${({ hourlyForecast }) =>
    hourlyForecast &&
    css`
      overflow-y: hidden;
      opacity: 0;
      height: 0;
      margin: 0;
    `}
  
  ${({ forecast }) =>
    forecast &&
    css`
      grid-template-columns: repeat(2, max-content);
    `}
`;

export const WeatherTileWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 8px;

  ${({ additionalInfoWrapper }) =>
    additionalInfoWrapper &&
    css`
      padding: 0 12px 0 0;
      margin: 12px 0;
      align-items: flex-start;
      justify-content: space-between;
      border-right: 1px solid ${({ theme }) => theme.colors.secondaryFont};

      &:last-of-type {
        padding: 0 0 0 12px;
        justify-self: right;
        border-right: none;
      }
    `}

  ${({ noMargin }) =>
    noMargin &&
    css`
      margin: 0 0 0 0;
    `}

  ${({ noGap }) =>
    noGap &&
    css`
      gap: 0;
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
