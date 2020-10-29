import styled from "styled-components";
import colors from "styles/colors";
import { Box } from "react-basic-blocks";

export const Wrapper = styled(Box)<{ margin?: string }>`
  position: relative;
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
  border-radius: 12px;
  border: solid 1px ${colors.purpleLiner};
  overflow: hidden;
  background-color: ${colors.black};
  display: flex;
  align-items: center;
`;

export const IconWrapper = styled(Box)`
  padding: 0 24px 0 8px;
  margin: auto;
  display: flex;
  justify-content: center;
`;

export const Input = styled.input<{
  dense?: boolean;
}>`
  flex-grow: 1;
  background-color: transparent;
  border: none;
  font-size: 24px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: 0.3px;
  color: ${colors.white};
  padding: ${(props) =>
    props.dense ? "7px 8px 9px 16px" : "15px 8px 17px 24px"};
  outline: none;
  width: 100%;

  &::placeholder {
    color: ${colors.midGrey};
  }
`;
