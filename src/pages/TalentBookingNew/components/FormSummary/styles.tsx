import styled from "styled-components";
import colors from "styles/colors";

export const Title = styled.h4`
  font-size: 24px;
  font-weight: bold;
  line-height: 1.5;
  letter-spacing: 0.3px;
  color: ${colors.white};
  position: relative;
  padding-right: 30px;

  button {
    position: absolute;
    top: 8px;
    right: 0;
  }
`;

export const Field = styled.span`
  font-size: 16px;
  font-weight: 600;
  line-height: 1.5;
  letter-spacing: 0.2px;
  color: ${colors.white};
  margin-top: 4px;

  span {
    color: ${colors.midGrey};
    margin-right: 3px;
  }
`;

export const Border = styled.hr`
  width: 100%;
  height: 1px;
  background-color: #2c2832;
  border: none;
  margin: 16px 0 32px 0;
`;
