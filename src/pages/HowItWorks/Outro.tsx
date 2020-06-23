import React, { FC } from "react";
import { Container, Row, Col } from "react-grid-system";
import { BigText, DescriptionText } from "styles/components";

const Outro: FC = () => {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col offset={{ lg: 1 }} xs={12} md={10}>
            <BigText margin="100px 0 0 0">In Person Events</BigText>
          </Col>
        </Row>
        <Row>
          <Col offset={{ lg: 1 }} xs={12} md={8} lg={6}>
            <DescriptionText maxWidth="670px">
              Book talent for an in-person corporate event such as a retreat,
              town hall, conference, and more.
            </DescriptionText>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Outro;
