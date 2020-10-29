import React, { FC } from "react";
import colors from "styles/colors";

interface IProps {
  fill?: string;
}

const Close: FC<IProps> = ({ fill = colors.primaryPurple }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <defs>
        <filter id="zxkr6nl61a">
          <feColorMatrix
            in="SourceGraphic"
            values="0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 1.000000 0"
          />
        </filter>
      </defs>
      <g fill="none" fill-rule="evenodd">
        <g>
          <g>
            <g>
              <g>
                <g
                  filter="url(#zxkr6nl61a)"
                  transform="translate(-976 -1108) translate(24 171) translate(40 180) translate(4 558) translate(509 177)"
                >
                  <g fill={fill} fill-rule="nonzero">
                    <path
                      d="M1.233 23.93c-.315 0-.63-.12-.87-.362-.48-.48-.48-1.26 0-1.741L21.83.36c.48-.481 1.26-.481 1.74 0 .482.48.482 1.26 0 1.74L2.106 23.569c-.241.24-.557.361-.872.361z"
                      transform="translate(399 22)"
                    />
                    <path
                      d="M22.701 23.93c-.315 0-.63-.12-.87-.362L.364 2.102C-.117 1.62-.117.842.364.36c.48-.481 1.26-.481 1.74 0l21.467 21.466c.48.48.48 1.26 0 1.74-.241.24-.556.362-.87.362z"
                      transform="translate(399 22)"
                    />
                  </g>
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

export default Close;
