import React, { FC } from "react";
import styled from "styled-components";
import colors from "styles/colors";

export const Wrapper = styled.div`
  position: relative;
`;

export const Gradient = styled.div<{
  borderRadius: string;
  width: string;
  height: string;
}>`
  position: absolute;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: 0 0 ${(props) => props.borderRadius} 0;
  background-image: linear-gradient(
    to bottom,
    rgba(34, 30, 41, 0),
    ${colors.purpleBgFill}
  );
`;

interface IProps {
  borderRadius: string;
  width: string;
  height: string;
}

const TopLeftGradient: FC<IProps> = ({ borderRadius, width, height }) => (
  <Wrapper>
    <Gradient height={height} width={width} borderRadius={borderRadius} />
  </Wrapper>
);

export default TopLeftGradient;
