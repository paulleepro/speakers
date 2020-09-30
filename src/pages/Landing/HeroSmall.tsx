import React, { FC, lazy } from "react";
import {
  VirtualText,
  BigText,
  DescriptionText,
  Button,
} from "styles/components";
import { Container, Row, Col } from "components/Grid";
import { Box } from "react-basic-blocks";
import { Link } from "react-router-dom";
import LazyWrapper from "components/LazyWrapper";

const StyledImage = lazy(() => import("components/StyledImage"));

interface IProps {
  heroDescriptor: string;
  imageUrl: string;
}

const HeroSmall: FC<IProps> = ({ heroDescriptor, imageUrl }) => {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col offset={{ sm: 1 }} xs={12} sm={10}>
            <Box alignItems="center">
              <VirtualText>Virtual Performers</VirtualText>
              <BigText>
                World class
                <br />
                <u>{heroDescriptor}</u>,<br />
                on demand.
              </BigText>
              <LazyWrapper>
                <StyledImage
                  src={imageUrl}
                  boxShadow="50px 50px 24px 0 rgba(0,0,0,0.50)"
                />
              </LazyWrapper>
              <DescriptionText margin="25px">
                Endeavor Virtual Performers is bringing talent directly to your
                business. Our high-profile speakers are available digitally for
                your next corporate town hall, board meeting, or retreat.
              </DescriptionText>
              <Link to="/explore">
                <Button margin="40px 0 0 0">Explore Speakers</Button>
              </Link>
            </Box>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeroSmall;
