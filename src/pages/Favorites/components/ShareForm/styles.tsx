import styled from "styled-components";
import colors from "../../../../styles/colors";

export const Wrapper = styled.div`
  position: relative;
  margin-top: 24px;
  background-color: ${colors.purpleBgFill};
  height: 200px; // TODO - remove me
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 28px;
  right: 16px;
  background: transparent;
  border: none;
  outline: none;
  padding: 8px;
  cursor: pointer;
`;
