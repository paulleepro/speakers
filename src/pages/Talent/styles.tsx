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

export const BookTalentWrapper = styled.div`
  border-top: solid 1px ${colors.purpleLiner};
  border-bottom: solid 1px ${colors.purpleLiner};
  border-radius: 0 300px 0 0;
  background-image: linear-gradient(
    to bottom,
    #000000 30%,
    rgba(34, 30, 41, 0.5)
  );
`;

export const KnownForWrapper = styled.div`
  position: relative;
`;

export const SmallImageWrapper = styled.div`
  margin: 0 auto;
  max-width: 375px;
  width: 100%;
`;
