import React, { FC } from "react";
import {
  VirtualText,
  BigText,
  DescriptionText,
  Button,
  StyledContainer,
} from "styles/components";
import { Row, Col } from "react-grid-system";
import { HeroWrapper, HeroBGWrapper } from "./styles";
import { Link } from "react-router-dom";

interface IProps {
  heroDescriptor: string;
  imageUrl: string;
}

const HeroMedium: FC<IProps> = ({ heroDescriptor, imageUrl }) => {
  return (
    <HeroWrapper>
      <StyledContainer fluid>
        <Row>
          <HeroBGWrapper backgroundImage={imageUrl} />
          <Col offset={{ md: 0, lg: 1 }} md={8} lg={6}>
            <VirtualText margin="80px 0 0 0">Virtual Speakers</VirtualText>
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
      </StyledContainer>
    </HeroWrapper>
  );
};

export default HeroMedium;
