import React, { FC } from "react";
import {
  VirtualText,
  BigText,
  DescriptionText,
  Button,
} from "styles/components";
import { Container, Row, Col } from "react-grid-system";
import { HeroWrapper } from "./styles";
import { Link } from "react-router-dom";

interface IProps {
  heroDescriptor: string;
  imageUrl: string;
}

const HeroMedium: FC<IProps> = ({ heroDescriptor, imageUrl }) => {
  return (
    <HeroWrapper backgroundImage={imageUrl}>
      <Container fluid>
        <Row>
          <Col offset={{ md: 1 }} md={8} lg={6}>
            <VirtualText>Virtual Speakers</VirtualText>
            <BigText>
              World class
              <br />
              <u>{heroDescriptor}</u>,<br />
              on demand.
            </BigText>
            <DescriptionText>
              Endeavor Virtual Speakers is bringing talent directly to your
              business. Our high-profile speakers are available digitally for
              your next corporate town hall, board meeting, or retreat.
            </DescriptionText>
            <Link to="/explore">
              <Button margin="40px 0 0 0">Explore Speakers</Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </HeroWrapper>
  );
};

export default HeroMedium;
