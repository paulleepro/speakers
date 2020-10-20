import React, { FC } from "react";
import colors from "styles/colors";

interface IProps {
  fill?: string;
}

const Search: FC<IProps> = ({ fill = colors.primaryPurple }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <g fill="none" fill-rule="evenodd">
        <g fill={fill} fill-rule="nonzero">
          <g>
            <g>
              <g>
                <g>
                  <g>
                    <g>
                      <path
                        d="M23.807 23.101l-7.287-7.288c1.513-1.68 2.443-3.896 2.443-6.331C18.963 4.254 14.709 0 9.48 0 4.254 0 0 4.254 0 9.482c0 5.227 4.254 9.481 9.481 9.481 2.436 0 4.651-.93 6.332-2.444l7.288 7.288c.098.097.225.146.353.146.128 0 .256-.049.354-.145.194-.196.194-.511 0-.707zm-14.326-5.62c-4.41 0-8-3.588-8-8 0-4.41 3.59-8 8-8 4.412 0 8 3.59 8 8 0 4.412-3.588 8-8 8z"
                        transform="translate(-976 -772) translate(24 171) translate(40 180) translate(4 306) translate(44 93) translate(864 22)"
                      />
                    </g>
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

export default Search;
