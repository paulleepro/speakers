import React, { FC } from "react";
import { CirclesWrapper, CirclesContainer } from "./styles";

interface IProps {
  color: string;
  top: string;
  size: number;
  maxWidth: string;
  right?: boolean;
  zIndex?: string;
}

const Circles: FC<IProps> = ({ color, top, size, maxWidth, right, zIndex }) => {
  return (
    <CirclesWrapper>
      <CirclesContainer
        top={top}
        size={size}
        maxWidth={maxWidth}
        right={right}
        zIndex={zIndex}
      >
        <svg viewBox="0 0 100 200">
          <circle
            cx={right ? "100" : "0"}
            cy="100"
            r="15"
            strokeWidth="0.3"
            strokeDasharray={1}
            stroke={color}
            fill="transparent"
          />
          <circle
            cx={right ? "100" : "0"}
            cy="100"
            r="40"
            strokeWidth="0.3"
            strokeDasharray={1}
            stroke={color}
            fill="transparent"
          />
          <circle
            cx={right ? "100" : "0"}
            cy="100"
            r="70"
            strokeWidth="0.3"
            strokeDasharray={1}
            stroke={color}
            fill="transparent"
          />
          <circle
            cx={right ? "100" : "0"}
            cy="100"
            r="100"
            strokeWidth="0.3"
            strokeDasharray={1}
            stroke={color}
            fill="transparent"
          />
        </svg>
      </CirclesContainer>
    </CirclesWrapper>
  );
};

export default Circles;
