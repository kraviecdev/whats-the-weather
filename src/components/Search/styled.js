import styled, { css, keyframes } from "styled-components";
import { ReactComponent as Search } from "./search.svg";

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

export const SearchWrapper = styled.div`
  position: relative;
  flex-direction: column;
  display: flex;
  max-width: 100%;
  justify-self: right;
`;
export const SearchInputWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 16px;
  background: ${({ theme }) => theme.colors.secondaryColor};

  ${({ visible }) =>
    visible &&
    css`
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

export const SearchDropdownWrapper = styled.div`
  display: none;

  ${({ visible }) =>
    visible &&
    css`
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

      animation: ${translateY} 0.7s ease-out;
    `}
`;

export const SearchDropdownButton = styled.button`
  background: none;
  padding: 6px;
  cursor: pointer;
  width: 100%;
  text-align: left;
  border-top: none;
  border-right: none;
  border-bottom: 1px solid;
  border-left: none;

  &:last-of-type {
    border-bottom: none;
  }
`;

export const SearchDropdownInfo = styled.span`
  color: ${({ theme }) => theme.colors.mainFont};
  font-weight: 600;
  line-height: 24px;
`;
