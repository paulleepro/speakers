import React, { FC } from "react";
import { Container, Row, Col } from "react-grid-system";
import { VirtualText, BigText, DescriptionText } from "styles/components";

const Title: FC = () => {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col offset={{ lg: 1 }} xs={12} md={9} lg={6}>
            <VirtualText>Virtual Speakers</VirtualText>
            <BigText>How It Works</BigText>
            <DescriptionText margin="0 0 240px 0">
              We bring talent directly to you. Our high-profile speakers are
              available for your next corporate event.
            </DescriptionText>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Title;
