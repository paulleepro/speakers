import React, { FC } from "react";
import {
  VirtualText,
  BigText,
  DescriptionText,
  Button,
  StyledImage,
} from "styles/components";
import { Container, Row, Col } from "react-grid-system";
import { Box } from "react-basic-blocks";

const HeroSmall: FC = () => {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col offset={{ sm: 1 }} xs={12} sm={10}>
            <Box alignItems="center">
              <VirtualText>Virtual Speakers</VirtualText>
              <BigText>
                World class
                <br />
                <u>speakers</u>,<br />
                on demand.
              </BigText>
              <StyledImage src="/images/hero-img-1.png"></StyledImage>
              <DescriptionText>
                Endeavor Virtual Speakers is bringing talent directly to your
                business. Our high-profile speakers are available digitally for
                your next corporate town hall, board meeting, or retreat.
              </DescriptionText>
              <Button margin="40px 0 0 0">Explore Speakers</Button>
            </Box>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeroSmall;
