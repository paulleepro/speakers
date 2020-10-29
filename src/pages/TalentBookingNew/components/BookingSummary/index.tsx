import React, { useContext } from "react";

import { Button } from "styles/components";
import FormSummary from "../FormSummary";

import { Wrapper } from "./styles";
import { STEP_FORMS } from "../../constants";
import { BookingInquiryContext } from "../../BookingInquiryContext";

const BookingSummary = () => {
  const { currentStep } = useContext(BookingInquiryContext);

  return (
    <Wrapper>
      {[...new Array(currentStep + 1)].map((item, idx) => (
        <FormSummary key={idx} form={STEP_FORMS[idx]} step={idx} />
      ))}
      <Button variant="outline" width="100%">
        Save for later
      </Button>
    </Wrapper>
  );
};

export default BookingSummary;
