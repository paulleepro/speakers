import React, { FC, lazy, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "components/Grid";
import { Button } from "styles/components";
import { FormContainer, FormFooter } from "./styles";

const BookingSummary = lazy(() => import("./BookingSummary"));
const Stepper = lazy(() => import("./Stepper"));

const EventForm = lazy(() => import("./EventForm"));
const SpeakersForm = lazy(() => import("./SpeakersForm"));
const DetailsForm = lazy(() => import("./DetailsForm"));
const FinishUp = lazy(() => import("./FinishUp"));

interface Form {
  [key: string]: any;
}

const FORMS: Form = {
  event: EventForm,
  speakers: SpeakersForm,
  details: DetailsForm,
  finish: FinishUp,
};

const TalentBookingNew: FC<any> = () => {
  const [activeStep] = useState<string>("speakers");

  const ActiveForm = FORMS[activeStep];

  return (
    <Container fluid>
      <Row>
        <Col offset={{ lg: 1 }} md={12} lg={10}>
          <Stepper activeStep={activeStep} />
        </Col>
      </Row>
      <Row>
        <Col offset={{ lg: 1 }} md={12} lg={10}>
          <Row>
            <Col md={12} lg={9}>
              <FormContainer>
                <h3>Let's Get Started!</h3>
                <ActiveForm />
                <FormFooter>
                  <Link to="/explore">Back</Link>
                  <Button>Next</Button>
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
