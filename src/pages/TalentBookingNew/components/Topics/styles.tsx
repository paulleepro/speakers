import styled from "styled-components";
import colors from "styles/colors";

export const AddAnother = styled.button`
  text-align: left;
  width: 100%;
  font-size: 24px;
  line-height: 1.5;
  letter-spacing: 0.3px;
  font-weight: bold;
  color: ${colors.white};
  padding: 15px 115px 17px 24px;
  border-radius: 12px;
  border: solid 1px ${colors.purpleLiner};
  background-color: ${colors.purpleBgFill};
  outline: none;
  cursor: pointer;

  @media (max-width: 767px) {
    font-size: 18px;
    padding: 16px 136px 16px 24px;
    line-height: 2;
    letter-spacing: 0.23px;
  }
`;
