import React, { FC, useEffect, useState, memo, useRef } from "react";
import styled from "styled-components";

export const Wrapper = styled.div<{ height: number }>`
  position: relative;
  width: 100%;
  height: ${(props) => props.height}px;
`;

export const StyledImg = styled.img<{ borderRadius?: string; opacity: string }>`
  position: absolute;
  width: 100%;
  object-position: 50% 40%;
  object-fit: cover;
  transition: opacity 1s ease-in-out;
  opacity: ${(props) => props.opacity};
  ${(props) =>
    props.borderRadius ? `border-radius: ${props.borderRadius};` : ""}
`;

interface IProps {
  src: string;
  borderRadius?: string;
  height: number;
  alt: string;
  fallbackSrc?: string;
}

const CrossFadeImage: FC<IProps> = ({
  src,
  borderRadius,
  height,
  alt,
  fallbackSrc,
}) => {
  const didMountRef = useRef(false);
  const [data, setData] = useState<{
    firstSrc: string;
    secondSrc: string;
    index: number;
  }>({ firstSrc: src, secondSrc: "", index: 0 });

  useEffect(() => {
    if (didMountRef.current) {
      setData({
        firstSrc: data.index === 0 ? data.firstSrc : src,
        secondSrc: data.index === 1 ? data.secondSrc : src,
        index: data.index === 0 ? 1 : 0,
      });
    } else {
      didMountRef.current = true;
    }
    // eslint-disable-next-line
  }, [src]);

  return (
    <Wrapper height={height}>
      <StyledImg
        src={data.firstSrc}
        borderRadius={borderRadius}
        height={height}
        opacity={data.index === 0 ? "1" : "0"}
        onError={() => {
          if (fallbackSrc && data.firstSrc !== fallbackSrc) {
            setData({ ...data, firstSrc: fallbackSrc });
          }
        }}
      />
      <StyledImg
        src={data.secondSrc}
        borderRadius={borderRadius}
        height={height}
        opacity={data.index === 1 ? "1" : "0"}
        onError={() => {
          if (fallbackSrc && data.secondSrc !== fallbackSrc) {
            setData({ ...data, secondSrc: fallbackSrc });
          }
        }}
      />
    </Wrapper>
  );
};

export default memo(
  CrossFadeImage,
  (prevProps, newProps) => prevProps.src === newProps.src
);
