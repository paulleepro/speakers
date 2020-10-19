import styled from "styled-components";
import colors from "styles/colors";
import { Box } from "react-basic-blocks";

export const Wrapper = styled(Box)<{ margin?: string }>`
  position: relative;
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
`;

export const IconWrapper = styled(Box)`
  position: absolute;
  right: 24px;
  top: 0;
  bottom: 0;
  margin: auto;
  display: flex;
  justify-content: center;
`;

export const Input = styled.input`
  object-fit: contain;
  border-radius: 12px;
  border: solid 1px ${colors.purpleLiner};
  background-color: ${colors.black};

  font-size: 24px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: 0.3px;
  color: ${colors.white};

  padding: 15px 56px 17px 24px;
  outline: none;
  width: 100%;

  &::placeholder {
    color: ${colors.midGrey};
  }
`;
