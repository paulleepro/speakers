import styled from "styled-components";
import colors from "styles/colors";

export const Select = styled.select<{
  isPlaceholder?: boolean;
  haveValue?: boolean;
}>`
  appearance: none;
  border-radius: 12px;
  border: solid 1px ${colors.purpleLiner};
  background-color: ${(props) =>
    props.haveValue ? colors.primaryPurple : colors.black};

  font-size: 24px;
  font-weight: bold;
  line-height: 1.5;
  letter-spacing: 0.3px;
  color: ${(props) => (props.isPlaceholder ? colors.midGrey : colors.white)};

  padding: 15px 56px 17px 24px;
  outline: none;
  width: 100%;

  option:first-child {
    font-size: 24px;
    font-weight: bold;
    line-height: 1.5;
    letter-spacing: 0.3px;
    color: ${colors.midGrey};
  }

  @media (max-width: 767px) {
    font-size: 18px;
    line-height: 2;
    letter-spacing: 0.23px;
  }
`;
