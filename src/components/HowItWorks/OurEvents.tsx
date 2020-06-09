import React, { FC } from "react";
import { Container, Row, Col } from "react-grid-system";
import {
  HeaderText,
  DescriptionText,
  BigText,
  Button,
  StyledImage,
} from "styles/components";
import { Box } from "react-basic-blocks";
import colors from "styles/colors";

const OurEvents: FC = () => {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col offset={{ lg: 1 }} xs={12} md={9} lg={6}>
            <Box margin="80px 0">
              <BigText>Our Events</BigText>
              <DescriptionText maxWidth="670px">
                In the new digital age, we provide the ability to book top tier
                talent for a wide variety of virtual egagements.
              </DescriptionText>
            </Box>
          </Col>
        </Row>
        <Row align="center">
          <Col offset={{ lg: 1 }} lg={4} md={5} xs={12}>
            <Box justifyContent="center">
              <HeaderText>Inspiring your team</HeaderText>
              <DescriptionText color={colors.midGrey}>
                Learn how Kevin Hart inspired a hardworking team of students and
                teachers at lorem ipsum university.
              </DescriptionText>
              <Button margin="30px 0 0 0">Watch the Case Study</Button>
            </Box>
          </Col>
          <Col lg={6} xs={12}>
            <Box
              backgroundColor={colors.midDarkGrey}
              padding="12px"
              borderRadius="23px"
              alignItems="center"
              justifyContent="center"
              border="1px solid #2a2a2a"
            >
              <StyledImage
                src="https://townsquare.media/site/942/files/2020/04/GettyImages-1203242170.jpg?w=980&q=75"
                borderRadius="12px"
              />
            </Box>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default OurEvents;
