import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import { ReactComponent as LogoIcon } from "./logo.svg";

export const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1440px;
  width: 100%;
  margin: auto;
  gap: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    gap: 0;
    flex-wrap: wrap;
  }
`;

export const HeaderTitle = styled.h1`
  font-weight: 700;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.secondaryFont};
  font-size: 20px;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    display: none;
  }
`;

export const NavLogo = styled(LogoIcon)`
  width: 80px;
  stroke: ${({ theme }) => theme.colors.secondaryFont};
  fill: ${({ theme }) => theme.colors.secondaryFont};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    width: 60px;
  }
`;
export const Nav = styled.div`
  display: flex;
  gap: 16px;
  flex-grow: 1;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    flex-grow: 0;
  }
`;

export const NavigationLink = styled(NavLink)`
  font-weight: 600;
  text-transform: uppercase;
  padding: 10px;
  border-radius: 30px;
  border: 2px solid transparent;
  font-size: 14px;
  transition: 0.3s ease-out;
  cursor: pointer;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.mainFont};

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.secondaryColor};
    color: ${({ theme }) => theme.colors.secondaryFont};
    transform: scale(1.02);
  }

  &.active {
    border: 2px solid ${({ theme }) => theme.colors.secondaryColor};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    font-size: 12px;
  }
`;

export const HeaderLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
`;
