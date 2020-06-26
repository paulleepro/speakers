import React, { FC } from "react";
import { Row, Col } from "react-grid-system";
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
              We bring talent directly to you. Our high-profile speakers are
              available for your next corporate event.
            </DescriptionText>
          </Col>
        </Row>
      </StyledContainer>
      <TopAreaDivider />
    </div>
  );
};

export default Title;
