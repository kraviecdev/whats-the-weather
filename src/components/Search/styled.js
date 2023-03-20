import styled, { css, keyframes } from "styled-components";
import { Search } from "@styled-icons/bootstrap/Search";

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

const dropDownSearch = keyframes`
  from {
    max-width: 0;
    display: none;
  }
  to {
    max-width: 300px;
    display: block;
  }
`;

export const SearchWrapper = styled.div`
  position: relative;
  flex-direction: column;
  display: flex;
  max-width: max-content;
  justify-self: right;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    font-size: 12px;
  }
`;

export const SearchIcon = styled(Search)`
  width: 20px;
  color: ${({ theme }) => theme.colors.secondaryFont};
  cursor: pointer;
`;
export const SearchInputWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 30px;
  background: ${({ theme }) => theme.colors.secondaryColor};
`;

export const SearchInput = styled.input`
  border: none;
  background: transparent;
  outline: none;
  margin: 0 6px;
  color: ${({ theme }) => theme.colors.mainFont};
  max-width: 0;
  display: none;

  ${({ visible }) =>
    visible &&
    css`
      animation: ${dropDownSearch} 0.3s linear;
      max-width: 300px;
      display: block;
    `}
`;

export const SearchDropdownWrapper = styled.div`
  position: absolute;
  top: 50px;
  z-index: 1;
  width: 100%;

  ${({ visibility }) =>
    visibility &&
    css`
      display: none;
    `}
`;

export const SearchDropdownInfoList = styled.ul`
  padding: 0;
  margin: 0;
  list-style-type: none;
  display: grid;
  grid-auto-rows: max-content;
  gap: 6px;
`;

export const SearchDropdownInfoItem = styled.li`
  border: 1px solid ${({ theme }) => theme.colors.mainFont};
  border-radius: 5px;

  animation: ${translateY} 0.7s ease-out;
`;

export const SearchDropdownInfoButton = styled.button`
  background: none;
  cursor: pointer;
  width: 100%;
  text-align: left;
  border: none;
  color: ${({ theme }) => theme.colors.mainFont};
  display: grid;
  grid-auto-rows: max-content;
  gap: 2px;
`;

export const SearchDropdownInfo = styled.span`
  font-size: 14px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    font-size: 12px;
  }

  ${({ cityName }) =>
    cityName &&
    css`
      font-size: 16px;
      font-weight: 600;

      @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        font-size: 14px;
      }
    `}
`;
