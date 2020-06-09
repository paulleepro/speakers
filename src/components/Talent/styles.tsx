import styled from "styled-components";
import colors from "styles/colors";

export const StyledUl = styled.ul<{ color?: string }>`
  margin: 0;

  li {
    color: ${(props) => props.color || colors.midGrey};
    margin-bottom: 10px;
  }
`;

export const AccordionTextBox = styled.div<{ height: string }>`
  ${(props) => `height: ${props.height};`}
  ${(props) => (props.height !== "auto" ? "margin-top: 10px;" : "")};
  overflow: hidden;
`;
