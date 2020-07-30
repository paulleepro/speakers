import React, { FC } from "react";
import { Row, Col } from "components/Grid";
import { BigText, DescriptionText, StyledContainer } from "styles/components";

const Outro: FC = () => {
  return (
    <div>
      <StyledContainer fluid>
        <Row>
          <Col offset={{ lg: 1 }} xs={12} md={10}>
            <BigText margin="100px 0 0 0">In-Person Events</BigText>
          </Col>
        </Row>
        <Row>
          <Col offset={{ lg: 1 }} xs={12} md={8} lg={6}>
            <DescriptionText maxWidth="670px">
              Seamlessly book talent for any in-person corporate event, varying
              from a team retreat, all-hands meeting, industry conference, and
              more.
            </DescriptionText>
          </Col>
        </Row>
      </StyledContainer>
    </div>
  );
};

export default Outro;
