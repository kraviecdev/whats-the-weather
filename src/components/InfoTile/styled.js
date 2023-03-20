import styled, { css, keyframes } from "styled-components";
import { Delete } from "@styled-icons/typicons/Delete";
import { Refresh } from "@styled-icons/material-sharp/Refresh";

const refreshAnimation = keyframes`
  0% {
    transform: rotate(0);
  }
  30% {
    transform: rotate(120deg);
  }
  100% {
    transform: rotate(0);
  }
`;

export const MainWrapper = styled.article`
  position: relative;
  display: inherit;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;
  padding: 20px;
  max-width: 486px;
  min-height: 300px;
  width: 100%;
  color: ${({ theme }) => theme.colors.secondaryFont};
  border: 10px solid ${({ theme }) => theme.colors.secondaryColor};
  transition: 0.7s ease-out;

  &:hover {
    border: 10px solid ${({ theme }) => theme.colors.secondaryFont};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}px) {
    max-width: 476px;
    min-height: 250px;
    padding: 10px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    max-width: 348px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    min-height: 200px;
  }
`;

export const Title = styled.h2`
  font-size: 32px;
  font-weight: 900;
  margin: 0;
  padding: 0 0 6px 0;
  border-bottom: 2px solid;
  max-width: 85%;

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}px) {
    font-size: 22px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    font-size: 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    font-size: 18px;
    border-bottom: 1px solid;
  }
`;

export const AdditionalInfo = styled.span`
  font-size: 18px;
  line-height: 20px;
  margin: 6px 0 0 0;

  ${({ bold }) =>
    bold &&
    css`
      font-weight: 600;
      text-align: center;
    `};

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}px) {
    font-size: 14px;
    line-height: 18px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileS}px) {
    font-size: 10px;
    line-height: 16px;
  }
`;

export const IconInfoWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  align-items: center;
  gap: 0 4px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    gap: 0;
  }
`;

export const Icon = styled.div`
  height: 64px;
  width: 64px;
  background-image: ${({ icon }) => `url(${icon})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}px) {
    height: 54px;
    width: 54px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    height: 48px;
    width: 48px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    height: 32px;
    width: 32px;
  }
`;

export const Info = styled.p`
  font-size: 28px;
  font-weight: 700;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}px) {
    font-size: 20px;
    font-weight: 600;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    font-size: 18px;
  }
`;

export const InfoWrapper = styled.div`
  display: grid;
  align-items: center;
  margin: 12px 0;
  grid-template-columns: repeat(2, 1fr);
  gap: 6px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    margin: 10px 0;
    gap: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    margin: 6px 0;
  }
`;

export const AdditionsInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 0 0 12px;
  border-left: 2px solid;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    padding: 0 0 0 8px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    border-left: 1px solid;
  }
`;

export const ControlButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  right: 0;
`;

export const RefreshButton = styled(Refresh)`
  cursor: pointer;
  width: 30px;

  &:hover {
    animation: ${refreshAnimation} 0.8s linear;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    width: 24px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    width: 20px;
  }
`;

export const DeleteButton = styled(Delete)`
  width: 30px;
  cursor: pointer;
  transition: 0.3s ease-out;

  &:hover {
    fill: crimson;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    width: 24px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    width: 20px;
  }
`;
