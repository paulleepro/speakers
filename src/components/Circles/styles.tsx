import styled from "styled-components";

export const CirclesWrapper = styled.div`
  position: relative;
`;

export const CirclesContainer = styled.div<{
  top: string;
  size: number;
  maxWidth: string;
  right?: boolean;
  zIndex?: string;
}>`
  position: absolute;
  top: ${(props) => props.top};
  ${(props) => (props.right ? "right: 0;" : "left: 0;")}
  height: ${(props) => props.size}%;
  width: ${(props) => props.size}%;
  max-width: ${(props) => props.maxWidth};
  z-index: ${(props) => props.zIndex || "1"};
`;
