import styled from "styled-components";

export const CirclesWrapper = styled.div<{ top: string }>`
  position: absolute;
  top: ${(props) => props.top};
  left: 0;
  width: 200%;
  height: 200%;
  z-index: 1;
`;
