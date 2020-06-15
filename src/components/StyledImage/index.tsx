import React, { FC, useState } from "react";
import styled from "styled-components";

export const StyledImg = styled.img<{ borderRadius?: string }>`
  width: 100%;
  object-position: 50% 40%;
  object-fit: cover;
  transition: opacity 1s ease-in-out;
  ${(props) =>
    props.borderRadius ? `border-radius: ${props.borderRadius};` : ""}
`;

interface IProps {
  src: string;
  borderRadius?: string;
  height?: number;
  alt?: string;
  fallbackSrc?: string;
}

const StyledImage: FC<IProps> = ({
  src,
  borderRadius,
  height,
  alt,
  fallbackSrc,
}) => {
  const [imgSrc, setImgSrc] = useState<string>(src);
  return (
    <StyledImg
      src={imgSrc}
      borderRadius={borderRadius}
      height={height}
      alt={alt}
      onError={() => {
        if (fallbackSrc && imgSrc !== fallbackSrc) {
          setImgSrc(fallbackSrc);
        }
      }}
    />
  );
};

export default StyledImage;
