import React, { FC } from "react";
import { Row, Col } from "components/Grid";
import {
  VirtualText,
  BigText,
  DescriptionText,
  TopAreaDivider,
  StyledContainer,
} from "styles/components";

const Title: FC = () => {
  return (
    <div>
      <StyledContainer fluid>
        <Row>
          <Col offset={{ lg: 1 }} xs={12} md={9} lg={6}>
            <VirtualText>Virtual Speakers</VirtualText>
            <BigText>How It Works</BigText>
            <DescriptionText margin="0">
              We bring our talent directly to you for your upcoming corporate
              event.
            </DescriptionText>
          </Col>
        </Row>
      </StyledContainer>
      <TopAreaDivider />
    </div>
  );
};

export default Title;
