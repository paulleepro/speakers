import React, { FC, lazy, useState } from "react";
import { useHistory } from "react-router";
import { Container, Row, Col, Visible } from "components/Grid";
import { Button } from "styles/components";
import { FormContainer, FormFooter } from "./styles";

const BookingSummary = lazy(() => import("./BookingSummary"));
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
  const history = useHistory();
  const [activeStep, setActiveStep] = useState<number>(0);

  const ActiveForm = FORMS[activeStep].component;

  const goToNextForm = () => {
    setActiveStep((prev) => prev + 1);
  };

  const handleGoBack = () => {
    if (activeStep === 0) {
      history.replace("/explore");
    } else {
      setActiveStep((prev) => prev - 1);
    }
  };

  return (
    <Container fluid>
      <Visible sm md lg>
        <Row>
          <Col offset={{ lg: 1 }} md={12} lg={10}>
            <Stepper activeStep={FORMS[activeStep].key} />
          </Col>
        </Row>
      </Visible>
      <Row>
        <Col offset={{ lg: 1 }} md={12} lg={10}>
          <Row>
            <Col md={12} lg={9}>
              <FormContainer>
                <h3>Let's Get Started!</h3>
                <ActiveForm />
                <FormFooter>
                  <Button onClick={handleGoBack}>Back</Button>
                  <Button onClick={goToNextForm}>Next</Button>
                </FormFooter>
              </FormContainer>
            </Col>
            <Col md={12} lg={3}>
              <BookingSummary />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default TalentBookingNew;
