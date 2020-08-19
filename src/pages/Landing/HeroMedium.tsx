import React, { FC } from "react";
import {
  VirtualText,
  DescriptionText,
  Button,
  StyledContainer,
  LargeText,
} from "styles/components";
import { Row, Col } from "components/Grid";
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
          <HeroBGWrapper>
            <img src={imageUrl} alt="hero" />
          </HeroBGWrapper>
          <Col offset={{ md: 0, lg: 1 }} md={8} lg={5}>
            <VirtualText margin="100px 0 0 0">Virtual Performers</VirtualText>
            <LargeText>
              World class
              <br />
              <u>{heroDescriptor}</u>,<br />
              on demand.
            </LargeText>
            <DescriptionText margin="0 17% 0 0">
              Endeavor Virtual Performers is bringing talent directly to your
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
