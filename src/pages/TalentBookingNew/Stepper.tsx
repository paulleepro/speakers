import React, { FC } from "react";

import { StepperContainer, Step, StepWrapper } from "./styles";

const STEPS = [
  { key: "event", label: "Event" },
  { key: "speakers", label: "Speakers" },
  { key: "details", label: "Details" },
  { key: "finish", label: "Finish Up" },
];

interface IProps {
  activeStep: string;
}

const Stepper: FC<IProps> = ({ activeStep = "event" }) => {
  const activeIndex = STEPS.findIndex((item) => item.key === activeStep) || 0;

  return (
    <StepperContainer>
      {STEPS.map((step, idx) => (
        <StepWrapper>
          <Step
            completed={idx < activeIndex}
            key={step.key}
            active={step.key === activeStep}
          >
            {step.label}
          </Step>
          {/* {STEPS.length - 1 !== idx && <StepLine active={idx <= activeIndex} />} */}
        </StepWrapper>
      ))}
    </StepperContainer>
  );
};

export default Stepper;
