import React, { FC } from "react";
import {
  VirtualText,
  BigText,
  DescriptionText,
  Button,
} from "styles/components";
import { Container, Row, Col } from "react-grid-system";
import { HeroWrapper } from "./styles";

const HeroMedium: FC = () => {
  return (
    <HeroWrapper>
      <Container fluid>
        <Row>
          <Col offset={{ md: 1 }} md={8} lg={6}>
            <VirtualText>Virtual Speakers</VirtualText>
            <BigText>
              World class
              <br />
              <u>speakers</u>,<br />
              on demand.
            </BigText>
            <DescriptionText>
              Endeavor Virtual Speakers is bringing talent directly to your
              business. Our high-profile speakers are available digitally for
              your next corporate town hall, board meeting, or retreat.
            </DescriptionText>
            <Button margin="40px 0 0 0">Explore Speakers</Button>
          </Col>
        </Row>
      </Container>
    </HeroWrapper>
  );
};

export default HeroMedium;
