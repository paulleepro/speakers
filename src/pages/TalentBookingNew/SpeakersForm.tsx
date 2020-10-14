import React from "react";
import { Container, Row, Col } from "components/Grid";
import QuestionHeader from "./QuestionHeader";
import EventTypes from "./components/EventTypes";
import FocusList from "./components/FocusList";

const SpeakersForm = () => {
  return (
    <Container fluid>
      <Row>
        <Col>
          <QuestionHeader
            order={1}
            title="Tell us about your event"
            description="Choose from our format types and start customizing from there."
          />
          <Row>
            <Col offset={{ md: 1 }}>
              <EventTypes />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col>
          <QuestionHeader
            order={2}
            title="What’s the focus of your event?"
            description="Select the goal that best matches your event."
          />
          <Row>
            <Col offset={{ md: 1 }}>
              <FocusList />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col>
          <QuestionHeader
            order={3}
            title="What topics or themes interest your group?"
            description="Add whichever talking points are most relevant to your group."
          />
          <Row>
            <Col offset={{ md: 1 }}>event types</Col>
          </Row>
        </Col>
      </Row>

      <Row>
        <Col>
          <QuestionHeader
            order={4}
            title="Who is your audience?"
            description="Select which audience type is most applicable."
          />
          <Row>
            <Col offset={{ md: 1 }}>event types</Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col>
          <QuestionHeader
            order={5}
            title="What is your audience size?"
            description="Select the total number of people attending your event."
          />
          <Row>
            <Col offset={{ md: 1 }}>event types</Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col>
          <QuestionHeader
            order={6}
            title="Additional notes"
            description="Use this space to provide additional information around your event. This will help our agents provide better recommendations for your request."
          />
          <Row>
            <Col offset={{ md: 1 }}>event types</Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col>
          <QuestionHeader
            order={7}
            title="Event Name"
            description="This will provide more context for our agents. If you don't have an event name finalized, please share a working title."
          />
          <Row>
            <Col offset={{ md: 1 }}>event types</Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default SpeakersForm;
