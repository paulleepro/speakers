import styled from "styled-components";

export const ItemImage = styled.div<{
  imageUrl?: string;
  width: number;
  height: number;
  borderRadius: string;
}>`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 70%,
      rgba(0, 0, 0, 0.5) 95%
    ),
    url(${(props) => props.imageUrl});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: ${(props) => props.borderRadius};
`;
