import React, { FC } from "react";
import { CirclesWrapper } from "./styles";

interface IProps {
  color: string;
  top: string;
}

const Circles: FC<IProps> = ({ color, top }) => {
  return (
    <CirclesWrapper top={top}>
      <svg viewBox="0 0 200 200">
        <circle
          cx="0"
          cy="100"
          r="15"
          strokeWidth="0.3"
          strokeDasharray={1}
          stroke={color}
          fill="transparent"
        />
        <circle
          cx="0"
          cy="100"
          r="40"
          strokeWidth="0.3"
          strokeDasharray={1}
          stroke={color}
          fill="transparent"
        />
        <circle
          cx="0"
          cy="100"
          r="70"
          strokeWidth="0.3"
          strokeDasharray={1}
          stroke={color}
          fill="transparent"
        />
        <circle
          cx="0"
          cy="100"
          r="100"
          strokeWidth="0.3"
          strokeDasharray={1}
          stroke={color}
          fill="transparent"
        />
      </svg>
    </CirclesWrapper>
  );
};

export default Circles;
