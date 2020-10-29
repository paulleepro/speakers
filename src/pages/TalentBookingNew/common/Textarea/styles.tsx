import styled from "styled-components";
import colors from "styles/colors";

export const Input = styled.textarea`
  border-radius: 12px;
  border: solid 1px ${colors.purpleLiner};
  background-color: ${colors.black};

  font-size: 24px;
  font-weight: bold;
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

  @media (max-width: 767px) {
    margin-bottom: 8px;
    font-size: 18px;
    line-height: 2;
    letter-spacing: 0.23px;
  }
  &:active,
  &:focus {
    border: solid 1px ${colors.primaryPurple};
  }
`;
