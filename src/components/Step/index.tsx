import React, { FC } from "react";
import { Box } from "react-basic-blocks";
import { DescriptionText, HeaderText } from "styles/components";
import colors from "styles/colors";
import { StepWrapper, DescriptionWrapper } from "./styles";

interface IStepProps {
  imageUrl: string;
  step: string;
  description: string;
  margin?: string;
}

const Step: FC<IStepProps> = ({ imageUrl, step, description, margin }) => (
  <StepWrapper flexDirection="row" margin={margin} alignItems="self-start">
    <Box
      margin="0 0 32px 0"
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
    <DescriptionWrapper>
      <HeaderText>{step}</HeaderText>
      <DescriptionText color={colors.midGrey}>{description}</DescriptionText>
    </DescriptionWrapper>
  </StepWrapper>
);

export default Step;
