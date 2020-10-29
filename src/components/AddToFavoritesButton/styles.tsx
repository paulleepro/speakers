import styled from "styled-components";

export const StarWrapper = styled.button`
  border: none;
  outline: none;
  background: transparent;
  width: 36px;
  height: 36px;
  padding: 6px;
  position: absolute;
  bottom: 0px;
  left: 10px;
  cursor: pointer;

  @media (max-width: 767px) {
    left: 8px;
  }

  svg {
    filter: drop-shadow(0 0 3px rgba(0, 0, 0, 0.65));
  }
`;
