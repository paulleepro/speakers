import styled from "styled-components";
import colors from "styles/colors";

export const Title = styled.h4<{ active?: boolean }>`
  font-size: 24px;
  font-weight: bold;
  line-height: 1.5;
  letter-spacing: 0.3px;
  color: ${(props) => (props.active ? colors.white : colors.midGrey)};
  position: relative;
  padding-right: 30px;

  button {
    position: absolute;
    top: 8px;
    right: 0;
  }
`;
