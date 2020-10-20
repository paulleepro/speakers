import styled from "styled-components";
import colors from "styles/colors";

export const DropIcon = styled.span`
  display: flex;
  :before {
    width: 0;
    height: 0;
    border-top: 8px solid ${colors.primaryPurple};
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    content: "";
    font-size: 0px;
    vertical-align: middle;
    margin-left: 5px;
    line-height: 22px;
  }
`;

export const AddAnother = styled.button`
  text-align: left;
  width: 100%;
  font-size: 18px;
  font-weight: bold;
  line-height: 2;
  letter-spacing: 0.23px;
  color: ${colors.white};
  padding: 16px 136px 16px 24px;
  object-fit: contain;
  border-radius: 12px;
  border: solid 1px ${colors.purpleLiner};
  background-color: ${colors.purpleBgFill};
  outline: none;
`;
