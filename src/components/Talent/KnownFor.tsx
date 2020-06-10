import React, { FC } from "react";
import { DescriptionText, Divider } from "styles/components";
import { Box } from "react-basic-blocks";
import colors from "styles/colors";
import { StyledUl } from "./styles";

interface IProps {
  bulletPoints: string[];
}

const KnownFor: FC<IProps> = ({ bulletPoints }) => {
  return (
    <Box>
      <DescriptionText>Known For:</DescriptionText>
      <Divider width="200px" />
      <StyledUl>
        {bulletPoints.map((x, i) => (
          <li key={`bullet-point-${i}`}>
            <DescriptionText color={colors.midGrey} noCenterAlign>
              {x}
            </DescriptionText>
          </li>
        ))}
      </StyledUl>
    </Box>
  );
};

export default KnownFor;
