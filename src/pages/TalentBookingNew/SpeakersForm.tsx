import React, { useState } from "react";
import { Container, Row, Col } from "components/Grid";

import QuestionHeader from "./QuestionHeader";
import InputText from "./common/InputText";
import Textarea from "./common/Textarea";

const SpeakersForm = () => {
  const [searchInput, setSearchInput] = useState("");
  const [notes, setNotes] = useState("");

  const handleSearchChange = (e: any): void => {
    setSearchInput(e.target.value);
  };

  const handleNotesChange = (e: any): void => {
    setNotes(e.target.value);
  };

  return (
    <Container fluid>
      <Row>
        <Col>
          <QuestionHeader
            order={1}
            title="Add speakers you’d like for your event"
            description="Add speakers directly from your Favorites List or take a moment to search some more"
          />
          <QuestionHeader
            order={1}
            title="Add from your Favorites List"
            description="Adding from this list will help you complete your booking request faster."
          />
          <Row>
            <Col offset={{ md: 1 }}>Sept Short List</Col>
          </Row>
          <QuestionHeader
            order={1}
            title="Add more speakers?"
            description="Have more speakers in mind? Add their name(s) below. "
          />
          <Row>
            <Col offset={{ md: 1 }}>
              <InputText
                name="search"
                value={searchInput}
                onChange={handleSearchChange}
              />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col>
          <QuestionHeader
            order={2}
            title="Which types of speakers are you considering?"
            description="Select up to three."
          />
          <Row>
            <Col offset={{ md: 1 }}>Choose a Speaker Type</Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col>
          <QuestionHeader
            order={3}
            title="Have you or your organization hosted speakers in the past?"
            description="Add any relevant past speakers you’ve hosted for your organization."
          />
          <Row>
            <Col offset={{ md: 1 }}>Add their name(s) here...</Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col>
          <QuestionHeader
            order={4}
            title="Any additional notes or comments?"
            description="Take a moment to share any thoughts or special notes you have about your preferred speaker(s)."
          />
          <Row>
            <Col offset={{ md: 1 }}>
              <Textarea
                rows={3}
                name="notes"
                value={notes}
                onChange={handleNotesChange}
                placeholder="Additional notes..."
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default SpeakersForm;
