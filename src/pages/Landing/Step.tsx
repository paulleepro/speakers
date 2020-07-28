import React, { FC } from "react";
import { Box } from "react-basic-blocks";
import { DescriptionText, Divider } from "styles/components";
import { useScreenClass } from "components/Grid";
import colors from "styles/colors";
import { StepWrapper, DescriptionWrapper } from "./styles";

interface IStepProps {
  imageUrl: string;
  step: string;
  description: string;
}

const Step: FC<IStepProps> = ({ imageUrl, step, description }) => {
  const screenClass = useScreenClass();

  return (
    <StepWrapper flexDirection="row" alignItems="self-start">
      <Box margin="10px 0 32px 0">
        <img src={imageUrl} height="40" width="40" alt="swipe" />
      </Box>
      <DescriptionWrapper>
        <DescriptionText weight="bold" noCenterAlign={screenClass !== "xs"}>
          {step}
        </DescriptionText>
        <DescriptionText
          color={colors.midGrey}
          noCenterAlign={screenClass !== "xs"}
        >
          {description}
        </DescriptionText>
        <Divider width="100px" noCenterAlign={screenClass !== "xs"} />
      </DescriptionWrapper>
    </StepWrapper>
  );
};

export default Step;
