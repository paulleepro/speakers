import styled from "styled-components";

export const SeeAllContainer = styled.div<{ margin?: string }>`
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
  padding: 0 0 12px 0;
  height: 100%;
  display: flex;
  flex-direction: row;
  cursor: pointer;
  justify-content: flex-end;
  align-items: flex-end;

  @media (max-width: 1023px) {
    justify-content: flex-start;
  }
`;
