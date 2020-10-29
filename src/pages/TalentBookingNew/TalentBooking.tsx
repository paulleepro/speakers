import React, { FC, lazy, useContext } from "react";
import { useHistory } from "react-router";
import { Row, Col, Visible } from "components/Grid";
import { Button } from "styles/components";
import { FormContainer, FormFooter, BackButton, Wrapper } from "./styles";
import { BookingInquiryContext } from "./BookingInquiryContext";

const BookingSummary = lazy(() => import("./components/BookingSummary"));
const Stepper = lazy(() => import("./components/Stepper"));

const EventForm = lazy(() => import("./EventForm"));
const SpeakersForm = lazy(() => import("./SpeakersForm"));
const DetailsForm = lazy(() => import("./DetailsForm"));
const FinishUp = lazy(() => import("./FinishUp"));

const FORMS = [
  { key: "event", component: EventForm },
  { key: "speakers", component: SpeakersForm },
  { key: "details", component: DetailsForm },
  { key: "finish", component: FinishUp },
];

const TalentBookingNew: FC<any> = () => {
  const { currentStep, setCurrentStep } = useContext(BookingInquiryContext);
  const history = useHistory();
  const ActiveForm = FORMS[currentStep].component;

  const goToNextForm = () => {
    setCurrentStep(currentStep + 1);
  };

  const handleGoBack = () => {
    if (currentStep === 0) {
      history.replace("/explore");
    } else {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <Wrapper fluid>
      <Visible sm md lg>
        <Row>
          <Col offset={{ lg: 1 }} md={12} lg={10}>
            <Stepper activeStep={FORMS[currentStep].key} />
          </Col>
        </Row>
      </Visible>
      <Row>
        <Col offset={{ lg: 1 }} md={12} lg={10} style={{ marginBottom: 100 }}>
          <Row>
            <Col md={9}>
              <FormContainer>
                <ActiveForm />
                <FormFooter>
                  <BackButton onClick={handleGoBack}>Back</BackButton>
                  <Button padding="14px 81px" onClick={goToNextForm}>
                    Next
                  </Button>
                </FormFooter>
              </FormContainer>
            </Col>
            <Col md={3}>
              <Visible md lg>
                <BookingSummary />
              </Visible>
            </Col>
          </Row>
        </Col>
      </Row>
    </Wrapper>
  );
};

export default TalentBookingNew;
