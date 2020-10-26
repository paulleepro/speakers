import React, { FC } from "react";
import colors from "styles/colors";

interface IProps {
  fill?: string;
}

const Edit: FC<IProps> = ({ fill = colors.primaryPurple }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <g fill="none" fillRule="evenodd">
        <g fill={fill} fillRule="nonzero">
          <g>
            <g>
              <path
                d="M23.68 4.683L19.315.319c-.426-.425-1.117-.425-1.543 0L.32 17.774c-.203.205-.319.482-.319.772v4.364C0 23.512.489 24 1.09 24h4.365c.29 0 .567-.115.77-.32L23.679 6.225c.426-.425.426-1.117 0-1.542zM5.002 21.819H2.182v-2.821L18.546 2.634l2.82 2.821L5.004 21.82z"
                transform="translate(-1367 -193) translate(1103 187) translate(264 6)"
              />
              <path
                d="M19.316 9.049l-4.364-4.364c-.425-.426-1.117-.426-1.543 0-.425.425-.425 1.117 0 1.542l4.364 4.364c.214.212.493.319.772.319.28 0 .559-.107.77-.319.426-.425.426-1.117 0-1.542z"
                transform="translate(-1367 -193) translate(1103 187) translate(264 6)"
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

export default Edit;
