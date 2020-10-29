import React, { FC, useContext } from "react";
import EditIcon from "assets/Icons/Edit";
import { Button } from "styles/components";
import { Wrapper, Title, Border } from "./styles";
import { BookingInquiryContext } from "../../BookingInquiryContext";
import { EVENT_FORM_FIELDS } from "../../constants";

import FieldSection from "./FieldSection";

const getKeyValue = <T extends object, U extends keyof T>(key: U) => (obj: T) =>
  obj[key];

const FormSummary: FC<any> = ({ form, step }) => {
  const { bookingInquiry, currentStep, setCurrentStep } = useContext(
    BookingInquiryContext
  );
  const { title, fields } = form;

  const handleClick = () => {
    setCurrentStep(step);
  };

  return (
    <Wrapper>
      <Title>
        {title}
        {step < currentStep && (
          <Button
            padding="0"
            margin="0"
            backgroundColor="transparent"
            onClick={handleClick}
          >
            <EditIcon />
          </Button>
        )}
      </Title>
      {Object.keys(fields).map((fieldName, idx) => {
        if (!getKeyValue(fieldName as never)(bookingInquiry)) {
          return null;
        }

        return (
          <FieldSection
            key={idx}
            order={idx + 1}
            label={getKeyValue(fieldName as never)(EVENT_FORM_FIELDS)}
            value={getKeyValue(fieldName as never)(bookingInquiry)}
          />
        );
      })}
      <Border />
    </Wrapper>
  );
};

export default FormSummary;
