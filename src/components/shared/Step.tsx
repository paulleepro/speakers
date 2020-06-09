import React, { FC } from "react";
import { Box } from "react-basic-blocks";
import { DescriptionText, HeaderText, Divider } from "styles/components";
import colors from "styles/colors";

interface IStepProps {
  imageUrl: string;
  step: string;
  description: string;
  margin?: string;
}

const Step: FC<IStepProps> = ({ imageUrl, step, description, margin }) => (
  <Box flexDirection="row" margin={margin}>
    <Box
      width="80px"
      height="80px"
      borderRadius="40px"
      backgroundColor={colors.purpleLiner}
      alignItems="center"
      justifyContent="center"
      flex="0 0 auto"
    >
      <img src={imageUrl} height="40" width="40" alt="swipe" />
    </Box>
    <Box margin="0 0 0 45px">
      <HeaderText noCenterAlign>{step}</HeaderText>
      <DescriptionText color={colors.midGrey} noCenterAlign>
        {description}
      </DescriptionText>
      <Divider width="100px" />
    </Box>
  </Box>
);

export default Step;
