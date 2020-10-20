import styled from "styled-components";
import colors from "styles/colors";

export const Input = styled.textarea`
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

  padding: 15px 36px 17px 24px;
  outline: none;
  margin-bottom: 16px;
  width: 100%;

  &::placeholder {
    color: ${colors.midGrey};
  }
`;
