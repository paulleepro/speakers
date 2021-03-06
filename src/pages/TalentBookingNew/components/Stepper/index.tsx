import React, { FC, Fragment } from "react";

import { Wrapper, StepItem, StepConnector } from "./styles";

const STEPS = [
  { key: "event", label: "Event" },
  { key: "speakers", label: "Speakers" },
  { key: "details", label: "Details" },
  { key: "finish", label: "Finish Up" },
];

interface IProps {
  activeStep: string;
}

const Stepper: FC<IProps> = ({ activeStep }) => {
  const activeIndex = STEPS.findIndex((item) => item.key === activeStep) || 0;

  return (
    <Wrapper>
      {STEPS.map((step, idx) => (
        <Fragment key={step.key}>
          {idx !== 0 && <StepConnector completed={idx <= activeIndex} />}
          <StepItem active={step.key === activeStep}>{step.label}</StepItem>
        </Fragment>
      ))}
    </Wrapper>
  );
};

export default Stepper;
