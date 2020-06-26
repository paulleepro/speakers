import styled from "styled-components";
import colors from "styles/colors";
import ClickAwayListener from "react-click-away-listener";

export const Input = styled.input<{ squareBottom?: boolean }>`
  background-color: ${colors.black};
  border: 1px solid ${colors.midGrey};
  border-radius: ${(props) => (props.squareBottom ? "12px 12px 0 0" : "12px")};
  outline: none;
  padding: 14px 45px 14px 24px;
  width: 100%;

  font-size: 16px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: 0.2px;
  color: #ffffff;

  &::placeholder {
    color: ${colors.midGrey};
  }
`;

export const SearchWrapper = styled.div`
  margin-top: 32px;
`;

export const AutocompleteWrapper = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
`;

export const AutocompleteResults = styled.div`
  position: absolute;
  border-top: none;
  z-index: 99;
  top: 100%;
  left: 0;
  right: 0;
  background-color: ${colors.darkPurpleFill};
  border-radius: 0 0 12px 12px;

  div {
    padding: 10px 24px;
    cursor: pointer;
    border: 1px solid ${colors.midGrey};
    border-top: none;
    font-size: 16px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 2;
    letter-spacing: 0.2px;
  }

  div:last-child {
    border-radius: 0 0 12px 12px;
  }

  div:hover {
    background-color: ${colors.purpleBgFill};
  }
`;

export const SearchResultsWrapper = styled.div`
  margin-bottom: 100px;
`;

export const StyledClickAwayListener = styled(ClickAwayListener)`
  width: 100%;
`;
