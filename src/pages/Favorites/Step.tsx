import React, { FC } from "react";

import { StepWrapper, StepTitle } from "./styles";

interface IStepProps {
  imageUrl: string;
  step: string;
  margin?: string;
}

const Step: FC<IStepProps> = ({ imageUrl, step, margin }) => {
  return (
    <StepWrapper>
      <img src={imageUrl} height="56" width="56" alt="swipe" />
      <StepTitle>{step}</StepTitle>
    </StepWrapper>
  );
};

export default Step;
