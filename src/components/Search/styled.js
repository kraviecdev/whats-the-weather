import styled, { css, keyframes } from "styled-components";
import { NavLink } from "react-router-dom";
import { ReactComponent as Search } from "./search.svg";
import { ReactComponent as Tiles } from "./tiles_page.svg";

const translateY = keyframes`
  0% {
    opacity: 0;
    transform: transLateY(-20px)
  }
  100% {
    opacity: 1;
    transform: transLateY(0px)
  }
`;

const borderChange = keyframes`
 0% {
   border-radius: 16px;
 }
  100% {
    border-radius: 16px 16px 0 0;
  }
`;

export const SearchWrapper = styled.div`
  position: relative;
  flex-direction: column;
  display: flex;
  width: 100%;
  justify-self: right;
`;
export const SearchInputWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 10px;
  border-radius: 16px;
  background: ${({ theme }) => theme.colors.secondaryColor};
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);

  ${({ visible }) =>
    visible &&
    css`
      animation: ${borderChange} 0.7s ease-in;
      border-radius: 16px 16px 0 0;
    `}
`;

export const SearchInput = styled.input`
  border: none;
  background: transparent;
  outline: none;
  margin: 0 6px;
  width: 100%;
  color: ${({ theme }) => theme.colors.mainFont};
`;

export const SearchIcon = styled(Search)`
  width: 24px;
  fill: ${({ theme }) => theme.colors.secondaryFont};
`;

export const TilesIcon = styled(Tiles)`
  width: 24px;
  fill: ${({ theme }) => theme.colors.mainFont};
`;

export const SearchDropdownWrapper = styled.div`
  border-radius: 0 0 16px 16px;
  padding: 10px;
  position: absolute;
  top: 50px;
  z-index: 1;
  width: 100%;
  background: ${({ theme }) => theme.colors.secondaryColor};
  display: flex;
  flex-direction: column;
  gap: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);

  animation: ${translateY} 0.7s ease-out;
`;

export const SearchNavigationButton = styled(NavLink)`
  padding: 6px;
  cursor: pointer;
  width: 100%;
  text-align: left;
  border-bottom: 1px solid;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.mainFont};

  &:last-of-type {
    border-bottom: none;
  }

  ${({ tiles }) =>
    tiles &&
    css`
      padding: 8px;
      display: flex;
      background: ${({ theme }) => theme.colors.secondaryColor};
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);
      border-radius: 16px;
      width: max-content;
      border-bottom: none;
    `}
`;

export const SearchDropdownInfo = styled.span`
  color: ${({ theme }) => theme.colors.mainFont};
  font-weight: 600;
  line-height: 24px;

  ${({ invalid }) =>
    invalid &&
    css`
      color: ${({ theme }) => theme.colors.errorColor};
    `}
`;
