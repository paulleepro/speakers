import React, { FC } from "react";
import {
  VirtualText,
  BigText,
  DescriptionText,
  Button,
} from "styles/components";
import { Container, Row, Col } from "react-grid-system";
import { Box } from "react-basic-blocks";
import StyledImage from "components/StyledImage";

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
              <VirtualText>Virtual Speakers</VirtualText>
              <BigText>
                World class
                <br />
                <u>{heroDescriptor}</u>,<br />
                on demand.
              </BigText>
              <StyledImage src={imageUrl}></StyledImage>
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
