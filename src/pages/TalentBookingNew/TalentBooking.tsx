import React, { FC, lazy, useContext } from "react";
import { useHistory } from "react-router";
import { Row, Col, Visible } from "components/Grid";
import { Button } from "styles/components";
import { useAuth } from "context/AuthContext";

import {
  FormContainer,
  FormFooter,
  BackButton,
  Wrapper,
  ScrollWrapper,
} from "./styles";
import { BookingInquiryContext } from "./BookingInquiryContext";

const BookingSummary = lazy(() => import("./components/BookingSummary"));
const Stepper = lazy(() => import("./components/Stepper"));
const EventForm = lazy(() => import("./steps/Event"));
const SpeakersForm = lazy(() => import("./steps/Speakers"));
const DetailsForm = lazy(() => import("./steps/Details"));
const FinishUp = lazy(() => import("./steps/FinishUp"));
const Confirmation = lazy(() => import("./steps/Confirmation"));

const FORMS = [
  { key: "event", component: EventForm },
  { key: "speakers", component: SpeakersForm },
  { key: "details", component: DetailsForm },
  { key: "finish", component: FinishUp },
];

const TalentBookingNew: FC<any> = () => {
  const { currentStep, setCurrentStep } = useContext(BookingInquiryContext);
  const history = useHistory();
  const { isAuthenticated } = useAuth();

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

  const handleGoToStep = (step: number) => {
    setCurrentStep(step);
  };

  if (isAuthenticated && currentStep > 2) {
    return (
      <Wrapper fluid>
        <Row>
          <Col offset={{ lg: 1 }} md={12} lg={10} style={{ marginBottom: 100 }}>
            <Confirmation />
          </Col>
        </Row>
      </Wrapper>
    );
  }

  return (
    <Wrapper fluid>
      <Visible
        sm
        md
        lg
        style={{
          position: "sticky",
          top: 0,
          zIndex: 10,
        }}
      >
        <Row>
          <Col offset={{ lg: 1 }} md={12} lg={10}>
            <Stepper
              activeStep={FORMS[currentStep].key}
              goToStep={handleGoToStep}
            />
          </Col>
        </Row>
      </Visible>
      <Row>
        <Col offset={{ lg: 1 }} md={12} lg={10} style={{ marginBottom: 100 }}>
          <Row>
            <Col
              md={9}
              style={{
                maxHeight: "90vh",
              }}
            >
              <ScrollWrapper>
                <FormContainer>
                  <ActiveForm />
                  <FormFooter>
                    <BackButton onClick={handleGoBack}>Back</BackButton>
                    <Button padding="14px 81px" onClick={goToNextForm}>
                      Next
                    </Button>
                  </FormFooter>
                </FormContainer>
              </ScrollWrapper>
            </Col>
            <Col
              md={3}
              style={{
                maxHeight: "90vh",
              }}
            >
              <ScrollWrapper>
                <Visible md lg>
                  <BookingSummary />
                </Visible>
              </ScrollWrapper>
            </Col>
          </Row>
        </Col>
      </Row>
    </Wrapper>
  );
};

export default TalentBookingNew;
